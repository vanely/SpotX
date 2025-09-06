import { useState, useEffect } from 'react';
import { Coordinates } from '@/types/common';
import { useMapStore } from '@/store/map';
import { useToast } from '@/components/ui/use-toast';

interface GeolocationOptions {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
}

interface UseGeolocationReturn {
  location: Coordinates | null;
  loading: boolean;
  error: string | null;
  getCurrentPosition: () => Promise<Coordinates | null>;
}

const useGeolocation = (
  options: GeolocationOptions = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0,
  }
): UseGeolocationReturn => {
  const [location, setLocation] = useState<Coordinates | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { setUserLocation } = useMapStore();
  const { toast } = useToast();

  const handleSuccess = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;
    const newLocation = { latitude, longitude };
    
    setLocation(newLocation);
    setLoading(false);
    setError(null);
    
    // Update map store with user location
    setUserLocation(newLocation);
    
    return newLocation;
  };

  const handleError = (error: GeolocationPositionError) => {
    setLoading(false);
    
    let errorMessage: string;
    
    switch (error.code) {
      case error.PERMISSION_DENIED:
        errorMessage = 'User denied the request for geolocation.';
        break;
      case error.POSITION_UNAVAILABLE:
        errorMessage = 'Location information is unavailable.';
        break;
      case error.TIMEOUT:
        errorMessage = 'The request to get user location timed out.';
        break;
      default:
        errorMessage = 'An unknown error occurred.';
    }
    
    setError(errorMessage);
    
    toast({
      title: 'Location Error',
      description: errorMessage,
      variant: 'destructive',
    });
    
    return null;
  };

  const getCurrentPosition = (): Promise<Coordinates | null> => {
    return new Promise((resolve) => {
      if (!navigator.geolocation) {
        const errorMessage = 'Geolocation is not supported by your browser.';
        setError(errorMessage);
        
        toast({
          title: 'Location Error',
          description: errorMessage,
          variant: 'destructive',
        });
        
        resolve(null);
        return;
      }
      
      setLoading(true);
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = handleSuccess(position);
          resolve(newLocation);
        },
        (error) => {
          handleError(error);
          resolve(null);
        },
        options
      );
    });
  };

  useEffect(() => {
    // Get location on mount
    getCurrentPosition();
    
    // Clean up any watchers if needed
    return () => {
      // No cleanup needed for getCurrentPosition
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { location, loading, error, getCurrentPosition };
};

export default useGeolocation;
