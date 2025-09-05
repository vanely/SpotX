import { Router } from 'express';
import { UsersController } from '@/controllers/users.controller';
import { authenticate, optionalAuthenticate } from '@/middleware/auth.middleware';
import { validateBody, validateParams, validateQuery } from '@/middleware/validation.middleware';
import { createCollectionSchema, addToCollectionSchema } from '@/utils/validation.util';
import { z } from 'zod';

const router = Router();
const usersController = new UsersController();

// Public routes
router.get(
  '/search',
  validateQuery(z.object({
    query: z.object({
      search: z.string().optional(),
      limit: z.string().optional().transform(val => val ? parseInt(val) : 20),
      offset: z.string().optional().transform(val => val ? parseInt(val) : 0),
      sortBy: z.enum(['newest', 'reputation', 'spots', 'username']).optional(),
    })
  })),
  usersController.searchUsers
);

router.get(
  '/collections/public',
  validateQuery(z.object({
    query: z.object({
      limit: z.string().optional().transform(val => val ? parseInt(val) : 20),
      offset: z.string().optional().transform(val => val ? parseInt(val) : 0),
    })
  })),
  usersController.getPublicCollections
);

router.get(
  '/:userId',
  validateParams(z.object({
    params: z.object({
      userId: z.string().uuid()
    })
  })),
  usersController.getPublicUserProfile
);

router.get(
  '/:userId/stats',
  validateParams(z.object({
    params: z.object({
      userId: z.string().uuid()
    })
  })),
  usersController.getUserStats
);

router.get(
  '/:userId/spots',
  validateParams(z.object({
    params: z.object({
      userId: z.string().uuid()
    })
  })),
  validateQuery(z.object({
    query: z.object({
      limit: z.string().optional().transform(val => val ? parseInt(val) : 20),
      offset: z.string().optional().transform(val => val ? parseInt(val) : 0),
    })
  })),
  usersController.getUserSpots
);

router.get(
  '/:userId/collections',
  optionalAuthenticate,
  validateParams(z.object({
    params: z.object({
      userId: z.string().uuid()
    })
  })),
  usersController.getUserCollections
);

// Protected routes (require authentication)
router.use(authenticate);

// Current user profile
router.get(
  '/me/profile',
  usersController.getUserProfile
);

// Current user collections
router.get(
  '/me/collections',
  usersController.getMyCollections
);

// Collection management
router.get(
  '/collections/:collectionId',
  validateParams(z.object({
    params: z.object({
      collectionId: z.string().uuid()
    })
  })),
  usersController.getCollectionById
);

router.post(
  '/collections',
  validateBody(createCollectionSchema),
  usersController.createCollection
);

router.put(
  '/collections/:collectionId',
  validateParams(z.object({
    params: z.object({
      collectionId: z.string().uuid()
    })
  })),
  validateBody(createCollectionSchema.partial()),
  usersController.updateCollection
);

router.delete(
  '/collections/:collectionId',
  validateParams(z.object({
    params: z.object({
      collectionId: z.string().uuid()
    })
  })),
  usersController.deleteCollection
);

// Collection spot management
router.post(
  '/collections/add-spot',
  validateBody(addToCollectionSchema),
  usersController.addSpotToCollection
);

router.delete(
  '/collections/:collectionId/spots/:spotId',
  validateParams(z.object({
    params: z.object({
      collectionId: z.string().uuid(),
      spotId: z.string().uuid()
    })
  })),
  usersController.removeSpotFromCollection
);

router.put(
  '/collections/:collectionId/reorder',
  validateParams(z.object({
    params: z.object({
      collectionId: z.string().uuid()
    })
  })),
  validateBody(z.object({
    spotOrders: z.array(z.object({
      spotId: z.string().uuid(),
      order: z.number().min(0)
    })).min(1)
  })),
  usersController.reorderCollectionSpots
);

export { router as usersRoutes };
