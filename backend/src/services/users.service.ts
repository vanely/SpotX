import { db } from '@/config/database.config';
import { ERROR_MESSAGES } from '@/utils/constants';
import { AuthenticatedUser } from '@/types/auth.types';

export interface UserProfile extends AuthenticatedUser {
  stats: {
    spotsCount: number;
    ratingsCount: number;
    collectionsCount: number;
    reputation: number;
  };
}

export interface Collection {
  id: string;
  name: string;
  description: string | null;
  isPublic: boolean;
  userId: string;
  createdAt: string;
  updatedAt: string;
  _count: {
    spots: number;
  };
  spots?: CollectionSpotWithDetails[];
}

export interface CollectionSpotWithDetails {
  id: string;
  order: number;
  createdAt: string;
  spot: {
    id: string;
    title: string;
    latitude: number;
    longitude: number;
    category: {
      id: string;
      name: string;
      icon: string | null;
      color: string;
    };
    images: Array<{
      id: string;
      url: string;
      alt: string | null;
    }>;
  };
}

export interface CreateCollectionRequest {
  name: string;
  description?: string;
  isPublic?: boolean;
}

export interface UpdateCollectionRequest extends Partial<CreateCollectionRequest> {
  id: string;
}

export interface AddToCollectionRequest {
  collectionId: string;
  spotId: string;
}

export interface UserSearchParams {
  search?: string;
  limit?: number;
  offset?: number;
  sortBy?: 'newest' | 'reputation' | 'spots' | 'username';
}

export class UsersService {
  // User Profile Management
  async getUserProfile(userId: string): Promise<UserProfile | null> {
    const user = await db.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return null;
    }

    const stats = await this.getUserStats(userId);

