import React from 'react';

import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { spotsApi } from '@/api';
import { SpotGallery, SpotTags } from '@/components/spots';
import { MapView } from '@/components/map';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { useAuthStore } from '@/store/auth';
import { useMapStore } from '@/store/map';
import Loading from '@/components/common/Loading';
import {
  ThumbsUp,
  ThumbsDown,
  Share,
  MapPin,
  Calendar,
  Edit,
  Trash2,
  User,
  Navigation,
  ArrowLeft,
  AlertTriangle
} from 'lucide-react';
import { formatDate, getDirectionsUrl } from '@/lib/utils';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

const SpotDetailPage = () => {
  const { spotId } = useParams<{ spotId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { user, isAuthenticated } = useAuthStore();
  const { setNewSpotCoordinates } = useMapStore();
  
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  
  // Fetch spot details
  const { data: spot, isLoading, isError } = useQuery({
    queryKey: ['spot', spotId],
    queryFn: () => spotsApi.getSpotById(spotId as string),
    enabled: !!spotId,
  });
  
  // Rate spot mutation
  const rateMutation = useMutation({
    mutationFn: ({ isPositive, comment }: { isPositive: boolean; comment?: string }) => 
      spotsApi.rateSpot({
        spotId: spotId as string,
        isPositive,
        comment,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['spot', spotId] });
      toast({
        title: 'Thank you for your rating!',
        description: 'Your feedback helps the community.',
      });
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to rate spot',
        variant: 'destructive',
      });
    },
  });
  
  // Delete spot mutation
  const deleteMutation = useMutation({
    mutationFn: () => spotsApi.deleteSpot(spotId as string),
    onSuccess: () => {
      toast({
        title: 'Spot deleted',
        description: 'The spot has been successfully deleted.',
      });
      navigate('/map');
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to delete spot',
        variant: 'destructive',
      });
    },
  });
  
  // Handle rating
  const handleRate = (isPositive: boolean) => {
    if (!isAuthenticated) {
      toast({
        title: 'Sign in required',
        description: 'Please sign in to rate spots.',
        variant: 'destructive',
      });
      return;
    }
    
    rateMutation.mutate({ isPositive });
  };
  
  // Handle sharing
  const handleShare = async () => {
    if (!spot) return;
    
    const shareUrl = `${window.location.origin}/spots/${spot.id}`;
    const shareTitle = `Check out this ${spot.category.name} spot: ${spot.title}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          url: shareUrl,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback to copying to clipboard
      try {
        await navigator.clipboard.writeText(shareUrl);
        toast({
          title: 'Link copied',
          description: 'Spot link copied to clipboard.',
        });
      } catch (error) {
        console.error('Error copying to clipboard:', error);
      }
    }
  };
  
  // Handle get directions
  const handleGetDirections = () => {
    if (!spot) return;
    
    const url = getDirectionsUrl(spot.latitude, spot.longitude, spot.title);
    window.open(url, '_blank');
  };
  
  // Handle edit spot
  const handleEditSpot = () => {
    if (!spot) return;
    
    // Set coordinates for the edit form
    setNewSpotCoordinates({
      latitude: spot.latitude,
      longitude: spot.longitude,
    });
    
    navigate(`/spots/${spot.id}/edit`);
  };
  
  // Handle delete spot
  const handleDeleteSpot = () => {
    setIsDeleteDialogOpen(true);
  };
  
  const confirmDelete = () => {
    deleteMutation.mutate();
    setIsDeleteDialogOpen(false);
  };
  
  // Check if user has already rated the spot
  const userRating = spot?.ratings.find(
    (rating) => isAuthenticated && rating.userId === user?.id
  );
  
  // Count positive and negative ratings
  const positiveRatings = spot?.ratings.filter((rating) => rating.isPositive).length || 0;
  const negativeRatings = spot?.ratings.filter((rating) => !rating.isPositive).length || 0;
  
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
            The spot you're looking for doesn't exist or has been removed.
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
  
  const isOwner = isAuthenticated && user?.id === spot.userId;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link to="/map" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Map
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Spot Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center mb-2">
                <span
                  className="h-3 w-3 rounded-full mr-2"
                  style={{ backgroundColor: spot.category.color }}
                ></span>
                <span className="text-sm font-medium text-muted-foreground">
                  {spot.category.name}
                </span>
              </div>
              <h1 className="text-3xl font-bold">{spot.title}</h1>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-9"
                onClick={handleShare}
              >
                <Share className="mr-2 h-4 w-4" />
                Share
              </Button>
              
              <Button
                variant="default"
                size="sm"
                className="h-9"
                onClick={handleGetDirections}
              >
                <Navigation className="mr-2 h-4 w-4" />
                Directions
              </Button>
            </div>
          </div>
          
          {/* Gallery */}
          <SpotGallery images={spot.images} />
          
          {/* Description */}
          {spot.description && (
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Description</h2>
              <p className="text-muted-foreground whitespace-pre-line">
                {spot.description}
              </p>
            </div>
          )}
          
          {/* Tags */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Tags</h2>
            <SpotTags 
              spotId={spot.id} 
              tags={spot.tags} 
              readOnly={!isAuthenticated}
            />
          </div>
          
          {/* Rating */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Rating</h2>
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center space-x-6">
                    <div className="flex flex-col items-center">
                      <div className="text-2xl font-bold text-green-500">{positiveRatings}</div>
                      <div className="text-sm text-muted-foreground">Positive</div>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="text-2xl font-bold text-red-500">{negativeRatings}</div>
                      <div className="text-sm text-muted-foreground">Negative</div>
                    </div>
                  </div>
                  
                  {isAuthenticated && (
                    <div className="flex gap-2">
                      <Button
                        variant={userRating?.isPositive ? "default" : "outline"}
                        size="sm"
                        className="gap-2"
                        onClick={() => handleRate(true)}
                        disabled={!!userRating}
                      >
                        <ThumbsUp className="h-4 w-4" />
                        {userRating?.isPositive ? "Rated Positive" : "Positive"}
                      </Button>
                      
                      <Button
                        variant={userRating && !userRating.isPositive ? "default" : "outline"}
                        size="sm"
                        className="gap-2"
                        onClick={() => handleRate(false)}
                        disabled={!!userRating}
                      >
                        <ThumbsDown className="h-4 w-4" />
                        {userRating && !userRating.isPositive ? "Rated Negative" : "Negative"}
                      </Button>
                    </div>
                  )}
                  
                  {!isAuthenticated && (
                    <Link to="/login">
                      <Button variant="outline" size="sm">
                        Sign in to rate
                      </Button>
                    </Link>
                  )}
                </div>
                
                {userRating && (
                  <div className="mt-4 text-sm text-muted-foreground">
                    You've already rated this spot.
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Right Column - Map and Info */}
        <div className="space-y-6">
          {/* Map */}
          <div className="h-64 rounded-lg overflow-hidden">
            <MapView showControls={false} />
          </div>
          
          {/* Location Info */}
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">Location</h2>
              
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">
                    {spot.address || 'No address provided'}
                  </div>
                  {spot.city && (
                    <div className="text-sm text-muted-foreground">
                      {spot.city}{spot.country ? `, ${spot.country}` : ''}
                    </div>
                  )}
                  <div className="text-xs text-muted-foreground mt-1">
                    {spot.latitude.toFixed(6)}, {spot.longitude.toFixed(6)}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* User Info */}
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">Added by</h2>
              
              <div className="flex items-start space-x-2">
                <User className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">
                    {spot.user.displayName || spot.user.username}
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <Calendar className="h-3 w-3 mr-1" />
                    {formatDate(spot.createdAt)}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Admin Actions */}
          {isOwner && (
            <div className="space-y-2">
              <Button
                variant="outline"
                className="w-full"
                onClick={handleEditSpot}
              >
                <Edit className="mr-2 h-4 w-4" />
                Edit Spot
              </Button>
              
              <Button
                variant="destructive"
                className="w-full"
                onClick={handleDeleteSpot}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Spot
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the spot
              and remove all of its data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default SpotDetailPage;
