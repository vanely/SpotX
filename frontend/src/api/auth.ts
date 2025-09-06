import { api } from '@/lib/api-client';
import { 
  AuthResponse, 
  MagicLinkRequest, 
  VerifyMagicLinkRequest, 
  User, 
  ProfileUpdateRequest,
  UserProfile
} from '@/types/auth';

export const sendMagicLink = async (data: MagicLinkRequest): Promise<{ success: boolean; message: string }> => {
  return api.post('/auth/send-magic-link', data);
};

export const verifyMagicLink = async (data: VerifyMagicLinkRequest): Promise<AuthResponse> => {
  return api.post('/auth/verify-magic-link', data);
};

export const validateToken = async (): Promise<User> => {
  return api.get('/auth/validate');
};

export const getUserProfile = async (): Promise<UserProfile> => {
  return api.get('/auth/profile');
};

export const updateUserProfile = async (data: ProfileUpdateRequest): Promise<User> => {
  return api.put('/auth/profile', data);
};
