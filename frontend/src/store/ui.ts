import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
  theme: 'light' | 'dark' | 'system';
  isMobileMenuOpen: boolean;
  isBottomSheetExpanded: boolean;
  isSidePanelExpanded: boolean;
  
  // Bottom sheet state
  bottomSheetHeight: number;
  
  // Actions
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  toggleMobileMenu: () => void;
  setMobileMenuOpen: (isOpen: boolean) => void;
  toggleBottomSheet: () => void;
  setBottomSheetExpanded: (isExpanded: boolean) => void;
  setBottomSheetHeight: (height: number) => void;
  toggleSidePanel: () => void;
  setSidePanelExpanded: (isExpanded: boolean) => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      // Initial state
      theme: 'system',
      isMobileMenuOpen: false,
      isBottomSheetExpanded: false,
      isSidePanelExpanded: true,
      bottomSheetHeight: 200,
      
      // Actions
      setTheme: (theme) => {
        set({ theme });
        
        // Apply theme to document
        const root = window.document.documentElement;
        
        root.classList.remove('light', 'dark');
        
        if (theme === 'system') {
          const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
          root.classList.add(systemTheme);
        } else {
          root.classList.add(theme);
        }
      },
      
      toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
      
      setMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen }),
      
      toggleBottomSheet: () => set((state) => ({ isBottomSheetExpanded: !state.isBottomSheetExpanded })),
      
      setBottomSheetExpanded: (isExpanded) => set({ isBottomSheetExpanded: isExpanded }),
      
      setBottomSheetHeight: (height) => set({ bottomSheetHeight: height }),
      
      toggleSidePanel: () => set((state) => ({ isSidePanelExpanded: !state.isSidePanelExpanded })),
      
      setSidePanelExpanded: (isExpanded) => set({ isSidePanelExpanded: isExpanded }),
    }),
    {
      name: 'spotx-ui-storage',
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);

// Initialize theme on load
if (typeof window !== 'undefined') {
  const root = window.document.documentElement;
  const initialState = JSON.parse(localStorage.getItem('spotx-ui-storage') || '{}');
  
  const theme = initialState.state?.theme || 'system';
  
  if (theme === 'system') {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    root.classList.add(systemTheme);
  } else {
    root.classList.add(theme);
  }
}
