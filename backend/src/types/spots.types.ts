import { Spot, SpotImage, SpotRating, SpotTag, Category, Tag, User } from '../lib/prisma';

export interface SpotWithDetails extends Omit<Spot, 'createdAt' | 'updatedAt'> {
  createdAt: string;
  updatedAt: string;
  user: Pick<User, 'id' | 'username' | 'displayName' | 'avatar'>;
  category: Pick<Category, 'id' | 'name' | 'slug' | 'icon' | 'color'>;
  images: SpotImage[];
  tags: Array<SpotTag & { tag: Tag }>;
  ratings: SpotRating[];
  _count: {
    ratings: number;
    tags: number;
    images: number;
  };
  distance?: number; // in kilometers, when querying by location
}

export interface CreateSpotRequest {
  title: string;
  description?: string;
  categoryId: string;
  latitude: number;
  longitude: number;
  address?: string;
  city?: string;
  country?: string;
}

export interface UpdateSpotRequest extends Partial<CreateSpotRequest> {
  id: string;
}

export interface SpotSearchParams {
  latitude?: number;
  longitude?: number;
  radius?: number; // in kilometers
  categoryId?: string;
  tags?: string[];
  search?: string;
  limit?: number;
  offset?: number;
  sortBy?: 'distance' | 'newest' | 'oldest' | 'popular';
}

export interface SpotLocation {
  id: string;
  title: string;
  latitude: number;
  longitude: number;
  categoryId: string;
  distance?: number;
}

export interface RateSpotRequest {
  spotId: string;
  isPositive: boolean;
  comment?: string;
}

export interface AddSpotTagRequest {
  spotId: string;
  tagId: string;
}

export interface SpotStats {
  totalSpots: number;
  spotsByCategory: Array<{
    categoryId: string;
    categoryName: string;
    count: number;
  }>;
  recentSpots: number; // spots added in last 7 days
  topContributors: Array<{
    userId: string;
    username: string;
    spotCount: number;
  }>;
}
