import React from 'react';

import { Spot } from '@/types/spots';
import { Card, CardContent } from '@/components/ui/card';
import { formatDistance, generateImageUrl, truncateText } from '@/lib/utils';
import { MapPin, ThumbsUp, ThumbsDown, Image, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SpotCardProps {
  spot: Spot;
  onClick?: () => void;
  compact?: boolean;
  className?: string;
}

const SpotCard = ({ spot, onClick, compact = false, className }: SpotCardProps) => {
  const positiveRatings = spot.ratings.filter(r => r.isPositive).length;
  const negativeRatings = spot.ratings.filter(r => !r.isPositive).length;
  
  const coverImage = spot.images?.length > 0 
    ? generateImageUrl(spot.images[0].url) 
    : null;
  
  if (compact) {
    return (
      <Card 
        className={cn("overflow-hidden cursor-pointer hover:shadow-md transition-shadow", className)}
        onClick={onClick}
      >
        <div className="flex h-24">
          <div className="w-24 h-24 bg-muted relative flex-shrink-0">
            {coverImage ? (
              <img
                src={coverImage}
                alt={spot.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Image className="h-6 w-6 text-muted-foreground" />
              </div>
            )}
          </div>
          <CardContent className="p-3 flex-1">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-sm font-medium line-clamp-1">{spot.title}</h3>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <span
                    className="h-2 w-2 rounded-full mr-1"
                    style={{ backgroundColor: spot.category.color }}
                  ></span>
                  {spot.category.name}
                </div>
              </div>
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center text-xs">
                  <ThumbsUp className="h-3 w-3 mr-1 text-green-500" />
                  <span className="mr-2">{positiveRatings}</span>
                  <ThumbsDown className="h-3 w-3 mr-1 text-red-500" />
                  <span>{negativeRatings}</span>
                </div>
                {spot.distance !== undefined && (
                  <div className="text-xs flex items-center text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    {formatDistance(spot.distance)}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    );
  }
  
  return (
    <Card 
      className={cn("overflow-hidden cursor-pointer hover:shadow-md transition-shadow", className)}
      onClick={onClick}
    >
      <div className="relative w-full h-48 bg-muted">
        {coverImage ? (
          <img
            src={coverImage}
            alt={spot.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Image className="h-12 w-12 text-muted-foreground" />
          </div>
        )}
        <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium flex items-center">
          <MapPin className="h-3 w-3 mr-1 text-primary" />
          {spot.distance ? formatDistance(spot.distance) : 'Distance unavailable'}
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-medium line-clamp-1">{spot.title}</h3>
          <div className="flex items-center text-xs font-medium bg-primary/10 text-primary rounded-full px-2 py-1">
            <span
              className="h-2 w-2 rounded-full mr-1"
              style={{ backgroundColor: spot.category.color }}
            ></span>
            {spot.category.name}
          </div>
        </div>
        
        {spot.description && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {spot.description}
          </p>
        )}
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-muted-foreground">
            <User className="h-4 w-4 mr-1" />
            <span className="truncate max-w-[100px]">
              {spot.user.displayName || spot.user.username}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <ThumbsUp className="h-4 w-4 mr-1 text-green-500" />
              <span>{positiveRatings}</span>
            </div>
            <div className="flex items-center">
              <ThumbsDown className="h-4 w-4 mr-1 text-red-500" />
              <span>{negativeRatings}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpotCard;
