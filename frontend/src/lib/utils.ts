import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: string | Date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatDistance = (distance?: number) => {
  if (!distance) return 'Unknown distance';
  
  if (distance < 1) {
    const meters = Math.round(distance * 1000);
    return `${meters} m`;
  }
  
  return `${distance.toFixed(1)} km`;
};

export const getDirectionsUrl = (
  latitude: number,
  longitude: number,
  title: string
) => {
  // Check if iOS
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  
  if (isIOS) {
    // Apple Maps
    return `maps://maps.apple.com/?q=${encodeURIComponent(title)}&ll=${latitude},${longitude}`;
  } else {
    // Google Maps
    return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&destination_place_id=${encodeURIComponent(title)}`;
  }
};

export const generateImageUrl = (key: string, baseUrl: string | undefined = process.env.VITE_R2_PUBLIC_URL) => {
  if (!key) return '';
  if (key.startsWith('http')) return key;
  return `${baseUrl}/${key}`;
};

export const truncateText = (text: string, maxLength: number = 100) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    return false;
  }
};

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) return error.message;
  return String(error);
};

export const getPublicAssetUrl = (path: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `/${cleanPath}`;
};

export const getIconUrl = (iconName: string): string => {
  return getPublicAssetUrl(`assets/icons/${iconName}`);
};

export const getImageUrl = (imagePath: string): string => {
  return getPublicAssetUrl(`assets/images/${imagePath}`);
};

export const debounce = <F extends (...args: any[]) => any>(
  func: F,
  waitFor: number
) => {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<F>): Promise<ReturnType<F>> => {
    clearTimeout(timeout);
    return new Promise(resolve => {
      timeout = setTimeout(() => resolve(func(...args)), waitFor);
    });
  };
};
