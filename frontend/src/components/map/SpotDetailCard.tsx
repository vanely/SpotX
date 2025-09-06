import React from 'react';

import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { spotsApi } from '@/api';
import { Spot } from '@/types/spots';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { formatDistance, getDirectionsUrl, generateImageUrl } from '@/lib/utils';
import { MapPin, Navigation, Star, ThumbsUp, ThumbsDown, Image, Users } from 'lucide-react';

interface SpotDetailCardProps {
  spotId: string;
  onClose: () => void;
}

const SpotDetailCard = ({ spotId, onClose }: SpotDetailCardProps) => {
  // Fetch spot details
  const { data: spot, isLoading, isError } = useQuery({
    queryKey: ['spot', spotId],
    queryFn: () => spotsApi.getSpotById(spotId),
    enabled: !!spotId,
  });

  // Get directions URL
  const handleGetDirections = (spot: Spot) => {
    const url = getDirectionsUrl(spot.latitude, spot.longitude, spot.title);
    window.open(url, '_blank');
  };

  if (isLoading) {
    return (
      <Card className="w-full">
        <CardContent className="p-4">
          <Skeleton className="h-4 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2 mb-4" />
          <Skeleton className="h-32 w-full rounded-md mb-3" />
          <div className="flex justify-between mb-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-4 w-full" />
        </CardContent>
        <CardFooter className="flex justify-between p-4 pt-0">
          <Skeleton className="h-10 w-28" />
          <Skeleton className="h-10 w-28" />
        </CardFooter>
      </Card>
    );
  }

  if (isError || !spot) {
    return (
      <Card className="w-full">
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">Failed to load spot details.</p>
        </CardContent>
        <CardFooter className="flex justify-end p-4 pt-0">
          <Button variant="ghost" size="sm" onClick={onClose}>
            Close
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full overflow-hidden">
      <div className="relative">
        {spot.images && spot.images.length > 0 ? (
          <img
            src={generateImageUrl(spot.images[0].url)}
            alt={spot.title}
            className="w-full h-40 object-cover"
          />
        ) : (
          <div className="w-full h-40 bg-muted flex items-center justify-center">
            <Image className="h-8 w-8 text-muted-foreground" />
          </div>
        )}
        <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium flex items-center">
          <MapPin className="h-3 w-3 mr-1 text-primary" />
          {spot.distance ? formatDistance(spot.distance) : 'Distance unavailable'}
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-1 line-clamp-1">{spot.title}</h3>
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <span
                className="h-2 w-2 rounded-full mr-2"
                style={{ backgroundColor: spot.category.color }}
              ></span>
              {spot.category.name}
            </div>
          </div>
          <Link to={`/spots/${spot.id}`}>
            <Button variant="ghost" size="sm">
              View
            </Button>
          </Link>
        </div>
        
        {spot.description && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {spot.description}
          </p>
        )}
        
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <ThumbsUp className="h-4 w-4 mr-1 text-green-500" />
            <span>{spot.ratings.filter(r => r.isPositive).length}</span>
          </div>
          <div className="flex items-center">
            <ThumbsDown className="h-4 w-4 mr-1 text-red-500" />
            <span>{spot.ratings.filter(r => !r.isPositive).length}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1 text-muted-foreground" />
            <span>{spot.tags.length} tags</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between p-4 pt-0">
        <Button
          variant="outline"
          size="sm"
          className="w-full mr-2"
          onClick={onClose}
        >
          Close
        </Button>
        <Button
          variant="default"
          size="sm"
          className="w-full"
          onClick={() => handleGetDirections(spot)}
        >
          <Navigation className="h-4 w-4 mr-2" />
          Directions
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SpotDetailCard;
