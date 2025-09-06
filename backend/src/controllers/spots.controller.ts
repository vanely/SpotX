import { Response } from 'express';
import { SpotsService } from '@/services/spots.service';
import { HTTP_STATUS, SUCCESS_MESSAGES, ERROR_MESSAGES } from '@/utils/constants';
import { asyncHandler } from '@/middleware/error.middleware';
import { AuthenticatedRequest } from '@/middleware/auth.middleware';
import { SpotSearchParams } from '@/types/spots.types';

export class SpotsController {
  private spotsService: SpotsService;

  constructor() {
    this.spotsService = new SpotsService();
  }

  // Create a new spot
  createSpot = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const userId = req.userId;
    const spotData = req.body;

    const spot = await this.spotsService.createSpot(userId, spotData);

    res.status(HTTP_STATUS.CREATED).json({
      success: true,
      message: SUCCESS_MESSAGES.SPOT_CREATED,
      data: {
        spot,
      },
    });
  });

  // Get spot by ID
  getSpotById = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const { spotId } = req.params;
    const userId = req.userId; // Optional for view tracking

    const spot = await this.spotsService.getSpotById(spotId as string, userId);

    if (!spot) {
      res.status(HTTP_STATUS.NOT_FOUND).json({
        success: false,
        message: ERROR_MESSAGES.SPOT_NOT_FOUND,
      });
      return;
    }

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        spot,
      },
    });
  });

  // Update spot
  updateSpot = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const { spotId } = req.params;
    const userId = req.userId;
    const updateData = req.body;

    const spot = await this.spotsService.updateSpot(spotId as string, userId, updateData);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: SUCCESS_MESSAGES.SPOT_UPDATED,
      data: {
        spot,
      },
    });
  });

  // Delete spot
  deleteSpot = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const { spotId } = req.params;
    const userId = req.userId;

    await this.spotsService.deleteSpot(spotId as string, userId);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: SUCCESS_MESSAGES.SPOT_DELETED,
    });
  });

  // Search spots with pagination
  searchSpots = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const searchParams: SpotSearchParams = {
      latitude: req.query.latitude ? parseFloat(req.query.latitude as string) : undefined,
      longitude: req.query.longitude ? parseFloat(req.query.longitude as string) : undefined,
      radius: req.query.radius ? parseFloat(req.query.radius as string) : undefined,
      categoryId: req.query.categoryId as string,
      tags: req.query.tags ? (req.query.tags as string).split(',') : undefined,
      search: req.query.search as string,
      limit: req.query.limit ? parseInt(req.query.limit as string) : undefined,
      offset: req.query.offset ? parseInt(req.query.offset as string) : undefined,
      sortBy: req.query.sortBy as 'distance' | 'newest' | 'oldest' | 'popular',
    };

    const result = await this.spotsService.searchSpots(searchParams);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        spots: result.spots,
        pagination: result.pagination,
      },
    });
  });

  // Get nearby spots (lightweight for map display)
  getNearbySpots = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const { latitude, longitude } = req.query;
    const radius = req.query.radius ? parseFloat(req.query.radius as string) : 10;

    if (!latitude || !longitude) {
      res.status(HTTP_STATUS.BAD_REQUEST).json({
        success: false,
        message: 'Latitude and longitude are required',
      });
      return;
    }

    const spots = await this.spotsService.getNearbySpots(
      parseFloat(latitude as string),
      parseFloat(longitude as string),
      radius
    );

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        spots,
      },
    });
  });

  // Rate a spot
  rateSpot = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const userId = req.userId;
    const ratingData = req.body;

    await this.spotsService.rateSpot(userId, ratingData);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: 'Spot rated successfully',
    });
  });

  // Add tag to spot
  addSpotTag = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const userId = req.userId;
    const tagData = req.body;

    await this.spotsService.addSpotTag(userId, tagData);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: 'Tag added to spot successfully',
    });
  });

  // Get spots statistics
  getSpotStats = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const stats = await this.spotsService.getSpotStats();

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        stats,
      },
    });
  });

  // Upload spot images
  uploadSpotImages = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const { spotId } = req.params;
    const { images } = req.body; // Array of { url, key, alt?, caption?, order? }
    const userId = req.userId;

    // Verify spot exists and user owns it
    const spot = await this.spotsService.getSpotById(spotId as string);
    
    if (!spot) {
      res.status(HTTP_STATUS.NOT_FOUND).json({
        success: false,
        message: ERROR_MESSAGES.SPOT_NOT_FOUND,
      });
      return;
    }

    if (spot.user.id !== userId) {
      res.status(HTTP_STATUS.FORBIDDEN).json({
        success: false,
        message: ERROR_MESSAGES.FORBIDDEN,
      });
      return;
    }

    // Add images to spot using database service
    const db = require('@/config/database.config').db;
    
    const spotImages = await Promise.all(
      images.map((image: any, index: number) =>
        db.spotImage.create({
          data: {
            spotId,
            url: image.url,
            key: image.key,
            alt: image.alt,
            caption: image.caption,
            order: image.order || index,
          },
        })
      )
    );

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: 'Images uploaded successfully',
      data: {
        images: spotImages,
      },
    });
  });

  // Delete spot image
  deleteSpotImage = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const { spotId, imageId } = req.params;
    const userId = req.userId;

    const db = require('@/config/database.config').db;

    // Verify spot exists and user owns it
    const spot = await this.spotsService.getSpotById(spotId as string);
    
    if (!spot) {
      res.status(HTTP_STATUS.NOT_FOUND).json({
        success: false,
        message: ERROR_MESSAGES.SPOT_NOT_FOUND,
      });
      return;
    }

    if (spot.user.id !== userId) {
      res.status(HTTP_STATUS.FORBIDDEN).json({
        success: false,
        message: ERROR_MESSAGES.FORBIDDEN,
      });
      return;
    }

    // Find and delete image
    const image = await db.spotImage.findFirst({
      where: {
        id: imageId,
        spotId,
      },
    });

    if (!image) {
      res.status(HTTP_STATUS.NOT_FOUND).json({
        success: false,
        message: 'Image not found',
      });
      return;
    }

    await db.spotImage.delete({
      where: { id: imageId },
    });

    // TODO: Delete file from R2 storage
    // await uploadsService.deleteFile(image.key);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: 'Image deleted successfully',
    });
  });
}
