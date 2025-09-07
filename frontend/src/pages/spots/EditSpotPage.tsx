import React from 'react';

import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { spotsApi } from '@/api';
import { SpotForm } from '@/components/spots';
import { useToast } from '@/components/ui/use-toast';
import { useAuthStore } from '@/store/auth';
import { UpdateSpotRequest } from '@/types/spots';
import Loading from '@/components/common/Loading';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EditSpotPage = () => {
  const { spotId } = useParams<{ spotId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, isAuthenticated } = useAuthStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Fetch spot details
  const { data: spot, isLoading, isError } = useQuery({
    queryKey: ['spot', spotId],
    queryFn: () => spotsApi.getSpotById(spotId as string),
    enabled: !!spotId,
  });
  
  // Redirect if not authenticated
  useEffect(() => {
    if (!isLoading && isAuthenticated && spot) {
      // Check if user is the owner of the spot
      if (user?.id !== spot.userId) {
        toast({
          title: 'Access denied',
          description: 'You can only edit your own spots.',
          variant: 'destructive',
        });
        navigate(`/spots/${spotId}`, { replace: true });
      }
    } else if (!isLoading && !isAuthenticated) {
      navigate('/login', { replace: true });
    }
  }, [isLoading, isAuthenticated, user, spot, navigate, spotId, toast]);
  
  // Update spot mutation
  const updateSpotMutation = useMutation({
    mutationFn: (data: UpdateSpotRequest) => spotsApi.updateSpot(data),
    onSuccess: (updatedSpot) => {
      toast({
        title: 'Spot updated',
        description: 'Your spot has been successfully updated.',
      });
      navigate(`/spots/${updatedSpot.id}`);
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to update spot',
        variant: 'destructive',
      });
      setIsSubmitting(false);
    },
  });
  
  // Handle form submission
  const handleSubmit = async (data: UpdateSpotRequest) => {
    if (!spotId) return;
    
    setIsSubmitting(true);
    await updateSpotMutation.mutateAsync({
      ...data,
      id: spotId,
    });
  };
  
  if (isLoading) {
    return <Loading text="Loading spot details..." />;
  }
  
  if (isError || !spot) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center text-center py-12">
          <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
          <h1 className="text-2xl font-bold mb-2">Spot Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The spot you're trying to edit doesn't exist or has been removed.
          </p>
          <Link to="/map">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Map
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link to={`/spots/${spotId}`} className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Spot
        </Link>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Edit Spot</h1>
        
        <SpotForm
          initialData={{
            id: spot.id,
            title: spot.title,
            description: spot.description || undefined,
            categoryId: spot.categoryId,
            latitude: spot.latitude,
            longitude: spot.longitude,
            address: spot.address || undefined,
            city: spot.city || undefined,
            country: spot.country || undefined,
            images: spot.images.map(img => img.url),
          }}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
};

export default EditSpotPage;
