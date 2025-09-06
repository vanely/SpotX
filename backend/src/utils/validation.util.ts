import { z } from 'zod';
import { VALIDATION_RULES } from './constants';

// Base schemas
export const emailSchema = z
  .string()
  .email('Invalid email address')
  .min(1, 'Email is required');

export const usernameSchema = z
  .string()
  .min(VALIDATION_RULES.USERNAME_MIN_LENGTH, `Username must be at least ${VALIDATION_RULES.USERNAME_MIN_LENGTH} characters`)
  .max(VALIDATION_RULES.USERNAME_MAX_LENGTH, `Username must be at most ${VALIDATION_RULES.USERNAME_MAX_LENGTH} characters`)
  .regex(/^[a-zA-Z0-9_-]+$/, 'Username can only contain letters, numbers, underscores, and hyphens')
  .optional();

export const coordinateSchema = z.object({
  latitude: z
    .number()
    .min(VALIDATION_RULES.LATITUDE_MIN, 'Invalid latitude')
    .max(VALIDATION_RULES.LATITUDE_MAX, 'Invalid latitude'),
  longitude: z
    .number()
    .min(VALIDATION_RULES.LONGITUDE_MIN, 'Invalid longitude')
    .max(VALIDATION_RULES.LONGITUDE_MAX, 'Invalid longitude'),
});

// Auth schemas
export const loginSchema = z.object({
  email: emailSchema,
});

export const verifyMagicLinkSchema = z.object({
  token: z.string().min(1, 'Token is required'),
});

// User schemas
export const updateProfileSchema = z.object({
  username: usernameSchema,
  displayName: z.string().max(100, 'Display name must be at most 100 characters').optional(),
  bio: z.string().max(VALIDATION_RULES.BIO_MAX_LENGTH, `Bio must be at most ${VALIDATION_RULES.BIO_MAX_LENGTH} characters`).optional(),
});

// Spot schemas
export const createSpotSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .max(VALIDATION_RULES.TITLE_MAX_LENGTH, `Title must be at most ${VALIDATION_RULES.TITLE_MAX_LENGTH} characters`),
  description: z
    .string()
    .max(VALIDATION_RULES.DESCRIPTION_MAX_LENGTH, `Description must be at most ${VALIDATION_RULES.DESCRIPTION_MAX_LENGTH} characters`)
    .optional(),
  categoryId: z.string().uuid('Invalid category ID'),
  latitude: z.number().min(VALIDATION_RULES.LATITUDE_MIN).max(VALIDATION_RULES.LATITUDE_MAX),
  longitude: z.number().min(VALIDATION_RULES.LONGITUDE_MIN).max(VALIDATION_RULES.LONGITUDE_MAX),
  address: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
});

export const updateSpotSchema = createSpotSchema.partial().extend({
  id: z.string().uuid('Invalid spot ID'),
});

export const getSpotsByLocationSchema = z.object({
  latitude: z.number().min(VALIDATION_RULES.LATITUDE_MIN).max(VALIDATION_RULES.LATITUDE_MAX),
  longitude: z.number().min(VALIDATION_RULES.LONGITUDE_MIN).max(VALIDATION_RULES.LONGITUDE_MAX),
  radius: z.number().min(0.1).max(100).default(10), // radius in kilometers
  categoryId: z.string().uuid().optional(),
  limit: z.number().min(1).max(100).default(20),
  offset: z.number().min(0).default(0),
});

// Category schemas
export const createCategorySchema = z.object({
  name: z.string().min(1, 'Name is required').max(50, 'Name must be at most 50 characters'),
  description: z.string().max(200, 'Description must be at most 200 characters').optional(),
  icon: z.string().optional(),
  color: z.string().regex(/^#[0-9A-F]{6}$/i, 'Invalid color format').optional(),
});

// Tag schemas
export const createTagSchema = z.object({
  name: z.string().min(1, 'Name is required').max(30, 'Name must be at most 30 characters'),
  description: z.string().max(200, 'Description must be at most 200 characters').optional(),
  category: z.enum(['surface', 'difficulty', 'features', 'conditions', 'accessibility', 'other']),
  color: z.string().regex(/^#[0-9A-F]{6}$/i, 'Invalid color format').optional(),
});

export const addSpotTagSchema = z.object({
  spotId: z.string().uuid('Invalid spot ID'),
  tagId: z.string().uuid('Invalid tag ID'),
});

// Rating schemas
export const rateSpotSchema = z.object({
  spotId: z.string().uuid('Invalid spot ID'),
  isPositive: z.boolean(),
  comment: z.string().max(500, 'Comment must be at most 500 characters').optional(),
});

// Collection schemas
export const createCollectionSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name must be at most 100 characters'),
  description: z.string().max(500, 'Description must be at most 500 characters').optional(),
  isPublic: z.boolean().default(false),
});

export const addToCollectionSchema = z.object({
  collectionId: z.string().uuid('Invalid collection ID'),
  spotId: z.string().uuid('Invalid spot ID'),
});

// File upload schemas
export const uploadSchema = z.object({
  fileName: z.string().min(1, 'File name is required'),
  fileType: z.string().min(1, 'File type is required'),
  fileSize: z.number().min(1, 'File size must be greater than 0'),
});

// Report schemas
export const createReportSchema = z.object({
  spotId: z.string().uuid('Invalid spot ID').optional(),
  reason: z.enum(['INAPPROPRIATE_CONTENT', 'SPAM', 'INCORRECT_LOCATION', 'SAFETY_CONCERN', 'DUPLICATE', 'OTHER']),
  comment: z.string().max(500, 'Comment must be at most 500 characters').optional(),
});

// Utility functions
export const validateCoordinates = (lat: number, lng: number): boolean => {
  return (
    lat >= VALIDATION_RULES.LATITUDE_MIN &&
    lat <= VALIDATION_RULES.LATITUDE_MAX &&
    lng >= VALIDATION_RULES.LONGITUDE_MIN &&
    lng <= VALIDATION_RULES.LONGITUDE_MAX
  );
};

export const sanitizeString = (str: string): string => {
  return str.trim().replace(/\s+/g, ' ');
};

export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};
