import { create } from 'zustand';
import { User, AuthResponse, UserProfile, ProfileUpdateRequest } from '@/types/auth';
import { TOKEN_KEY, USER_KEY } from '@/lib/constants';
import { api } from '@/lib/api-client';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<boolean>;
  updateProfile: (updatedUser: ProfileUpdateRequest) => Promise<void>;
  getUserProfile: () => Promise<UserProfile>;
  sendMagicLink: (email: string) => Promise<void>;
  verifyEmail: (token: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem(USER_KEY) || 'null'),
  isAuthenticated: !!localStorage.getItem(TOKEN_KEY),
  isLoading: false,
  error: null,
  
  login: async (email: string, password: string) => {
    try {
      set({ isLoading: true, error: null });
      
      const response = await api.post<AuthResponse>('/auth/login', { email, password });
      
      // Save token to localStorage
      localStorage.setItem(TOKEN_KEY, response.accessToken);
      
      // Update store with user data
      set({ 
        user: response.user, 
        isAuthenticated: true,
        isLoading: false 
      });
      
      // Save user to localStorage
      localStorage.setItem(USER_KEY, JSON.stringify(response.user));
      
      return;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Login failed';
      set({ isLoading: false, error: errorMessage, isAuthenticated: false });
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
      throw error;
    }
  },

  register: async (email: string, password: string) => {
    try {
      set({ isLoading: true, error: null });
      
      const response = await api.post<AuthResponse>('/auth/register', { email, password });
      
      // Save token to localStorage
      localStorage.setItem(TOKEN_KEY, response.accessToken);
      
      // Update store with user data
      set({ 
        user: response.user, 
        isAuthenticated: true,
        isLoading: false 
      });
      
      // Save user to localStorage
      localStorage.setItem(USER_KEY, JSON.stringify(response.user));
      
      return;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Registration failed';
      set({ isLoading: false, error: errorMessage, isAuthenticated: false });
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
      throw error;
    }
  },
  
  logout: () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    set({ user: null, isAuthenticated: false });
  },
  
  checkAuth: async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    
    if (!token) {
      set({ isAuthenticated: false, user: null });
      return false;
    }
    
    try {
      set({ isLoading: true });
      const response = await api.get<User>('/auth/validate');
      
      set({ 
        user: response, 
        isAuthenticated: true,
        isLoading: false 
      });
      
      // Update stored user
      localStorage.setItem(USER_KEY, JSON.stringify(response));
      
      return true;
    } catch (error) {
      set({ isAuthenticated: false, user: null, isLoading: false });
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
      return false;
    }
  },
  
  updateProfile: async (updatedUser: ProfileUpdateRequest) => {
    try {
      set({ isLoading: true, error: null });
      
      const response = await api.put<User>('/auth/profile', updatedUser);
      
      // Update store with updated user data
      set({ 
        user: response, 
        isLoading: false 
      });
      
      // Update stored user
      localStorage.setItem(USER_KEY, JSON.stringify(response));
      
      return;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Profile update failed';
      set({ isLoading: false, error: errorMessage });
      throw error;
    }
  },

  sendMagicLink: async (email: string) => {
    try {
      set({ isLoading: true, error: null });
      
      await api.post('/auth/send-magic-link', { email });
      
      set({ isLoading: false });
      
      return;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to send magic link';
      set({ isLoading: false, error: errorMessage });
      throw error;
    }
  },

  verifyEmail: async (token: string) => {
    try {
      set({ isLoading: true, error: null });
      
      const response = await api.post<AuthResponse>('/auth/verify-magic-link', { token });
      
      // Save token to localStorage
      localStorage.setItem(TOKEN_KEY, response.accessToken);
      
      // Update store with user data
      set({ 
        user: response.user, 
        isAuthenticated: true,
        isLoading: false 
      });
      
      // Save user to localStorage
      localStorage.setItem(USER_KEY, JSON.stringify(response.user));
      
      return;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Email verification failed';
      set({ isLoading: false, error: errorMessage, isAuthenticated: false });
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
      throw error;
    }
  },
  
  getUserProfile: async () => {
    try {
      set({ isLoading: true });
      const response = await api.get<UserProfile>('/auth/profile');
      
      // Update user data with latest from server
      set({ 
        user: response.user, 
        isLoading: false 
      });
      
      // Update stored user
      localStorage.setItem(USER_KEY, JSON.stringify(response.user));
      
      return response;
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },
}));
