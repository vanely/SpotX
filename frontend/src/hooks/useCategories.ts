import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { categoriesApi } from '@/api';
import { Category, CreateCategoryData, UpdateCategoryData } from '@/types/categories';

export const useCategories = () => {
  const queryClient = useQueryClient();

  // Fetch all categories
  const {
    data: categories,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['categories'],
    queryFn: categoriesApi.getCategories,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });

  // Create category mutation
  const createCategoryMutation = useMutation({
    mutationFn: (data: CreateCategoryData) => categoriesApi.createCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });

  // Update category mutation
  const updateCategoryMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateCategoryData }) => 
      categoriesApi.updateCategory(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });

  // Delete category mutation
  const deleteCategoryMutation = useMutation({
    mutationFn: (id: string) => categoriesApi.deleteCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });

  // Get single category
  const getCategory = async (id: string): Promise<Category | null> => {
    try {
      return await categoriesApi.getCategory(id);
    } catch (error) {
      console.error('Error fetching category:', error);
      return null;
    }
  };

  // Create category
  const createCategory = async (data: CreateCategoryData) => {
    try {
      const result = await createCategoryMutation.mutateAsync(data);
      return { success: true, data: result };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to create category' 
      };
    }
  };

  // Update category
  const updateCategory = async (id: string, data: UpdateCategoryData) => {
    try {
      const result = await updateCategoryMutation.mutateAsync({ id, data });
      return { success: true, data: result };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to update category' 
      };
    }
  };

  // Delete category
  const deleteCategory = async (id: string) => {
    try {
      await deleteCategoryMutation.mutateAsync(id);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to delete category' 
      };
    }
  };

  // Get category by name (case insensitive)
  const getCategoryByName = (name: string): Category | undefined => {
    return categories?.find(category => 
      category.name.toLowerCase() === name.toLowerCase()
    );
  };

  // Get categories as options for select components
  const getCategoryOptions = () => {
    return categories?.map(category => ({
      value: category.id,
      label: category.name,
      description: category.description
    })) || [];
  };

  return {
    // Data
    categories: categories || [],
    isLoading,
    error: error?.message,
    
    // Actions
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
    getCategoryByName,
    getCategoryOptions,
    refetch,
    
    // Mutation states
    isCreating: createCategoryMutation.isPending,
    isUpdating: updateCategoryMutation.isPending,
    isDeleting: deleteCategoryMutation.isPending,
    
    // Mutation errors
    createError: createCategoryMutation.error?.message,
    updateError: updateCategoryMutation.error?.message,
    deleteError: deleteCategoryMutation.error?.message,
  };
};

export default useCategories;
