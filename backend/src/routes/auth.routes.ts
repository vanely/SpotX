import { Router } from 'express';
import { AuthController } from '@/controllers/auth.controller';
import { authenticate } from '@/middleware/auth.middleware';
import { validateBody, validateParams } from '@/middleware/validation.middleware';
import { 
  loginSchema, 
  verifyMagicLinkSchema, 
  updateProfileSchema 
} from '@/utils/validation.util';
import { z } from 'zod';

const router = Router();
const authController = new AuthController();

// Public routes
router.post(
  '/send-magic-link',
  validateBody(loginSchema),
  authController.sendMagicLink
);

router.post(
  '/verify-magic-link',
  validateBody(verifyMagicLinkSchema),
  authController.verifyMagicLink
);

// Protected routes
router.get(
  '/profile',
  authenticate,
  authController.getProfile
);

router.put(
  '/profile',
  authenticate,
  validateBody(updateProfileSchema),
  authController.updateProfile
);

router.post(
  '/logout',
  authenticate,
  authController.logout
);

router.get(
  '/validate',
  authenticate,
  authController.validateToken
);

// Public user profile (by ID)
router.get(
  '/users/:userId',
  validateParams(z.object({ params: z.object({ userId: z.string().uuid() }) })),
  authController.getUserById
);

export { router as authRoutes };
