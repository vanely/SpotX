import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_URL, TOKEN_KEY } from './constants';

// Create a base axios instance
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const { response } = error;
    
    // Handle token expiration
    if (response?.status === 401) {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem('spotx_user');
      
      // Only redirect to login if we're not already on login page
      if (!window.location.pathname.includes('login')) {
        window.location.href = '/login';
      }
    }
    
    return Promise.reject(error);
  }
);

// Generic request function
const request = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response: AxiosResponse<{ success: boolean; data: T; message?: string; errors?: string[] }> = await apiClient(config);
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorData = error.response.data;
      if (errorData.message) {
        throw new Error(errorData.message);
      } else if (errorData.errors && errorData.errors.length) {
        throw new Error(errorData.errors.join(', '));
      }
    }
    throw error;
  }
};

// API helper methods
export const api = {
  get: <T>(url: string, config?: AxiosRequestConfig) => 
    request<T>({ ...config, method: 'GET', url }),
  
  post: <T>(url: string, data?: any, config?: AxiosRequestConfig) => 
    request<T>({ ...config, method: 'POST', url, data }),
  
  put: <T>(url: string, data?: any, config?: AxiosRequestConfig) => 
    request<T>({ ...config, method: 'PUT', url, data }),
  
  delete: <T>(url: string, config?: AxiosRequestConfig) => 
    request<T>({ ...config, method: 'DELETE', url }),
};

export default apiClient;
