import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DEFAULT_CENTER, DEFAULT_ZOOM, DEV_CONFIG } from '@/lib/constants';
import { Coordinates } from '@/types/common';

interface MapState {
  center: [number, number];
  zoom: number;
  styleUrl: string;
  isSatelliteView: boolean;
  selectedSpotId: string | null;
  userLocation: Coordinates | null;
  newSpotCoordinates: Coordinates | null;
  
  // Map provider
  mapProvider: 'maplibre' | 'google';
  
  // Filters
  selectedCategories: string[];
  searchRadius: number;
  
  // Actions
  setCenter: (center: [number, number]) => void;
  setZoom: (zoom: number) => void;
  setStyle: (styleUrl: string) => void;
  toggleSatelliteView: () => void;
  setSelectedSpotId: (spotId: string | null) => void;
  setUserLocation: (location: Coordinates | null) => void;
  setNewSpotCoordinates: (coordinates: Coordinates | null) => void;
  addCategoryFilter: (categoryId: string) => void;
  removeCategoryFilter: (categoryId: string) => void;
  toggleCategoryFilter: (categoryId: string) => void;
  clearCategoryFilters: () => void;
  setSearchRadius: (radius: number) => void;
  resetMapView: () => void;
  setMapProvider: (provider: 'maplibre' | 'google') => void;
}

export const useMapStore = create<MapState>()(
  persist(
    (set) => ({
      // Initial state
      center: DEFAULT_CENTER,
      zoom: DEFAULT_ZOOM,
      styleUrl: 'https://demotiles.maplibre.org/style.json',
      isSatelliteView: true,
      selectedSpotId: null,
      userLocation: null,
      newSpotCoordinates: null,
      mapProvider: DEV_CONFIG.USE_GOOGLE_MAPS ? 'google' : 'maplibre',
      selectedCategories: [],
      searchRadius: 5, // 5km default radius
      
      // Actions
      setCenter: (center) => set({ center }),
      
      setZoom: (zoom) => set({ zoom }),
      
      setStyle: (styleUrl) => set({ styleUrl }),
      
      toggleSatelliteView: () => set((state) => ({ isSatelliteView: !state.isSatelliteView })),
      
      setSelectedSpotId: (spotId) => set({ selectedSpotId: spotId }),
      
      setUserLocation: (location) => set({ userLocation: location }),
      
      setNewSpotCoordinates: (coordinates) => set({ newSpotCoordinates: coordinates }),
      
      addCategoryFilter: (categoryId) => set((state) => ({
        selectedCategories: [...state.selectedCategories, categoryId]
      })),
      
      removeCategoryFilter: (categoryId) => set((state) => ({
        selectedCategories: state.selectedCategories.filter(id => id !== categoryId)
      })),
      
      toggleCategoryFilter: (categoryId) => set((state) => {
        if (state.selectedCategories.includes(categoryId)) {
          return {
            selectedCategories: state.selectedCategories.filter(id => id !== categoryId)
          };
        } else {
          return {
            selectedCategories: [...state.selectedCategories, categoryId]
          };
        }
      }),
      
      clearCategoryFilters: () => set({ selectedCategories: [] }),
      
      setSearchRadius: (radius) => set({ searchRadius: radius }),
      
      resetMapView: () => set((state) => ({
        center: state.userLocation ? [state.userLocation.longitude, state.userLocation.latitude] as [number, number] : DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
        selectedSpotId: null,
        newSpotCoordinates: null
      })),
      
      setMapProvider: (provider) => set({ mapProvider: provider }),
    }),
    {
      name: 'spotx-map-storage',
      partialize: (state) => ({
        isSatelliteView: state.isSatelliteView,
        selectedCategories: state.selectedCategories,
        searchRadius: state.searchRadius,
        mapProvider: state.mapProvider,
      }),
    }
  )
);
