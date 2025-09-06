import { useMemo } from 'react';
import { CATEGORY_COLORS } from '@/lib/constants';

interface MapMarkerProps {
  category: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const MapMarker = ({ category, isSelected = false, onClick }: MapMarkerProps) => {
  // Create the marker element
  const markerElement = useMemo(() => {
    const color = CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS] || CATEGORY_COLORS.DEFAULT;
    
    // Create container element
    const element = document.createElement('div');
    element.className = 'map-marker';
    element.style.cursor = 'pointer';
    
    // Create marker element
    const marker = document.createElement('div');
    marker.className = 'flex items-center justify-center';
    marker.style.width = '32px';
    marker.style.height = '32px';
    
    // Create pin element
    const pin = document.createElement('div');
    pin.className = 'absolute';
    pin.style.width = isSelected ? '36px' : '28px';
    pin.style.height = isSelected ? '36px' : '28px';
    pin.style.backgroundColor = color;
    pin.style.borderRadius = '50%';
    pin.style.transform = 'translate(-50%, -50%)';
    pin.style.boxShadow = isSelected 
      ? '0 0 0 4px rgba(255, 255, 255, 0.8), 0 0 0 6px ' + color + '80'
      : '0 0 0 2px rgba(255, 255, 255, 0.8)';
    pin.style.transition = 'all 0.2s ease-in-out';
    
    // Create pin inner element
    const pinInner = document.createElement('div');
    pinInner.className = 'absolute';
    pinInner.style.width = isSelected ? '24px' : '18px';
    pinInner.style.height = isSelected ? '24px' : '18px';
    pinInner.style.backgroundColor = 'white';
    pinInner.style.borderRadius = '50%';
    pinInner.style.left = '50%';
    pinInner.style.top = '50%';
    pinInner.style.transform = 'translate(-50%, -50%)';
    
    // Create shadow element
    const shadow = document.createElement('div');
    shadow.className = 'absolute';
    shadow.style.width = '20px';
    shadow.style.height = '6px';
    shadow.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    shadow.style.borderRadius = '50%';
    shadow.style.transform = 'translate(-50%, 18px)';
    shadow.style.zIndex = '-1';
    
    // Add click handler
    if (onClick) {
      element.addEventListener('click', onClick);
    }
    
    // Assemble marker
    pin.appendChild(pinInner);
    marker.appendChild(shadow);
    marker.appendChild(pin);
    element.appendChild(marker);
    
    return element;
  }, [category, isSelected, onClick]);

  return markerElement;
};

export default MapMarker;
