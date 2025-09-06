import { Request, Response } from 'express';
import { UsersService } from '@/services/users.service';
import { HTTP_STATUS, SUCCESS_MESSAGES, ERROR_MESSAGES } from '@/utils/constants';
import { asyncHandler } from '@/middleware/error.middleware';
import { AuthenticatedRequest } from '@/middleware/auth.middleware';
import { UserSearchParams } from '@/services/users.service';

export class UsersController {
  private usersService: UsersService;

  constructor() {
    this.usersService = new UsersService();
  }

  // Get current user's full profile
  getUserProfile = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const userId = req.userId;

    const profile = await this.usersService.getUserProfile(userId as string);

    if (!profile) {
      res.status(HTTP_STATUS.NOT_FOUND).json({
        success: false,
        message: ERROR_MESSAGES.USER_NOT_FOUND,
      });
      return;
    }

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        profile,
      },
    });
  });

  // Get public user profile by ID
  getPublicUserProfile = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;

    const profile = await this.usersService.getPublicUserProfile(userId as string);

    if (!profile) {
      res.status(HTTP_STATUS.NOT_FOUND).json({
        success: false,
        message: ERROR_MESSAGES.USER_NOT_FOUND,
      });
      return;
    }

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: profile,
    });
  });

  // Search users
  searchUsers = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const searchParams: UserSearchParams = {
      search: req.query.search as string,
      limit: req.query.limit ? parseInt(req.query.limit as string) : 20,
      offset: req.query.offset ? parseInt(req.query.offset as string) : 0,
      sortBy: req.query.sortBy as 'newest' | 'reputation' | 'spots' | 'username',
    };

    const result = await this.usersService.searchUsers(searchParams);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        users: result.users,
        pagination: result.pagination,
      },
    });
  });

  // Get user's spots
  getUserSpots = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 20;
    const offset = req.query.offset ? parseInt(req.query.offset as string) : 0;

    const spots = await this.usersService.getUserSpots(userId as string, limit, offset);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        spots,
      },
    });
  });

  // COLLECTION MANAGEMENT

  // Get user's collections
  getUserCollections = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const { userId } = req.params;
    const requestingUserId = req.userId;
    
    // Only show private collections if user is viewing their own profile
    const includePrivate = userId === requestingUserId;

    const collections = await this.usersService.getUserCollections(userId as string, includePrivate);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        collections,
      },
    });
  });

  // Get current user's collections (including private)
  getMyCollections = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const userId = req.userId;

    const collections = await this.usersService.getUserCollections(userId as string, true);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        collections,
      },
    });
  });

  // Get collection by ID
  getCollectionById = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const { collectionId } = req.params;
    const userId = req.userId; // For privacy check

    const collection = await this.usersService.getCollectionById(collectionId as string, userId as string);

    if (!collection) {
      res.status(HTTP_STATUS.NOT_FOUND).json({
        success: false,
        message: 'Collection not found',
      });
      return;
    }

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        collection,
      },
    });
  });

  // Create new collection
  createCollection = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const userId = req.userId;
    const collectionData = req.body;

    const collection = await this.usersService.createCollection(userId as string, collectionData);

    res.status(HTTP_STATUS.CREATED).json({
      success: true,
      message: SUCCESS_MESSAGES.COLLECTION_CREATED,
      data: {
        collection,
      },
    });
  });

  // Update collection
  updateCollection = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const { collectionId } = req.params;
    const userId = req.userId;
    const updateData = req.body;

    const collection = await this.usersService.updateCollection(userId as string, collectionId as string, updateData);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: 'Collection updated successfully',
      data: {
        collection,
      },
    });
  });

  // Delete collection
  deleteCollection = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const { collectionId } = req.params;
    const userId = req.userId;

    await this.usersService.deleteCollection(userId as string, collectionId as string);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: 'Collection deleted successfully',
    });
  });

  // Add spot to collection
  addSpotToCollection = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const userId = req.userId;
    const { collectionId, spotId } = req.body;

    await this.usersService.addSpotToCollection(userId as string, { collectionId, spotId });

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: 'Spot added to collection successfully',
    });
  });

  // Remove spot from collection
  removeSpotFromCollection = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const { collectionId, spotId } = req.params;
    const userId = req.userId;

    await this.usersService.removeSpotFromCollection(userId as string, collectionId as string, spotId as string);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: 'Spot removed from collection successfully',
    });
  });

  // Reorder spots in collection
  reorderCollectionSpots = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const { collectionId } = req.params;
    const { spotOrders } = req.body; // Array of { spotId, order }
    const userId = req.userId;

    await this.usersService.reorderCollectionSpots(userId as string, collectionId as string, spotOrders);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: 'Collection spots reordered successfully',
    });
  });

  // Get public collections (discover page)
  getPublicCollections = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 20;
    const offset = req.query.offset ? parseInt(req.query.offset as string) : 0;

    const result = await this.usersService.getPublicCollections(limit, offset);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        collections: result.collections,
        pagination: result.pagination,
      },
    });
  });

  // Get user statistics
  getUserStats = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { userId } = req.params;

    const stats = await this.usersService.getUserStats(userId as string);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        stats,
      },
    });
  });
}
