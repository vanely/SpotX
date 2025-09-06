import { create } from 'zustand';
import { User, AuthResponse, UserProfile } from '@/types/auth';
import { TOKEN_KEY, USER_KEY } from '@/lib/constants';
import { api } from '@/lib/api-client';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  login: (token: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<boolean>;
  updateProfile: (updatedUser: Partial<User>) => void;
  getUserProfile: () => Promise<UserProfile>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: JSON.parse(localStorage.getItem(USER_KEY) || 'null'),
  isAuthenticated: !!localStorage.getItem(TOKEN_KEY),
  isLoading: false,
  error: null,
  
  login: async (token: string) => {
    try {
      set({ isLoading: true, error: null });
      
      // Save token to localStorage
      localStorage.setItem(TOKEN_KEY, token);
      
      // Validate token and get user data
      const response = await api.get<User>('/auth/validate');
      
      // Update store with user data
      set({ 
        user: response, 
        isAuthenticated: true,
        isLoading: false 
      });
      
      // Save user to localStorage
      localStorage.setItem(USER_KEY, JSON.stringify(response));
      
      return;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Login failed';
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
  
  updateProfile: (updatedUser: Partial<User>) => {
    const currentUser = get().user;
    if (!currentUser) return;
    
    const newUser = { ...currentUser, ...updatedUser };
    set({ user: newUser });
    localStorage.setItem(USER_KEY, JSON.stringify(newUser));
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
