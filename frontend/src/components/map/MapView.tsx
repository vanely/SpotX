import React from 'react';

import { useEffect, useRef, useState } from 'react';
import maplibregl, { Map as MapLibreMap } from 'maplibre-gl';
import { useMapStore } from '@/store/map';
import { useGeolocation } from '@/hooks';
import { spotsApi } from '@/api';
import { SpotLocation } from '@/types/spots';
import { MAP_STYLE_URL, DEFAULT_ZOOM, MIN_ZOOM, MAX_ZOOM } from '@/lib/constants';
import MapMarker from './MapMarker';
import MapControls from './MapControls';
import { Button } from '@/components/ui/button';
import { Compass, Locate, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MapViewProps {
  onMarkerClick?: (spotId: string) => void;
  onMapClick?: (lat: number, lng: number) => void;
  className?: string;
  showControls?: boolean;
  interactive?: boolean;
}

const MapView = ({
  onMarkerClick,
  onMapClick,
  className,
  showControls = true,
  interactive = true,
}: MapViewProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<MapLibreMap | null>(null);
  const markersRef = useRef<{ [key: string]: maplibregl.Marker }>({});
  
  const { 
    center, 
    zoom, 
    isSatelliteView, 
    setCenter, 
    setZoom, 
    selectedCategories, 
    searchRadius,
    userLocation,
    selectedSpotId,
    setSelectedSpotId
  } = useMapStore();
  
  const { getCurrentPosition } = useGeolocation();
  const [spots, setSpots] = useState<SpotLocation[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current) return;
    if (map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: MAP_STYLE_URL,
      center: center,
      zoom: zoom,
      minZoom: MIN_ZOOM,
      maxZoom: MAX_ZOOM,
      attributionControl: false,
      interactive: interactive,
    });

    // Add navigation control
    if (interactive) {
      map.current.addControl(
        new maplibregl.NavigationControl({ showCompass: false }),
        'top-right'
      );
    }

    // Add attribution control
    map.current.addControl(
      new maplibregl.AttributionControl({
        compact: true,
      }),
      'bottom-right'
    );

    // Store map position in store when it changes
    map.current.on('moveend', () => {
      if (!map.current) return;
      const center = map.current.getCenter();
      setCenter([center.lng, center.lat]);
      setZoom(map.current.getZoom());
    });

    // Handle map click for adding new spots
    if (onMapClick) {
      map.current.on('click', (e) => {
        onMapClick(e.lngLat.lat, e.lngLat.lng);
      });
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [center, zoom, setCenter, setZoom, onMapClick, interactive]);

  // Update map style when satellite view is toggled
  useEffect(() => {
    if (!map.current) return;

    // This would normally use a satellite tile source - for demo we're just toggling styles
    if (isSatelliteView) {
      map.current.setStyle('https://demotiles.maplibre.org/style.json');
    } else {
      map.current.setStyle(MAP_STYLE_URL);
    }
  }, [isSatelliteView]);

  // Fetch nearby spots whenever location, radius, or categories change
  useEffect(() => {
    const fetchNearbySpots = async () => {
      if (!userLocation) return;
      
      setIsLoading(true);
      try {
        const { latitude, longitude } = userLocation;
        const categoryId = selectedCategories.length === 1 ? selectedCategories[0] : undefined;
        
        const spots = await spotsApi.getNearbySpots(latitude, longitude, searchRadius, categoryId);
        setSpots(spots);
      } catch (error) {
        console.error('Error fetching nearby spots:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNearbySpots();
  }, [userLocation, searchRadius, selectedCategories]);

  // Update markers when spots change
  useEffect(() => {
    if (!map.current) return;

    // Clear existing markers
    Object.values(markersRef.current).forEach(marker => marker.remove());
    markersRef.current = {};

    // Add new markers
    spots.forEach(spot => {
      const marker = new maplibregl.Marker({
        element: MapMarker({
          category: spot.categoryId,
          isSelected: selectedSpotId === spot.id,
          onClick: () => {
            if (onMarkerClick) {
              onMarkerClick(spot.id);
            } else {
              setSelectedSpotId(spot.id);
            }
          },
        }),
      })
        .setLngLat([spot.longitude, spot.latitude])
        .addTo(map.current!);
      
      markersRef.current[spot.id] = marker;
    });

  }, [spots, selectedSpotId, onMarkerClick, setSelectedSpotId]);

  // Fly to the currently selected spot
  useEffect(() => {
    if (!map.current || !selectedSpotId) return;
    
    const spot = spots.find(s => s.id === selectedSpotId);
    if (!spot) return;
    
    map.current.flyTo({
      center: [spot.longitude, spot.latitude],
      zoom: Math.max(map.current.getZoom(), 15),
      duration: 1000,
    });
  }, [selectedSpotId, spots]);

  // Handler for getting current location
  const handleLocate = async () => {
    const location = await getCurrentPosition();
    if (!location || !map.current) return;
    
    map.current.flyTo({
      center: [location.longitude, location.latitude],
      zoom: 14,
      duration: 1000,
    });
  };

  // Handler for resetting the map view
  const handleResetView = () => {
    if (!map.current || !userLocation) return;
    
    map.current.flyTo({
      center: [userLocation.longitude, userLocation.latitude],
      zoom: DEFAULT_ZOOM,
      duration: 1000,
    });
  };

  return (
    <div className={cn('relative h-full w-full', className)}>
      <div ref={mapContainer} className="h-full w-full rounded-lg" />
      
      {/* Custom Map Controls */}
      {showControls && (
        <div className="absolute bottom-4 left-4 z-10 flex flex-col space-y-2">
          <Button
            variant="secondary"
            size="icon"
            className="h-10 w-10 rounded-full bg-background shadow-md"
            onClick={handleLocate}
            aria-label="Get current location"
          >
            <Locate className="h-5 w-5" />
          </Button>
          
          <Button
            variant="secondary"
            size="icon"
            className="h-10 w-10 rounded-full bg-background shadow-md"
            onClick={handleResetView}
            aria-label="Reset view"
          >
            <Compass className="h-5 w-5" />
          </Button>
          
          <Button
            variant={isSatelliteView ? "default" : "secondary"}
            size="icon"
            className="h-10 w-10 rounded-full bg-background shadow-md"
            onClick={() => useMapStore.getState().toggleSatelliteView()}
            aria-label="Toggle satellite view"
          >
            <Layers className="h-5 w-5" />
          </Button>
        </div>
      )}
      
      {/* Category and Radius Controls */}
      {showControls && (
        <div className="absolute top-4 left-4 z-10">
          <MapControls />
        </div>
      )}
    </div>
  );
};

export default MapView;
