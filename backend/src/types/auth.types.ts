import { User } from '../lib/prisma';

export interface AuthenticatedUser extends Omit<User, 'createdAt' | 'updatedAt'> {
  createdAt: string;
  updatedAt: string;
}

export interface LoginRequest {
  email: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
}

export interface VerifyMagicLinkRequest {
  token: string;
}

export interface VerifyMagicLinkResponse {
  success: boolean;
  token: string;
  user: AuthenticatedUser;
  isNewUser: boolean;
}

export interface MagicLinkData {
  email: string;
  token: string;
  expiresAt: Date;
}

export interface AuthContext {
  user: AuthenticatedUser;
  isAuthenticated: boolean;
}

export interface JWTTokenPayload {
  userId: string;
  email: string;
  iat?: number;
  exp?: number;
}
