import React from 'react';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { authApi } from '@/api';
import { UserProfile } from '@/components/profile';
import { useAuthStore } from '@/store/auth';
import Loading from '@/components/common/Loading';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, getUserProfile } = useAuthStore();
  
  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { 
        replace: true,
        state: { from: '/profile' }
      });
    }
  }, [isAuthenticated, navigate]);
  
  // Fetch user profile
  const { data: userProfile, isLoading } = useQuery({
    queryKey: ['user-profile'],
    queryFn: getUserProfile,
    enabled: isAuthenticated,
  });
  
  if (!isAuthenticated) {
    return null;
  }
  
  if (isLoading || !userProfile) {
    return <Loading text="Loading profile..." />;
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <UserProfile 
        user={userProfile.user} 
        isCurrentUser={true} 
      />
    </div>
  );
};

export default ProfilePage;
