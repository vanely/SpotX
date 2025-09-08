import { useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { spotsApi } from '@/api';
import { Spot, CreateSpotRequest, UpdateSpotRequest } from '@/types/spots';

export const useSpots = (filters?: {
  categoryId?: string;
  userId?: string;
  search?: string;
  limit?: number;
  offset?: number;
}) => {
  const queryClient = useQueryClient();

  // Fetch spots with filters
  const {
    data: spots,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['spots', filters],
    queryFn: () => spotsApi.getSpots(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Create spot mutation
  const createSpotMutation = useMutation({
    mutationFn: (data: CreateSpotRequest) => spotsApi.createSpot(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['spots'] });
    },
  });

  // Update spot mutation
  const updateSpotMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Omit<UpdateSpotRequest, 'id'> }) => 
      spotsApi.updateSpot(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['spots'] });
    },
  });

  // Delete spot mutation
  const deleteSpotMutation = useMutation({
    mutationFn: (id: string) => spotsApi.deleteSpot(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['spots'] });
    },
  });

  // Get single spot
  const getSpot = useCallback(async (id: string): Promise<Spot | null> => {
    try {
      return await spotsApi.getSpot(id);
    } catch (error) {
      console.error('Error fetching spot:', error);
      return null;
    }
  }, []);

  // Create spot
  const createSpot = useCallback(async (data: CreateSpotRequest) => {
    try {
      const result = await createSpotMutation.mutateAsync(data);
      return { success: true, data: result };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to create spot' 
      };
    }
  }, [createSpotMutation]);

  // Update spot
  const updateSpot = useCallback(async (id: string, data: Omit<UpdateSpotRequest, 'id'>) => {
    try {
      const result = await updateSpotMutation.mutateAsync({ id, data });
      return { success: true, data: result };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to update spot' 
      };
    }
  }, [updateSpotMutation]);

  // Delete spot
  const deleteSpot = useCallback(async (id: string) => {
    try {
      await deleteSpotMutation.mutateAsync(id);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to delete spot' 
      };
    }
  }, [deleteSpotMutation]);

  return {
    // Data
    spots: spots || [],
    isLoading,
    error: error?.message,
    
    // Actions
    getSpot,
    createSpot,
    updateSpot,
    deleteSpot,
    refetch,
    
    // Mutation states
    isCreating: createSpotMutation.isPending,
    isUpdating: updateSpotMutation.isPending,
    isDeleting: deleteSpotMutation.isPending,
    
    // Mutation errors
    createError: createSpotMutation.error?.message,
    updateError: updateSpotMutation.error?.message,
    deleteError: deleteSpotMutation.error?.message,
  };
};

export default useSpots;
