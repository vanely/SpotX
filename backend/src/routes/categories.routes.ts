import { Router } from 'express';
import { CategoriesController } from '@/controllers/categories.controller';
import { authenticate, optionalAuthenticate } from '@/middleware/auth.middleware';
import { validateBody, validateParams, validateQuery } from '@/middleware/validation.middleware';
import { createCategorySchema, createTagSchema } from '@/utils/validation.util';
import { z } from 'zod';

const router = Router();
const categoriesController = new CategoriesController();

// Public routes
router.get(
  '/',
  categoriesController.getAllCategories
);

router.get(
  '/official',
  categoriesController.getOfficialCategories
);

router.get(
  '/stats',
  categoriesController.getCategoryStats
);

router.get(
  '/:categoryId',
  validateParams(z.object({
    params: z.object({
      categoryId: z.string().uuid()
    })
  })),
  categoriesController.getCategoryById
);

router.get(
  '/slug/:slug',
  validateParams(z.object({
    params: z.object({
      slug: z.string().min(1)
    })
  })),
  categoriesController.getCategoryBySlug
);

// TAG ROUTES (Public)
router.get(
  '/tags/all',
  categoriesController.getAllTags
);

router.get(
  '/tags/popular',
  validateQuery(z.object({
    query: z.object({
      limit: z.string().optional().transform(val => val ? parseInt(val) : 20)
    })
  })),
  categoriesController.getPopularTags
);

router.get(
  '/tags/search',
  validateQuery(z.object({
    query: z.object({
      q: z.string().min(1)
    })
  })),
  categoriesController.searchTags
);

router.get(
  '/tags/category/:category',
  validateParams(z.object({
    params: z.object({
      category: z.enum(['surface', 'difficulty', 'features', 'conditions', 'accessibility', 'other'])
    })
  })),
  categoriesController.getTagsByCategory
);

// Protected routes (require authentication)
router.use(authenticate);

// Category management (community proposals)
router.post(
  '/propose',
  validateBody(createCategorySchema),
  categoriesController.proposeCategory
);

// Admin-only routes (TODO: Add admin middleware)
router.post(
  '/',
  validateBody(createCategorySchema),
  categoriesController.createCategory
);

router.put(
  '/:categoryId',
  validateParams(z.object({
    params: z.object({
      categoryId: z.string().uuid()
    })
  })),
  validateBody(createCategorySchema.partial()),
  categoriesController.updateCategory
);

router.delete(
  '/:categoryId',
  validateParams(z.object({
    params: z.object({
      categoryId: z.string().uuid()
    })
  })),
  categoriesController.deleteCategory
);

// Tag management
router.post(
  '/tags',
  validateBody(createTagSchema),
  categoriesController.createTag
);

router.put(
  '/tags/:tagId',
  validateParams(z.object({
    params: z.object({
      tagId: z.string().uuid()
    })
  })),
  validateBody(createTagSchema.partial()),
  categoriesController.updateTag
);

router.delete(
  '/tags/:tagId',
  validateParams(z.object({
    params: z.object({
      tagId: z.string().uuid()
    })
  })),
  categoriesController.deleteTag
);

export { router as categoriesRoutes };
