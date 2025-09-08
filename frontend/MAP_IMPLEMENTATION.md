# Map Implementation Documentation

## Overview

The SpotX frontend now supports two map providers:
- **MapLibre GL JS** (default) - Open source mapping library
- **Google Maps** (development mode only) - Google's mapping service

## Features

### MapLibre Implementation
- ✅ Shows existing locations as markers
- ✅ Defaults to satellite view (ArcGIS World Imagery)
- ✅ Supports street view toggle
- ✅ Custom markers with category colors
- ✅ Interactive controls (zoom, locate, reset view)
- ✅ Category filtering and radius search

### Google Maps Implementation
- ✅ Shows existing locations as markers
- ✅ Defaults to hybrid satellite view
- ✅ Supports street/satellite view toggle
- ✅ Custom markers with category colors
- ✅ Interactive controls (zoom, locate, reset view)
- ✅ Category filtering and radius search

## Development Mode Toggle

In development mode, you can switch between map providers using the toggle button in the top-right corner of the map.

## Configuration

### Environment Variables

Add these to your `.env` file:

```bash
# Enable Google Maps in development (optional)
VITE_USE_GOOGLE_MAPS=true

# Google Maps API Key (required for Google Maps)
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

### Google Maps API Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Maps JavaScript API
4. Create credentials (API Key)
5. Restrict the API key to your domain (recommended)
6. Add the API key to your environment variables

## Usage

The map implementation automatically selects the appropriate provider based on:
1. Development mode configuration
2. User preference (stored in localStorage)

### Switching Providers

In development mode, use the toggle button to switch between providers. The preference is saved and will persist across sessions.

## Technical Details

### MapLibre
- Uses ArcGIS World Imagery for satellite view
- Custom marker implementation with DOM elements
- Supports all standard MapLibre GL JS features

### Google Maps
- Uses Google Maps JavaScript API
- Custom markers rendered as canvas elements
- Supports Google Maps specific features

### State Management
- Map provider selection is stored in Zustand store
- Persisted across sessions using localStorage
- Automatically syncs between components

## File Structure

```
src/components/map/
├── MapView.tsx              # MapLibre implementation
├── GoogleMapsView.tsx       # Google Maps implementation
├── UnifiedMapView.tsx       # Provider selection logic
├── MapProviderToggle.tsx    # Development mode toggle
├── MapMarker.tsx            # Custom marker component
├── MapControls.tsx          # Map controls (filters, etc.)
└── index.ts                 # Exports
```

## Dependencies

- `maplibre-gl` - MapLibre GL JS library
- `@googlemaps/js-api-loader` - Google Maps API loader
- `zustand` - State management
- `@tanstack/react-query` - Data fetching

## Future Enhancements

- [ ] Add more map providers (OpenStreetMap, Mapbox)
- [ ] Implement clustering for dense marker areas
- [ ] Add custom map styles
- [ ] Implement offline map support
- [ ] Add map layer controls
