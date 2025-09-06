import { api } from '@/lib/api-client';
import { 
  Spot, 
  SpotLocation, 
  SpotSearchParams, 
  CreateSpotRequest, 
  UpdateSpotRequest,
  RateSpotRequest,
  AddSpotTagRequest,
  SpotStats
} from '@/types/spots';
import { PaginatedResponse } from '@/types/common';

export const searchSpots = async (params: SpotSearchParams): Promise<PaginatedResponse<Spot>> => {
  return api.get('/spots/search', { params });
};

export const getNearbySpots = async (
  latitude: number, 
  longitude: number, 
  radius: number = 5,
  categoryId?: string
): Promise<SpotLocation[]> => {
  return api.get('/spots/nearby', { 
    params: { 
      latitude, 
      longitude, 
      radius,
      categoryId
    } 
  });
};

export const getSpotById = async (spotId: string): Promise<Spot> => {
  return api.get(`/spots/${spotId}`);
};

export const createSpot = async (data: CreateSpotRequest): Promise<Spot> => {
  return api.post('/spots', data);
};

export const updateSpot = async (data: UpdateSpotRequest): Promise<Spot> => {
  return api.put(`/spots/${data.id}`, data);
};

export const deleteSpot = async (spotId: string): Promise<{ success: boolean }> => {
  return api.delete(`/spots/${spotId}`);
};

export const rateSpot = async (data: RateSpotRequest): Promise<{ success: boolean }> => {
  return api.post('/spots/rate', data);
};

export const addTagToSpot = async (data: AddSpotTagRequest): Promise<{ success: boolean }> => {
  return api.post('/spots/tag', data);
};

export const removeTagFromSpot = async (spotTagId: string): Promise<{ success: boolean }> => {
  return api.delete(`/spots/tag/${spotTagId}`);
};

export const getSpotStats = async (): Promise<SpotStats> => {
  return api.get('/spots/stats');
};