    return {
      ...user,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
      stats,
    };
  }

  async getPublicUserProfile(userId: string): Promise<{
    user: Pick<AuthenticatedUser, 'id' | 'username' | 'displayName' | 'avatar' | 'bio' | 'reputation' | 'createdAt'>;
    stats: {
      spotsCount: number;
      ratingsCount: number;
      collectionsCount: number;
      reputation: number;
    };
  } | null> {
    const user = await db.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        displayName: true,
        avatar: true,
        bio: true,
        reputation: true,
        createdAt: true,
      },
    });

    if (!user) {
      return null;
    }

    const stats = await this.getUserStats(userId);

    return {
      user: {
        ...user,
        createdAt: user.createdAt.toISOString(),
      },
      stats,
    };
  }

  async searchUsers(params: UserSearchParams): Promise<{
    users: Array<Pick<AuthenticatedUser, 'id' | 'username' | 'displayName' | 'avatar' | 'bio' | 'reputation' | 'createdAt'>>;
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
      search,
      limit = 20,
      offset = 0,
      sortBy = 'reputation',
    } = params;

    let whereClause: any = {};
    let orderBy: any = {};

    // Search filter
    if (search) {
      whereClause.OR = [
        {
          username: {
            contains: search,
            mode: 'insensitive',
          },
        },
        {
          displayName: {
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
      case 'reputation':
        orderBy = { reputation: 'desc' };
        break;
      case 'username':
        orderBy = { username: 'asc' };
        break;
      case 'spots':
        orderBy = { spots: { _count: 'desc' } };
        break;
      default:
        orderBy = { reputation: 'desc' };
    }

    const [users, total] = await Promise.all([
      db.user.findMany({
        where: whereClause,
        select: {
          id: true,
          username: true,
          displayName: true,
          avatar: true,
          bio: true,
          reputation: true,
          createdAt: true,
        },
        orderBy,
        take: limit,
        skip: offset,
      }),
      db.user.count({ where: whereClause }),
    ]);

    const formattedUsers = users.map(user => ({
      ...user,
      createdAt: user.createdAt.toISOString(),
    }));

    const page = Math.floor(offset / limit) + 1;
    const totalPages = Math.ceil(total / limit);

    return {
      users: formattedUsers,
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

  async getUserStats(userId: string): Promise<{
    spotsCount: number;
    ratingsCount: number;
    collectionsCount: number;
    reputation: number;
  }> {
    const [spotsCount, ratingsCount, collectionsCount, user] = await Promise.all([
      db.spot.count({ where: { userId } }),
      db.spotRating.count({ where: { userId } }),
      db.collection.count({ where: { userId } }),
      db.user.findUnique({ where: { id: userId }, select: { reputation: true } }),
    ]);

    return {
      spotsCount,
      ratingsCount,
      collectionsCount,
      reputation: user?.reputation || 0,
    };
  }

  async getUserSpots(userId: string, limit: number = 20, offset: number = 0) {
    const spots = await db.spot.findMany({
      where: { userId },
      include: {
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
          take: 1,
          orderBy: { order: 'asc' },
        },
        _count: {
          select: {
            ratings: true,
            tags: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
      skip: offset,
    });

    return spots.map(spot => ({
      ...spot,
      createdAt: spot.createdAt.toISOString(),
      updatedAt: spot.updatedAt.toISOString(),
    }));
  }

  // Collection Management
  async getUserCollections(userId: string, includePrivate: boolean = false): Promise<Collection[]> {
    const whereClause: any = { userId };
    
    if (!includePrivate) {
      whereClause.isPublic = true;
    }

    const collections = await db.collection.findMany({
      where: whereClause,
      include: {
        _count: {
          select: {
            spots: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return collections.map(this.formatCollectionResponse);
  }

  async getCollectionById(collectionId: string, userId?: string): Promise<Collection | null> {
    const collection = await db.collection.findUnique({
      where: { id: collectionId },
      include: {
        _count: {
          select: {
            spots: true,
          },
        },
        spots: {
          include: {
            spot: {
              include: {
                category: {
                  select: {
                    id: true,
                    name: true,
                    icon: true,
                    color: true,
                  },
                },
                images: {
                  take: 1,
                  orderBy: { order: 'asc' },
                  select: {
                    id: true,
                    url: true,
                    alt: true,
                  },
                },
              },
            },
          },
          orderBy: { order: 'asc' },
        },
      },
    });

    if (!collection) {
      return null;
    }

    // Check if user can view this collection
    if (!collection.isPublic && collection.userId !== userId) {
      throw new Error(ERROR_MESSAGES.FORBIDDEN);
    }

    return {
      ...this.formatCollectionResponse(collection),
      spots: collection.spots.map(spot => ({
        id: spot.id,
        order: spot.order,
        createdAt: spot.createdAt.toISOString(),
        spot: {
          id: spot.spot.id,
          title: spot.spot.title,
          latitude: spot.spot.latitude,
          longitude: spot.spot.longitude,
          category: spot.spot.category,
          images: spot.spot.images,
        },
      })),
    };
  }

  async createCollection(userId: string, data: CreateCollectionRequest): Promise<Collection> {
    const { name, description, isPublic = false } = data;

    const collection = await db.collection.create({
      data: {
        name,
        description,
        isPublic,
        userId,
      },
      include: {
        _count: {
          select: {
            spots: true,
          },
        },
      },
    });

    // Update user reputation for creating collection
    await db.user.update({
      where: { id: userId },
      data: {
        reputation: {
          increment: 5, // Points for creating a collection
        },
      },
    });

    return this.formatCollectionResponse(collection);
  }

  async updateCollection(userId: string, collectionId: string, data: Partial<CreateCollectionRequest>): Promise<Collection> {
    // Verify collection exists and user owns it
    const existingCollection = await db.collection.findUnique({
      where: { id: collectionId },
    });

    if (!existingCollection) {
      throw new Error('Collection not found');
    }

    if (existingCollection.userId !== userId) {
      throw new Error(ERROR_MESSAGES.FORBIDDEN);
    }

    const collection = await db.collection.update({
      where: { id: collectionId },
      data,
      include: {
        _count: {
          select: {
            spots: true,
          },
        },
      },
    });

    return this.formatCollectionResponse(collection);
  }

  async deleteCollection(userId: string, collectionId: string): Promise<void> {
    // Verify collection exists and user owns it
    const collection = await db.collection.findUnique({
      where: { id: collectionId },
    });

    if (!collection) {
      throw new Error('Collection not found');
    }

    if (collection.userId !== userId) {
      throw new Error(ERROR_MESSAGES.FORBIDDEN);
    }

    await db.collection.delete({
      where: { id: collectionId },
    });
  }

  async addSpotToCollection(userId: string, data: AddToCollectionRequest): Promise<void> {
    const { collectionId, spotId } = data;

    // Verify collection exists and user owns it
    const collection = await db.collection.findUnique({
      where: { id: collectionId },
    });

    if (!collection) {
      throw new Error('Collection not found');
    }

    if (collection.userId !== userId) {
      throw new Error(ERROR_MESSAGES.FORBIDDEN);
    }

    // Verify spot exists
    const spot = await db.spot.findUnique({
      where: { id: spotId },
    });

    if (!spot) {
      throw new Error(ERROR_MESSAGES.SPOT_NOT_FOUND);
    }

    // Get the next order number
    const lastSpot = await db.collectionSpot.findFirst({
      where: { collectionId },
      orderBy: { order: 'desc' },
    });

    const nextOrder = (lastSpot?.order || 0) + 1;

    // Add spot to collection
    await db.collectionSpot.create({
      data: {
        collectionId,
        spotId,
        order: nextOrder,
      },
    });

    // Update user reputation
    await db.user.update({
      where: { id: userId },
      data: {
        reputation: {
          increment: 1, // Points for curating collections
        },
      },
    });
  }

  async removeSpotFromCollection(userId: string, collectionId: string, spotId: string): Promise<void> {
    // Verify collection exists and user owns it
    const collection = await db.collection.findUnique({
      where: { id: collectionId },
    });

    if (!collection) {
      throw new Error('Collection not found');
    }

    if (collection.userId !== userId) {
      throw new Error(ERROR_MESSAGES.FORBIDDEN);
    }

    // Remove spot from collection
    await db.collectionSpot.deleteMany({
      where: {
        collectionId,
        spotId,
      },
    });
  }

  async reorderCollectionSpots(
    userId: string,
    collectionId: string,
    spotOrders: Array<{ spotId: string; order: number }>
  ): Promise<void> {
    // Verify collection exists and user owns it
    const collection = await db.collection.findUnique({
      where: { id: collectionId },
    });

    if (!collection) {
      throw new Error('Collection not found');
    }

    if (collection.userId !== userId) {
      throw new Error(ERROR_MESSAGES.FORBIDDEN);
    }

    // Update orders in transaction
    await db.$transaction(
      spotOrders.map(({ spotId, order }) =>
        db.collectionSpot.updateMany({
          where: {
            collectionId,
            spotId,
          },
          data: { order },
        })
      )
    );
  }

  async getPublicCollections(limit: number = 20, offset: number = 0): Promise<{
    collections: Collection[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
      hasNext: boolean;
      hasPrevious: boolean;
    };
  }> {
    const [collections, total] = await Promise.all([
      db.collection.findMany({
        where: { isPublic: true },
        include: {
          _count: {
            select: {
              spots: true,
            },
          },
        },
        orderBy: { createdAt: 'desc' },
        take: limit,
        skip: offset,
      }),
      db.collection.count({ where: { isPublic: true } }),
    ]);

    const formattedCollections = collections.map(this.formatCollectionResponse);

    const page = Math.floor(offset / limit) + 1;
    const totalPages = Math.ceil(total / limit);

    return {
      collections: formattedCollections,
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

  private formatCollectionResponse(collection: any): Collection {
    return {
      ...collection,
      createdAt: collection.createdAt.toISOString(),
      updatedAt: collection.updatedAt.toISOString(),
    };
  }
}
