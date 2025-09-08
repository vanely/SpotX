import { useAuthStore } from '@/store/auth';
import { useCallback } from 'react';

export const useAuth = () => {
  const {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
    checkAuth,
    sendMagicLink,
    verifyEmail
  } = useAuthStore();

  const handleLogin = useCallback(async (email: string, password: string) => {
    try {
      await login(email, password);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Login failed' 
      };
    }
  }, [login]);

  const handleRegister = useCallback(async (email: string, password: string) => {
    try {
      await register(email, password);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Registration failed' 
      };
    }
  }, [register]);

  const handleLogout = useCallback(async () => {
    try {
      await logout();
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Logout failed' 
      };
    }
  }, [logout]);

  const handleSendMagicLink = useCallback(async (email: string) => {
    try {
      await sendMagicLink(email);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to send magic link' 
      };
    }
  }, [sendMagicLink]);

  const handleVerifyEmail = useCallback(async (token: string) => {
    try {
      await verifyEmail(token);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Email verification failed' 
      };
    }
  }, [verifyEmail]);

  return {
    // State
    user,
    isAuthenticated,
    isLoading,
    
    // Actions
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
    checkAuth,
    sendMagicLink: handleSendMagicLink,
    verifyEmail: handleVerifyEmail,
    
    // Computed
    isLoggedIn: isAuthenticated && !!user,
    userEmail: user?.email,
    userId: user?.id
  };
};

export default useAuth;
