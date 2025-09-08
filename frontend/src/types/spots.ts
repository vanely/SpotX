import { User } from './auth';

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  color: string;
  isOfficial: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  count: number;
}

export interface SpotImage {
  id: string;
  spotId: string;
  url: string;
  key: string;
  width: number | null;
  height: number | null;
  isCover: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface SpotRating {
  id: string;
  spotId: string;
  userId: string;
  isPositive: boolean;
  comment: string | null;
  createdAt: string;
  updatedAt: string;
  user: Pick<User, 'id' | 'username' | 'displayName' | 'avatar'>;
}

export interface SpotTag {
  id: string;
  spotId: string;
  tagId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  tag: Tag;
  user: Pick<User, 'id' | 'username' | 'displayName' | 'avatar'>;
}

export interface Spot {
  id: string;
  title: string;
  description: string | null;
  latitude: number;
  longitude: number;
  address: string | null;
  city: string | null;
  country: string | null;
  userId: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
  user: Pick<User, 'id' | 'username' | 'displayName' | 'avatar'>;
  category: Category;
  images: SpotImage[];
  tags: SpotTag[];
  ratings: SpotRating[];
  _count: {
    ratings: number;
    tags: number;
    images: number;
  };
  distance?: number; // in kilometers, when querying by location
}

export interface SpotLocation {
  id: string;
  title: string;
  latitude: number;
  longitude: number;
  categoryId: string;
  distance?: number;
}

export interface SpotSearchParams {
  latitude?: number;
  longitude?: number;
  radius?: number;
  categoryId?: string;
  userId?: string;
  tags?: string[];
  search?: string;
  limit?: number;
  offset?: number;
  sortBy?: 'distance' | 'newest' | 'oldest' | 'popular';
}

export interface CreateSpotRequest {
  title: string;
  description?: string | null;
  categoryId: string;
  latitude: number;
  longitude: number;
  address?: string | null;
  city?: string | null;
  country?: string | null;
  images?: string[];
}

export interface UpdateSpotRequest extends Partial<Omit<CreateSpotRequest, 'images'>> {
  id: string;
}

export interface RateSpotRequest {
  spotId: string;
  isPositive: boolean;
  comment?: string | null;
}

export interface AddSpotTagRequest {
  spotId: string;
  tagId: string;
}

export interface SpotStats {
  totalSpots: number;
  spotsByCategory: {
    categoryId: string;
    categoryName: string;
    count: number;
  }[];
  recentSpots: number;
  topContributors: {
    userId: string;
    username: string;
    spotCount: number;
  }[];
}
