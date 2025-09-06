export interface User {
  id: string;
  email: string;
  username: string;
  displayName: string | null;
  avatar: string | null;
  bio: string | null;
  reputation: number;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserStats {
  spotsCount: number;
  ratingsCount: number;
  collectionsCount: number;
  reputation: number;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  isNewUser: boolean;
}

export interface MagicLinkRequest {
  email: string;
}

export interface VerifyMagicLinkRequest {
  token: string;
}

export interface ProfileUpdateRequest {
  username?: string;
  displayName?: string;
  bio?: string;
  avatar?: string;
}

export interface UserProfile {
  user: User;
  stats: UserStats;
}
