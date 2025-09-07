// API endpoints
export const API_URL = process.env.VITE_API_BASE_URL || 'http://localhost:3333/api';

// Auth related
export const TOKEN_KEY = 'spotx_auth_token';
export const USER_KEY = 'spotx_user';

// Map related
export const MAP_STYLE_URL = process.env.VITE_MAPLIBRE_STYLE_URL || 'https://demotiles.maplibre.org/style.json';
export const DEFAULT_ZOOM = Number(process.env.VITE_MAP_INITIAL_ZOOM || 13);
export const MIN_ZOOM = Number(process.env.VITE_MAP_MIN_ZOOM || 3);
export const MAX_ZOOM = Number(process.env.VITE_MAP_MAX_ZOOM || 18);
export const DEFAULT_CENTER = [-73.9857, 40.7484]; // New York City by default

// Upload related
export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
export const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
export const MAX_UPLOAD_FILES = 5;

// Breakpoints for responsive design
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

// Feature flags
export const FEATURES = {
  GUEST_AUTH: true,
  SATELLITE_VIEW: true,
  COLLECTIONS: true,
  SPOT_RATING: true,
  SPOT_TAGGING: true,
  OFFLINE_MODE: false,
  EVENTS: false,
};

// Category colors
export const CATEGORY_COLORS = {
  SKATEBOARDING: '#3B82F6', // blue-500
  ROLLERBLADING: '#EC4899', // pink-500
  PARKOUR: '#10B981', // emerald-500
  CYCLING: '#F59E0B', // amber-500
  BASKETBALL: '#8B5CF6', // violet-500
  CLIMBING: '#EF4444', // red-500
  SKATING: '#06B6D4', // cyan-500
  DEFAULT: '#6B7280', // gray-500
};
