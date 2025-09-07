// Prisma client and types access helper
export { PrismaClient } from '@prisma/client';
export { db } from '../config/database.config';

// Re-export all Prisma types for convenience
export type {
  User,
  MagicLink,
  Category,
  Spot,
  SpotImage,
  SpotRating,
  Tag,
  SpotTag,
  Collection,
  CollectionSpot,
  Event,
  EventAttendee,
  Report,
  EventStatus,
  EventAttendeeStatus,
  ReportType,
  ReportStatus,
} from '@prisma/client';
