import React from 'react';

import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { authApi } from '@/api';
import { ProfileForm } from '@/components/profile';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAuthStore } from '@/store/auth';
import { ProfileUpdateRequest } from '@/types/auth';
import Loading from '@/components/common/Loading';
import { ArrowLeft } from 'lucide-react';

const EditProfilePage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, isAuthenticated, updateProfile } = useAuthStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { 
        replace: true,
        state: { from: '/profile/edit' }
      });
    }
  }, [isAuthenticated, navigate]);
  
  // Update profile mutation
  const updateProfileMutation = useMutation({
    mutationFn: (data: ProfileUpdateRequest) => authApi.updateUserProfile(data),
    onSuccess: (updatedUser) => {
      // Update local user state
      updateProfile(updatedUser);
      
      toast({
        title: 'Profile updated',
        description: 'Your profile has been successfully updated.',
      });
      
      navigate('/profile');
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to update profile',
        variant: 'destructive',
      });
      setIsSubmitting(false);
    },
  });
  
  // Handle form submission
  const handleSubmit = async (data: ProfileUpdateRequest) => {
    setIsSubmitting(true);
    await updateProfileMutation.mutateAsync(data);
  };
  
  if (!isAuthenticated || !user) {
    return null;
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link to="/profile" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Profile
        </Link>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>
        
        <ProfileForm
          user={user}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
};

export default EditProfilePage;
