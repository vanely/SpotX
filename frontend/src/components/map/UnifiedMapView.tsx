import { useMapStore } from '@/store/map';
import MapView from './MapView';
import GoogleMapsView from './GoogleMapsView';

interface UnifiedMapViewProps {
  onMarkerClick?: (spotId: string) => void;
  onMapClick?: (lat: number, lng: number) => void;
  className?: string;
  showControls?: boolean;
  interactive?: boolean;
}

const UnifiedMapView = (props: UnifiedMapViewProps) => {
  const { mapProvider } = useMapStore();

  if (mapProvider === 'google') {
    return <GoogleMapsView {...props} />;
  }

  return <MapView {...props} />;
};

export default UnifiedMapView;
