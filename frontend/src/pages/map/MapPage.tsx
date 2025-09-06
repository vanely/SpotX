import React from 'react';

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { MapView, SpotDetailCard } from '@/components/map';
import { Button } from '@/components/ui/button';
import { useMapStore } from '@/store/map';
import { useGeolocation } from '@/hooks';
import { spotsApi } from '@/api';
import { Plus, ChevronUp, ChevronDown, Map, List } from 'lucide-react';
import { useUIStore } from '@/store/ui';
import { Spot } from '@/types/spots';
import { SpotCard } from '@/components/spots';
import { cn } from '@/lib/utils';

const MapPage = () => {
  const navigate = useNavigate();
  const { selectedSpotId, setSelectedSpotId, center, userLocation, searchRadius, selectedCategories } = useMapStore();
  const { isBottomSheetExpanded, setBottomSheetExpanded, isSidePanelExpanded, setSidePanelExpanded } = useUIStore();
  const { getCurrentPosition } = useGeolocation();
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  
  // Fetch nearby spots
  const { data: spots, isLoading, refetch } = useQuery({
    queryKey: ['nearby-spots', center, searchRadius, selectedCategories],
    queryFn: async () => {
      const latitude = userLocation?.latitude || center[1];
      const longitude = userLocation?.longitude || center[0];
      const categoryId = selectedCategories.length === 1 ? selectedCategories[0] : undefined;
      
      return spotsApi.searchSpots({
        latitude,
        longitude,
        radius: searchRadius,
        categoryId,
        limit: 20,
        sortBy: 'distance',
      });
    },
    enabled: !!(center || userLocation),
  });

  // Get user location on mount
  useEffect(() => {
    getCurrentPosition();
  }, [getCurrentPosition]);

  // Handle marker click
  const handleMarkerClick = (spotId: string) => {
    setSelectedSpotId(spotId);
    if (window.innerWidth < 640) { // Mobile view
      setBottomSheetExpanded(true);
    }
  };

  // Handle add spot button click
  const handleAddSpot = () => {
    navigate('/spots/add');
  };

  // Handle spot card click
  const handleSpotCardClick = (spotId: string) => {
    setSelectedSpotId(spotId);
  };

  // Close the spot detail panel
  const handleCloseDetail = () => {
    setSelectedSpotId(null);
    setBottomSheetExpanded(false);
  };

  return (
    <div className="relative h-[calc(100vh-4rem)] overflow-hidden">
      {/* Map View */}
      <div className={cn(
        'h-full w-full transition-all duration-300',
        viewMode === 'list' && 'hidden md:block'
      )}>
        <MapView onMarkerClick={handleMarkerClick} />
        
        {/* Add Spot Button */}
        <div className="absolute bottom-20 right-4 z-20">
          <Button
            className="h-12 w-12 rounded-full shadow-lg"
            onClick={handleAddSpot}
          >
            <Plus className="h-6 w-6" />
          </Button>
        </div>
        
        {/* View Toggle - Mobile Only */}
        <div className="md:hidden absolute bottom-20 left-4 z-20">
          <Button
            variant="secondary"
            className="h-12 w-12 rounded-full shadow-lg"
            onClick={() => setViewMode(viewMode === 'map' ? 'list' : 'map')}
          >
            {viewMode === 'map' ? (
              <List className="h-6 w-6" />
            ) : (
              <Map className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Bottom Sheet */}
      <div className={cn(
        'bottom-sheet',
        isBottomSheetExpanded ? 'h-1/2' : 'h-auto',
        viewMode === 'map' ? 'md:hidden' : 'block md:hidden'
      )}>
        <div 
          className="bottom-sheet-handle"
          onClick={() => setBottomSheetExpanded(!isBottomSheetExpanded)}
        />
        
        {selectedSpotId ? (
          <div className="p-4">
            <SpotDetailCard
              spotId={selectedSpotId}
              onClose={handleCloseDetail}
            />
          </div>
        ) : (
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Nearby Spots</h2>
              <Button
                variant="ghost"
                size="sm"
                className="p-1"
                onClick={() => setBottomSheetExpanded(!isBottomSheetExpanded)}
              >
                {isBottomSheetExpanded ? (
                  <ChevronDown className="h-5 w-5" />
                ) : (
                  <ChevronUp className="h-5 w-5" />
                )}
              </Button>
            </div>
            
            {isLoading ? (
              <p className="text-sm text-muted-foreground">Loading spots...</p>
            ) : spots?.items.length ? (
              <div className="space-y-4 overflow-y-auto max-h-[calc(50vh-6rem)]">
                {spots.items.map((spot) => (
                  <SpotCard
                    key={spot.id}
                    spot={spot}
                    onClick={() => handleSpotCardClick(spot.id)}
                    compact
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-muted-foreground mb-4">No spots found in this area.</p>
                <Link to="/spots/add">
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add a Spot
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Desktop Side Panel */}
      <div className={cn(
        'side-panel',
        isSidePanelExpanded ? 'w-96' : 'w-0',
        'hidden md:block'
      )}>
        <div className="h-full overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Nearby Spots</h2>
            <Button
              variant="ghost"
              size="sm"
              className="p-1"
              onClick={() => setSidePanelExpanded(!isSidePanelExpanded)}
            >
              <ChevronDown className="h-5 w-5" />
            </Button>
          </div>
          
          {selectedSpotId ? (
            <div className="p-4">
              <SpotDetailCard
                spotId={selectedSpotId}
                onClose={handleCloseDetail}
              />
            </div>
          ) : (
            <div className="p-4 overflow-y-auto h-[calc(100vh-8rem)]">
              {isLoading ? (
                <p className="text-sm text-muted-foreground">Loading spots...</p>
              ) : spots?.items.length ? (
                <div className="space-y-4">
                  {spots.items.map((spot) => (
                    <SpotCard
                      key={spot.id}
                      spot={spot}
                      onClick={() => handleSpotCardClick(spot.id)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <p className="text-muted-foreground mb-4">No spots found in this area.</p>
                  <Link to="/spots/add">
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Add a Spot
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* List View for Mobile */}
      <div className={cn(
        'h-full w-full overflow-y-auto p-4',
        viewMode === 'list' ? 'block md:hidden' : 'hidden'
      )}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Nearby Spots</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setViewMode('map')}
          >
            <Map className="mr-2 h-4 w-4" />
            Show Map
          </Button>
        </div>
        
        {isLoading ? (
          <p className="text-sm text-muted-foreground">Loading spots...</p>
        ) : spots?.items.length ? (
          <div className="space-y-4">
            {spots.items.map((spot) => (
              <SpotCard
                key={spot.id}
                spot={spot}
                onClick={() => navigate(`/spots/${spot.id}`)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-muted-foreground mb-4">No spots found in this area.</p>
            <Link to="/spots/add">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add a Spot
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapPage;
