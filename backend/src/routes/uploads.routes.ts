import { Router } from 'express';
import { UploadsController } from '@/controllers/uploads.controller';
import { authenticate } from '@/middleware/auth.middleware';
import { validateBody, validateParams, validateQuery } from '@/middleware/validation.middleware';
import { uploadSchema } from '@/utils/validation.util';
import { z } from 'zod';

const router = Router();
const uploadsController = new UploadsController();

// All upload routes require authentication
router.use(authenticate);

// Generate presigned URL for single file
router.post(
  '/sign',
  validateBody(uploadSchema),
  uploadsController.generateUploadUrl
);

// Generate presigned URLs for multiple files
router.post(
  '/sign-multiple',
  validateBody(z.object({
    files: z.array(uploadSchema).min(1).max(10) // Max 10 files at once
  })),
  uploadsController.generateUploadUrls
);

// Validate file before upload
router.post(
  '/validate',
  validateBody(uploadSchema),
  uploadsController.validateFile
);

// Delete a file
router.delete(
  '/file/:fileKey',
  validateParams(z.object({
    params: z.object({
      fileKey: z.string().min(1)
    })
  })),
  uploadsController.deleteFile
);

// Get file info from URL
router.get(
  '/info',
  validateQuery(z.object({
    query: z.object({
      url: z.string().url()
    })
  })),
  uploadsController.getFileInfo
);

export { router as uploadsRoutes };