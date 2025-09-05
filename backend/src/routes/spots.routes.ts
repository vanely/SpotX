import { Router } from 'express';
import { SpotsController } from '@/controllers/spots.controller';
import { authenticate, optionalAuthenticate } from '@/middleware/auth.middleware';
import { validateBody, validateParams, validateQuery } from '@/middleware/validation.middleware';
import {
  createSpotSchema,
  updateSpotSchema,
  getSpotsByLocationSchema,
  rateSpotSchema,
  addSpotTagSchema,
} from '@/utils/validation.util';
import { z } from 'zod';

const router = Router();
const spotsController = new SpotsController();

// Public routes (with optional authentication)
router.get(
  '/search',
  optionalAuthenticate,
  validateQuery(z.object({
    query: z.object({
      latitude: z.string().optional().transform(val => val ? parseFloat(val) : undefined),
      longitude: z.string().optional().transform(val => val ? parseFloat(val) : undefined),
      radius: z.string().optional().transform(val => val ? parseFloat(val) : undefined),
      categoryId: z.string().uuid().optional(),
      tags: z.string().optional(),
      search: z.string().optional(),
      limit: z.string().optional().transform(val => val ? parseInt(val) : undefined),
      offset: z.string().optional().transform(val => val ? parseInt(val) : undefined),
      sortBy: z.enum(['distance', 'newest', 'oldest', 'popular']).optional(),
    })
  })),
  spotsController.searchSpots
);

router.get(
  '/nearby',
  optionalAuthenticate,
  validateQuery(z.object({
    query: z.object({
      latitude: z.string().transform(val => parseFloat(val)),
      longitude: z.string().transform(val => parseFloat(val)),
      radius: z.string().optional().transform(val => val ? parseFloat(val) : 10),
    })
  })),
  spotsController.getNearbySpots
);

router.get(
  '/stats',
  spotsController.getSpotStats
);

router.get(
  '/:spotId',
  optionalAuthenticate,
  validateParams(z.object({
    params: z.object({
      spotId: z.string().uuid()
    })
  })),
  spotsController.getSpotById
);

// Protected routes (require authentication)
router.use(authenticate);

router.post(
  '/',
  validateBody(createSpotSchema),
  spotsController.createSpot
);

router.put(
  '/:spotId',
  validateParams(z.object({
    params: z.object({
      spotId: z.string().uuid()
    })
  })),
  validateBody(updateSpotSchema.omit({ id: true })),
  spotsController.updateSpot
);

router.delete(
  '/:spotId',
  validateParams(z.object({
    params: z.object({
      spotId: z.string().uuid()
    })
  })),
  spotsController.deleteSpot
);

// Rating and tagging
router.post(
  '/rate',
  validateBody(rateSpotSchema),
  spotsController.rateSpot
);

router.post(
  '/tag',
  validateBody(addSpotTagSchema),
  spotsController.addSpotTag
);

// Image management
router.post(
  '/:spotId/images',
  validateParams(z.object({
    params: z.object({
      spotId: z.string().uuid()
    })
  })),
  validateBody(z.object({
    images: z.array(z.object({
      url: z.string().url(),
      key: z.string(),
      alt: z.string().optional(),
      caption: z.string().optional(),
      order: z.number().optional(),
    })).min(1).max(10)
  })),
  spotsController.uploadSpotImages
);

router.delete(
  '/:spotId/images/:imageId',
  validateParams(z.object({
    params: z.object({
      spotId: z.string().uuid(),
      imageId: z.string().uuid()
    })
  })),
  spotsController.deleteSpotImage
);

export { router as spotsRoutes };
