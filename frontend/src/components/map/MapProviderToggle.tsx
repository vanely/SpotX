import { useMapStore } from '@/store/map';
import { Button } from '@/components/ui/button';
import { MapPin, Globe } from 'lucide-react';

const MapProviderToggle = () => {
  const { mapProvider, setMapProvider } = useMapStore();

  // Only show in development mode
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="absolute top-4 right-4 z-20">
      <Button
        variant="secondary"
        size="sm"
        className="flex items-center space-x-2 bg-background shadow-md"
        onClick={() => setMapProvider(mapProvider === 'maplibre' ? 'google' : 'maplibre')}
      >
        {mapProvider === 'maplibre' ? (
          <>
            <MapPin className="h-4 w-4" />
            <span>MapLibre</span>
          </>
        ) : (
          <>
            <Globe className="h-4 w-4" />
            <span>Google Maps</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default MapProviderToggle;
