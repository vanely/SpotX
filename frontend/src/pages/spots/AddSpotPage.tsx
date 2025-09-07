import React from 'react';

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { spotsApi } from '@/api';
import { SpotForm } from '@/components/spots';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAuthStore } from '@/store/auth';
import { CreateSpotRequest } from '@/types/spots';
import { ArrowLeft } from 'lucide-react';

const AddSpotPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isAuthenticated } = useAuthStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Redirect if not authenticated
  if (!isAuthenticated) {
    navigate('/login', { replace: true });
    return null;
  }
  
  // Create spot mutation
  const createSpotMutation = useMutation({
    mutationFn: (data: CreateSpotRequest) => spotsApi.createSpot(data),
    onSuccess: (newSpot) => {
      toast({
        title: 'Spot created',
        description: 'Your spot has been successfully created.',
      });
      navigate(`/spots/${newSpot.id}`);
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to create spot',
        variant: 'destructive',
      });
      setIsSubmitting(false);
    },
  });
  
  // Handle form submission
  const handleSubmit = async (data: CreateSpotRequest) => {
    setIsSubmitting(true);
    await createSpotMutation.mutateAsync(data);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link to="/map" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Map
        </Link>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Add a New Spot</h1>
        
        <SpotForm
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
};

export default AddSpotPage;
