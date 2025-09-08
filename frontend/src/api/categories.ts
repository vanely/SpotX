import { api } from '@/lib/api-client';
import { Category, CreateCategoryData, UpdateCategoryData } from '@/types/categories';
import { Tag } from '@/types/spots';

export const getCategories = async (): Promise<Category[]> => {
  return api.get('/categories');
};

export const getCategory = async (id: string): Promise<Category> => {
  return api.get(`/categories/${id}`);
};

export const createCategory = async (data: CreateCategoryData): Promise<Category> => {
  return api.post('/categories', data);
};

export const updateCategory = async (id: string, data: UpdateCategoryData): Promise<Category> => {
  return api.put(`/categories/${id}`, data);
};

export const deleteCategory = async (id: string): Promise<void> => {
  return api.delete(`/categories/${id}`);
};

export const getOfficialCategories = async (): Promise<Category[]> => {
  return api.get('/categories/official');
};

export const proposeNewCategory = async (data: { name: string; icon?: string; color?: string }): Promise<Category> => {
  return api.post('/categories/propose', data);
};

export const getAllTags = async (): Promise<Tag[]> => {
  return api.get('/categories/tags/all');
};

export const getPopularTags = async (limit: number = 20): Promise<Tag[]> => {
  return api.get('/categories/tags/popular', { params: { limit } });
};

export const createNewTag = async (name: string): Promise<Tag> => {
  return api.post('/categories/tags', { name });
};

export const searchTags = async (query: string, limit: number = 10): Promise<Tag[]> => {
  return api.get('/categories/tags/search', { params: { query, limit } });
};
