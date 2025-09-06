import { api } from '@/lib/api-client';
import { User } from '@/types/auth';
import { 
  Collection, 
  CollectionWithSpots, 
  CreateCollectionRequest, 
  UpdateCollectionRequest,
  AddSpotToCollectionRequest,
  RemoveSpotFromCollectionRequest
} from '@/types/collections';
import { PaginatedResponse, SearchParams } from '@/types/common';

// User endpoints
export const searchUsers = async (params: SearchParams): Promise<PaginatedResponse<User>> => {
  return api.get('/users/search', { params });
};

export const getUserById = async (userId: string): Promise<User> => {
  return api.get(`/users/${userId}`);
};

// Collections endpoints
export const getUserCollections = async (): Promise<Collection[]> => {
  return api.get('/users/me/collections');
};

export const getCollectionById = async (collectionId: string): Promise<CollectionWithSpots> => {
  return api.get(`/users/collections/${collectionId}`);
};

export const createCollection = async (data: CreateCollectionRequest): Promise<Collection> => {
  return api.post('/users/collections', data);
};

export const updateCollection = async (data: UpdateCollectionRequest): Promise<Collection> => {
  return api.put(`/users/collections/${data.id}`, data);
};

export const deleteCollection = async (collectionId: string): Promise<{ success: boolean }> => {
  return api.delete(`/users/collections/${collectionId}`);
};

export const addSpotToCollection = async (data: AddSpotToCollectionRequest): Promise<{ success: boolean }> => {
  return api.post('/users/collections/add-spot', data);
};

export const removeSpotFromCollection = async (data: RemoveSpotFromCollectionRequest): Promise<{ success: boolean }> => {
  return api.post('/users/collections/remove-spot', data);
};

export const getUserPublicCollections = async (userId: string): Promise<Collection[]> => {
  return api.get(`/users/${userId}/collections`);
};
