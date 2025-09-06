import { db } from '@/config/database.config';
import { ERROR_MESSAGES } from '@/utils/constants';
import { 
  SpotWithDetails, 
  CreateSpotRequest, 
  UpdateSpotRequest, 
  SpotSearchParams,
  SpotLocation,
  RateSpotRequest,
  AddSpotTagRequest,
  SpotStats
} from '@/types/spots.types';
import { PaginatedResponse } from '@/types/api.types';

export class SpotsService {
  async createSpot(userId: string, data: CreateSpotRequest): Promise<SpotWithDetails> {
    const { latitude, longitude, categoryId, ...spotData } = data;

    // Verify category exists
    const category = await db.category.findUnique({
      where: { id: categoryId },
    });

    if (!category) {
      throw new Error(ERROR_MESSAGES.CATEGORY_NOT_FOUND);
    }

    // Check if spot already exists at this exact location (within 10 meters)
    const existingSpot = await db.$queryRaw<Array<{ id: string }>>`
      SELECT id FROM spots 
      WHERE ST_DWithin(
        location::geography,
        ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)::geography,
        10
      )
      LIMIT 1
    `;

    if (existingSpot.length > 0) {
      throw new Error(ERROR_MESSAGES.SPOT_ALREADY_EXISTS);
    }

    // Create the spot with PostGIS point
    const spot = await db.spot.create({
      data: {
        ...spotData,
        latitude,
        longitude,
        userId,
        categoryId,
        location: db.$queryRaw`ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)`,
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            displayName: true,
            avatar: true,
          },
        },
        category: {
          select: {
            id: true,
            name: true,
            slug: true,
            icon: true,
            color: true,
          },
        },
        images: true,
        tags: {
          include: {
            tag: true,
          },
        },
        ratings: true,
        _count: {
          select: {
            ratings: true,
            tags: true,
            images: true,
          },
        },
      },
    });

    // Update user reputation for contributing
    await db.user.update({
      where: { id: userId },
      data: {
        reputation: {
          increment: 10, // Points for adding a spot
        },
      },
    });

    return this.formatSpotResponse(spot);
  }

  async getSpotById(spotId: string, userId?: string): Promise<SpotWithDetails | null> {
    const spot = await db.spot.findUnique({
      where: { id: spotId },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            displayName: true,
            avatar: true,
          },
        },
        category: {
          select: {
            id: true,
            name: true,
            slug: true,
            icon: true,
            color: true,
          },
        },
        images: {
          orderBy: { order: 'asc' },
        },
        tags: {
          include: {
            tag: true,
          },
        },
        ratings: true,
        _count: {
          select: {
            ratings: true,
            tags: true,
            images: true,
          },
        },
      },
    });

    if (!spot) {
      return null;
    }

    // Increment view count
    await db.spot.update({
      where: { id: spotId },
      data: {
        viewCount: {
          increment: 1,
        },
      },
    });

    return this.formatSpotResponse(spot);
  }

  async updateSpot(spotId: string, userId: string, data: Partial<UpdateSpotRequest>): Promise<SpotWithDetails> {
    // Verify spot exists and user owns it
    const existingSpot = await db.spot.findUnique({
      where: { id: spotId },
    });

    if (!existingSpot) {
      throw new Error(ERROR_MESSAGES.SPOT_NOT_FOUND);
    }

    if (existingSpot.userId !== userId) {
      throw new Error(ERROR_MESSAGES.FORBIDDEN);
    }

    // If coordinates are being updated, verify category and check for duplicates
    if (data.latitude && data.longitude && data.categoryId) {
      const category = await db.category.findUnique({
        where: { id: data.categoryId },
      });

      if (!category) {
        throw new Error(ERROR_MESSAGES.CATEGORY_NOT_FOUND);
      }

      // Check for existing spot at new location
      const existingAtLocation = await db.$queryRaw<Array<{ id: string }>>`
        SELECT id FROM spots 
        WHERE id != ${spotId}
        AND ST_DWithin(
          location::geography,
          ST_SetSRID(ST_MakePoint(${data.longitude}, ${data.latitude}), 4326)::geography,
          10
        )
        LIMIT 1
      `;

      if (existingAtLocation.length > 0) {
        throw new Error(ERROR_MESSAGES.SPOT_ALREADY_EXISTS);
      }
    }

    const { latitude, longitude, ...updateData } = data;

    // Update spot
    const updatedSpot = await db.spot.update({
      where: { id: spotId },
      data: {
        ...updateData,
        ...(latitude && longitude && {
          latitude,
          longitude,
          location: db.$queryRaw`ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)`,
        }),
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            displayName: true,
            avatar: true,
          },
        },
        category: {
          select: {
            id: true,
            name: true,
            slug: true,
            icon: true,
            color: true,
          },
        },
        images: {
          orderBy: { order: 'asc' },
        },
        tags: {
          include: {
            tag: true,
          },
        },
        ratings: true,
        _count: {
          select: {
            ratings: true,
            tags: true,
            images: true,
          },
        },
      },
    });

    return this.formatSpotResponse(updatedSpot);
  }

  async deleteSpot(spotId: string, userId: string): Promise<void> {
    // Verify spot exists and user owns it
    const spot = await db.spot.findUnique({
      where: { id: spotId },
      include: {
        images: true,
      },
    });

    if (!spot) {
      throw new Error(ERROR_MESSAGES.SPOT_NOT_FOUND);
    }

    if (spot.userId !== userId) {
      throw new Error(ERROR_MESSAGES.FORBIDDEN);
    }

    // Delete spot (cascade will handle related records)
    await db.spot.delete({
      where: { id: spotId },
    });

    // TODO: Delete associated files from R2 storage
    // for (const image of spot.images) {
    //   await uploadsService.deleteFile(image.key);
    // }
  }

  async searchSpots(params: SpotSearchParams): Promise<{
    spots: SpotWithDetails[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
      hasNext: boolean;
      hasPrevious: boolean;
    };
  }> {
    const {
      latitude,
      longitude,
      radius = 10,
      categoryId,
      tags = [],
      search,
      limit = 20,
      offset = 0,
      sortBy = 'distance',
    } = params;

    let whereClause: any = {};
    let orderBy: any = {};

    // Category filter
    if (categoryId) {
      whereClause.categoryId = categoryId;
    }

    // Tag filter
    if (tags.length > 0) {
      whereClause.tags = {
        some: {
          tag: {
            slug: {
              in: tags,
            },
          },
        },
      };
    }

    // Search filter
    if (search) {
      whereClause.OR = [
        {
          title: {
            contains: search,
            mode: 'insensitive',
          },
        },
        {
          description: {
            contains: search,
            mode: 'insensitive',
          },
        },
      ];
    }

    // Sorting
    switch (sortBy) {
      case 'newest':
        orderBy = { createdAt: 'desc' };
        break;
      case 'oldest':
        orderBy = { createdAt: 'asc' };
        break;
      case 'popular':
        orderBy = { viewCount: 'desc' };
        break;
      case 'distance':
      default:
        // Distance sorting will be handled by PostGIS query
        break;
    }

    let spots: any[] = [];
    let total: number = 0;

    if (latitude && longitude) {
      // Use PostGIS for location-based search
      spots = await db.$queryRaw<any[]>`
        SELECT 
          s.*,
          ST_Distance(
            s.location::geography,
            ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)::geography
          ) / 1000 as distance
        FROM spots s
        WHERE ST_DWithin(
          s.location::geography,
          ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)::geography,
          ${radius * 1000}
        )
        ${categoryId ? `AND s."categoryId" = '${categoryId}'` : ''}
        ORDER BY ${sortBy === 'distance' ? 'distance ASC' : 's."createdAt" DESC'}
        LIMIT ${limit}
        OFFSET ${offset}
      `;

      // Get total count
      const totalResult = await db.$queryRaw<[{ count: bigint }]>`
        SELECT COUNT(*) as count
        FROM spots s
        WHERE ST_DWithin(
          s.location::geography,
          ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)::geography,
          ${radius * 1000}
        )
        ${categoryId ? `AND s."categoryId" = '${categoryId}'` : ''}
      `;

      total = Number(totalResult[0].count);

      // Enrich with related data
      const spotIds = spots.map((s) => s.id);
      const enrichedSpots = await db.spot.findMany({
        where: {
          id: { in: spotIds },
        },
        include: {
          user: {
            select: {
              id: true,
              username: true,
              displayName: true,
              avatar: true,
            },
          },
          category: {
            select: {
              id: true,
              name: true,
              slug: true,
              icon: true,
              color: true,
            },
          },
          images: {
            orderBy: { order: 'asc' },
          },
          tags: {
            include: {
              tag: true,
            },
          },
          ratings: true,
          _count: {
            select: {
              ratings: true,
              tags: true,
              images: true,
            },
          },
        },
      });

      // Merge distance data with enriched spots
      spots = enrichedSpots.map((spot) => {
        const distanceData = spots.find((s) => s.id === spot.id);
        return {
          ...spot,
          distance: distanceData?.distance || null,
        };
      });
    } else {
      // Regular search without location
      [spots, total] = await Promise.all([
        db.spot.findMany({
          where: whereClause,
          include: {
            user: {
              select: {
                id: true,
                username: true,
                displayName: true,
                avatar: true,
              },
            },
            category: {
              select: {
                id: true,
                name: true,
                slug: true,
                icon: true,
                color: true,
              },
            },
            images: {
              orderBy: { order: 'asc' },
            },
            tags: {
              include: {
                tag: true,
              },
            },
            ratings: true,
            _count: {
              select: {
                ratings: true,
                tags: true,
                images: true,
              },
            },
          },
          orderBy,
          take: limit,
          skip: offset,
        }),
        db.spot.count({ where: whereClause }),
      ]);
    }

    const formattedSpots = spots.map((spot) => this.formatSpotResponse(spot));

    const page = Math.floor(offset / limit) + 1;
    const totalPages = Math.ceil(total / limit);

    return {
      spots: formattedSpots,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrevious: page > 1,
      },
    };
  }

  async getNearbySpots(latitude: number, longitude: number, radius: number = 10): Promise<SpotLocation[]> {
    const spots = await db.$queryRaw<any[]>`
      SELECT 
        s.id,
        s.title,
        s.latitude,
        s.longitude,
        s."categoryId",
        ST_Distance(
          s.location::geography,
          ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)::geography
        ) / 1000 as distance
      FROM spots s
      WHERE ST_DWithin(
        s.location::geography,
        ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)::geography,
        ${radius * 1000}
      )
      ORDER BY distance ASC
      LIMIT 100
    `;

    return spots.map((spot) => ({
      id: spot.id,
      title: spot.title,
      latitude: spot.latitude,
      longitude: spot.longitude,
      categoryId: spot.categoryId,
      distance: spot.distance,
    }));
  }

  async rateSpot(userId: string, data: RateSpotRequest): Promise<void> {
    const { spotId, isPositive, comment } = data;

    // Verify spot exists
    const spot = await db.spot.findUnique({
      where: { id: spotId },
    });

    if (!spot) {
      throw new Error(ERROR_MESSAGES.SPOT_NOT_FOUND);
    }

    // Upsert rating
    await db.spotRating.upsert({
      where: {
        userId_spotId: {
          userId,
          spotId,
        },
      },
      update: {
        isPositive,
        comment: comment || null,
      },
      create: {
        userId,
        spotId,
        isPositive,
        comment: comment || null,
      },
    });

    // Update user reputation for rating
    await db.user.update({
      where: { id: userId },
      data: {
        reputation: {
          increment: 2, // Points for rating a spot
        },
      },
    });
  }

  async addSpotTag(userId: string, data: AddSpotTagRequest): Promise<void> {
    const { spotId, tagId } = data;

    // Verify spot and tag exist
    const [spot, tag] = await Promise.all([
      db.spot.findUnique({ where: { id: spotId } }),
      db.tag.findUnique({ where: { id: tagId } }),
    ]);

    if (!spot) {
      throw new Error(ERROR_MESSAGES.SPOT_NOT_FOUND);
    }

    if (!tag) {
      throw new Error('Tag not found');
    }

    // Add tag to spot
    await db.spotTag.upsert({
      where: {
        spotId_tagId_userId: {
          spotId,
          tagId,
          userId,
        },
      },
      update: {},
      create: {
        spotId,
        tagId,
        userId,
      },
    });

    // Update tag usage count
    await db.tag.update({
      where: { id: tagId },
      data: {
        usageCount: {
          increment: 1,
        },
      },
    });

    // Update user reputation for tagging
    await db.user.update({
      where: { id: userId },
      data: {
        reputation: {
          increment: 1, // Points for tagging a spot
        },
      },
    });
  }

  async getSpotStats(): Promise<SpotStats> {
    const [totalSpots, spotsByCategory, recentSpotsCount, topContributors] = await Promise.all([
      db.spot.count(),
      db.spot.groupBy({
        by: ['categoryId'],
        _count: {
          id: true,
        },
        orderBy: {
          _count: {
            id: 'desc',
          },
        },
      }),
      db.spot.count({
        where: {
          createdAt: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // Last 7 days
          },
        },
      }),
      db.user.findMany({
        select: {
          id: true,
          username: true,
          _count: {
            select: {
              spots: true,
            },
          },
        },
        orderBy: {
          spots: {
            _count: 'desc',
          },
        },
        take: 10,
      }),
    ]);

    // Enrich categories with names
    const categoryIds = spotsByCategory.map((item) => item.categoryId);
    const categories = await db.category.findMany({
      where: {
        id: { in: categoryIds },
      },
      select: {
        id: true,
        name: true,
      },
    });

    const categoryMap = new Map(categories.map((cat) => [cat.id, cat.name]));

    return {
      totalSpots,
      spotsByCategory: spotsByCategory.map((item) => ({
        categoryId: item.categoryId,
        categoryName: categoryMap.get(item.categoryId) || 'Unknown',
        count: item._count.id,
      })),
      recentSpots: recentSpotsCount,
      topContributors: topContributors.map((user) => ({
        userId: user.id,
        username: user.username || 'Anonymous',
        spotCount: user._count.spots,
      })),
    };
  }

  private formatSpotResponse(spot: any): SpotWithDetails {
    return {
      ...spot,
      createdAt: spot.createdAt.toISOString(),
      updatedAt: spot.updatedAt.toISOString(),
    };
  }
}
