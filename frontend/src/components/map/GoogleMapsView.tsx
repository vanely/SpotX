import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { useMapStore } from '@/store/map';
import { useGeolocation } from '@/hooks';
import { spotsApi } from '@/api';
import { SpotLocation } from '@/types/spots';
import { DEFAULT_ZOOM, MIN_ZOOM, MAX_ZOOM, DEV_CONFIG, CATEGORY_COLORS } from '@/lib/constants';
import MapControls from './MapControls';
import { Button } from '@/components/ui/button';
import { Compass, Locate, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GoogleMapsViewProps {
  onMarkerClick?: (spotId: string) => void;
  onMapClick?: (lat: number, lng: number) => void;
  className?: string;
  showControls?: boolean;
  interactive?: boolean;
}

const GoogleMapsView = ({
  onMarkerClick,
  onMapClick,
  className,
  showControls = true,
  interactive = true,
}: GoogleMapsViewProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<{ [key: string]: google.maps.Marker }>({});
  const loaderRef = useRef<Loader | null>(null);
  
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
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Helper function to get category color
  const getCategoryColor = (categoryId: string) => {
    return CATEGORY_COLORS[categoryId as keyof typeof CATEGORY_COLORS] || CATEGORY_COLORS.DEFAULT;
  };

  // Initialize Google Maps
  useEffect(() => {
    if (!mapContainer.current || !DEV_CONFIG.GOOGLE_MAPS_API_KEY) return;
    if (map.current) return;

    const initializeMap = async () => {
      try {
        if (!loaderRef.current) {
          loaderRef.current = new Loader({
            apiKey: DEV_CONFIG.GOOGLE_MAPS_API_KEY,
            version: 'weekly',
            libraries: ['places'],
          });
        }

        const google = await loaderRef.current.load();
        
        map.current = new google.maps.Map(mapContainer.current!, {
          center: { lat: center[1], lng: center[0] },
          zoom: zoom,
          minZoom: MIN_ZOOM,
          maxZoom: MAX_ZOOM,
          mapTypeId: isSatelliteView ? google.maps.MapTypeId.HYBRID : google.maps.MapTypeId.ROADMAP,
          disableDefaultUI: !interactive,
          zoomControl: interactive,
          mapTypeControl: interactive,
          scaleControl: interactive,
          streetViewControl: interactive,
          rotateControl: interactive,
          fullscreenControl: interactive,
        });

        // Store map position in store when it changes
        map.current.addListener('center_changed', () => {
          if (!map.current) return;
          const center = map.current.getCenter();
          if (center) {
            setCenter([center.lng(), center.lat()]);
          }
        });

        map.current.addListener('zoom_changed', () => {
          if (!map.current) return;
          setZoom(map.current!.getZoom()!);
        });

        // Handle map click for adding new spots
        if (onMapClick) {
          map.current.addListener('click', (e: google.maps.MapMouseEvent) => {
            if (e.latLng) {
              onMapClick(e.latLng.lat(), e.latLng.lng());
            }
          });
        }

        setIsMapLoaded(true);
      } catch (error) {
        console.error('Error loading Google Maps:', error);
      }
    };

    initializeMap();

    return () => {
      if (map.current) {
        map.current = null;
      }
    };
  }, [center, zoom, setCenter, setZoom, onMapClick, interactive]);

  // Update map style when satellite view is toggled
  useEffect(() => {
    if (!map.current || !isMapLoaded) return;

    const mapTypeId = isSatelliteView ? google.maps.MapTypeId.HYBRID : google.maps.MapTypeId.ROADMAP;
    map.current.setMapTypeId(mapTypeId);
  }, [isSatelliteView, isMapLoaded]);

  // Fetch nearby spots whenever location, radius, or categories change
  useEffect(() => {
    const fetchNearbySpots = async () => {
      if (!userLocation) return;
      
      try {
        const { latitude, longitude } = userLocation;
        const categoryId = selectedCategories.length === 1 ? selectedCategories[0] : undefined;
        
        const spots = await spotsApi.getNearbySpots(latitude, longitude, searchRadius, categoryId);
        setSpots(spots);
      } catch (error) {
        console.error('Error fetching nearby spots:', error);
      }
    };

    fetchNearbySpots();
  }, [userLocation, searchRadius, selectedCategories]);

  // Update markers when spots change
  useEffect(() => {
    if (!map.current || !isMapLoaded) return;

    // Clear existing markers
    Object.values(markersRef.current).forEach(marker => marker.setMap(null));
    markersRef.current = {};

    // Add new markers
    spots.forEach(spot => {
      // Create a canvas to convert the DOM element to an image
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 32;
      canvas.height = 32;

      if (ctx) {
        // Create a simple colored circle marker
        const color = getCategoryColor(spot.categoryId);
        ctx.beginPath();
        ctx.arc(16, 16, 12, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        if (selectedSpotId === spot.id) {
          ctx.beginPath();
          ctx.arc(16, 16, 16, 0, 2 * Math.PI);
          ctx.strokeStyle = color;
          ctx.lineWidth = 3;
          ctx.stroke();
        }
      }

      const marker = new google.maps.Marker({
        position: { lat: spot.latitude, lng: spot.longitude },
        map: map.current,
        icon: {
          url: canvas.toDataURL(),
          scaledSize: new google.maps.Size(32, 32),
          anchor: new google.maps.Point(16, 16),
        },
        title: spot.title,
      });
      
      markersRef.current[spot.id] = marker;
    });

  }, [spots, selectedSpotId, onMarkerClick, setSelectedSpotId, isMapLoaded]);

  // Fly to the currently selected spot
  useEffect(() => {
    if (!map.current || !selectedSpotId || !isMapLoaded) return;
    
    const spot = spots.find(s => s.id === selectedSpotId);
    if (!spot) return;
    
    map.current.panTo({ lat: spot.latitude, lng: spot.longitude });
    map.current.setZoom(Math.max(map.current.getZoom()!, 15));
  }, [selectedSpotId, spots, isMapLoaded]);

  // Handler for getting current location
  const handleLocate = async () => {
    const location = await getCurrentPosition();
    if (!location || !map.current) return;
    
    map.current.panTo({ lat: location.latitude, lng: location.longitude });
    map.current.setZoom(14);
  };

  // Handler for resetting the map view
  const handleResetView = () => {
    if (!map.current || !userLocation) return;
    
    map.current.panTo({ lat: userLocation.latitude, lng: userLocation.longitude });
    map.current.setZoom(DEFAULT_ZOOM);
  };

  if (!DEV_CONFIG.GOOGLE_MAPS_API_KEY) {
    return (
      <div className={cn('relative h-full w-full flex items-center justify-center', className)}>
        <div className="text-center">
          <p className="text-muted-foreground mb-2">Google Maps API key not configured</p>
          <p className="text-sm text-muted-foreground">Set VITE_GOOGLE_MAPS_API_KEY in your environment</p>
        </div>
      </div>
    );
  }

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

export default GoogleMapsView;
