export interface User {
  id: string;
  email: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  bio?: string;
  location?: string;
  website?: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserData {
  email: string;
  password: string;
  username?: string;
  firstName?: string;
  lastName?: string;
}

export interface UpdateUserData {
  username?: string;
  firstName?: string;
  lastName?: string;
  bio?: string;
  location?: string;
  website?: string;
  avatar?: string;
}

export interface UserProfile extends User {
  spotsCount: number;
  collectionsCount: number;
  followersCount: number;
  followingCount: number;
}

export interface UserFilters {
  search?: string;
  location?: string;
  limit?: number;
  offset?: number;
}
