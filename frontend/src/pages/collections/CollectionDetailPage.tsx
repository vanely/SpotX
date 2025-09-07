import React from 'react';

import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { usersApi } from '@/api';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAuthStore } from '@/store/auth';
import { RemoveSpotFromCollectionRequest } from '@/types/collections';
import { SpotCard } from '@/components/spots';
import Loading from '@/components/common/Loading';
import {
  FolderHeart,
  ArrowLeft,
  Settings,
  AlertTriangle,
  Share,
  Lock,
  Unlock,
  Pencil,
  Calendar,
  User,
  Grid3X3,
  Trash2,
  Loader2
} from 'lucide-react';
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
import { formatDate } from '@/lib/utils';
import { cn } from '@/lib/utils';

const CollectionDetailPage = () => {
  const { collectionId } = useParams<{ collectionId: string }>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { user, isAuthenticated } = useAuthStore();
  
  const [selectedSpotId, setSelectedSpotId] = useState<string | null>(null);
  const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false);
  
  // Fetch collection details
  const { data: collection, isLoading, isError } = useQuery({
    queryKey: ['collection', collectionId],
    queryFn: () => usersApi.getCollectionById(collectionId as string),
    enabled: !!collectionId,
  });
  
  // Remove spot from collection mutation
  const removeSpotMutation = useMutation({
    mutationFn: (data: RemoveSpotFromCollectionRequest) => usersApi.removeSpotFromCollection(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['collection', collectionId] });
      setIsRemoveDialogOpen(false);
      setSelectedSpotId(null);
      toast({
        title: 'Spot removed',
        description: 'The spot has been removed from this collection.',
      });
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to remove spot',
        variant: 'destructive',
      });
    },
  });
  
  // Handle sharing collection
  const handleShare = async () => {
    if (!collection) return;
    
    const shareUrl = `${window.location.origin}/collections/${collection.id}`;
    const shareTitle = `Check out this collection: ${collection.name}`;
    
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
          description: 'Collection link copied to clipboard.',
        });
      } catch (error) {
        console.error('Error copying to clipboard:', error);
      }
    }
  };
  
  // Handle removing a spot from the collection
  const handleRemoveSpot = (spotId: string) => {
    setSelectedSpotId(spotId);
    setIsRemoveDialogOpen(true);
  };
  
  // Confirm remove spot
  const confirmRemoveSpot = () => {
    if (!collectionId || !selectedSpotId) return;
    
    removeSpotMutation.mutate({
      collectionId,
      spotId: selectedSpotId,
    });
  };
  
  if (isLoading) {
    return <Loading text="Loading collection..." />;
  }
  
  if (isError || !collection) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center text-center py-12">
          <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
          <h1 className="text-2xl font-bold mb-2">Collection Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The collection you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/collections">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Collections
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  // Check if user is the owner
  const isOwner = isAuthenticated && user?.id === collection.userId;
  
  // Check if collection is private and user is not the owner
  if (!collection.isPublic && !isOwner) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center text-center py-12">
          <Lock className="h-12 w-12 text-destructive mb-4" />
          <h1 className="text-2xl font-bold mb-2">Private Collection</h1>
          <p className="text-muted-foreground mb-6">
            This collection is private and can only be viewed by its owner.
          </p>
          <Link to="/collections">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Collections
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link to="/collections" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Collections
        </Link>
      </div>
      
      {/* Collection Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
        <div className="flex items-start gap-4">
          <div className={cn(
            "h-16 w-16 rounded-lg flex items-center justify-center",
            collection.isPublic ? "bg-primary/10" : "bg-secondary"
          )}>
            {collection.isPublic ? (
              <Unlock className="h-8 w-8 text-primary" />
            ) : (
              <Lock className="h-8 w-8" />
            )}
          </div>
          
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold">{collection.name}</h1>
              <span className={cn(
                "text-xs px-2 py-1 rounded-full",
                collection.isPublic 
                  ? "bg-primary/10 text-primary" 
                  : "bg-secondary text-secondary-foreground"
              )}>
                {collection.isPublic ? 'Public' : 'Private'}
              </span>
            </div>
            
            {collection.description && (
              <p className="text-muted-foreground mt-2">{collection.description}</p>
            )}
            
            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <User className="mr-1 h-4 w-4" />
                By {collection.user.displayName || collection.user.username}
              </div>
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                Created {formatDate(collection.createdAt)}
              </div>
              <div className="flex items-center">
                <Grid3X3 className="mr-1 h-4 w-4" />
                {collection.spots.length} {collection.spots.length === 1 ? 'spot' : 'spots'}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            className="h-9"
            onClick={handleShare}
          >
            <Share className="mr-2 h-4 w-4" />
            Share
          </Button>
          
          {isOwner && (
            <Button
              variant="default"
              className="h-9"
              onClick={() => navigate(`/collections/${collection.id}/edit`)}
            >
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </Button>
          )}
        </div>
      </div>
      
      {/* Spots */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Spots in this collection</h2>
        
        {collection.spots.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collection.spots.map((spot) => (
              <div key={spot.id} className="relative group">
                <SpotCard
                  spot={spot}
                  onClick={() => navigate(`/spots/${spot.id}`)}
                />
                
                {isOwner && (
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="destructive"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveSpot(spot.id);
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <FolderHeart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">No spots in this collection</h3>
            <p className="text-muted-foreground mb-6">
              {isOwner
                ? "You haven't added any spots to this collection yet."
                : "This collection doesn't have any spots yet."}
            </p>
            {isOwner && (
              <Link to="/map">
                <Button>
                  <Grid3X3 className="mr-2 h-4 w-4" />
                  Browse Spots
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
      
      {/* Remove Spot Confirmation Dialog */}
      <AlertDialog open={isRemoveDialogOpen} onOpenChange={setIsRemoveDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove Spot</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to remove this spot from the collection?
              The spot itself will not be deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmRemoveSpot}
              disabled={removeSpotMutation.isPending}
            >
              {removeSpotMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Removing...
                </>
              ) : (
                'Remove'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CollectionDetailPage;
