import React from 'react';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { categoriesApi } from '@/api';
import { Category } from '@/types/spots';
import { useMapStore } from '@/store/map';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Slider,
  SliderTrack,
  SliderRange,
  SliderThumb,
} from '@/components/ui/slider';
import { Filter, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CATEGORY_COLORS } from '@/lib/constants';

const MapControls = () => {
  const [open, setOpen] = useState(false);
  const { selectedCategories, toggleCategoryFilter, clearCategoryFilters, searchRadius, setSearchRadius } = useMapStore();
  
  // Fetch categories
  const { data: categories, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: categoriesApi.getAllCategories,
  });
  
  // Handle outside click to close popover
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (open && !e.target) {
        setOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);
  
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          className={cn(
            "flex items-center space-x-2 h-10 px-4 shadow-md",
            selectedCategories.length > 0 && "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
        >
          <Filter className="h-4 w-4" />
          <span className="hidden sm:inline-block">
            {selectedCategories.length === 0 ? 'Filter' : `${selectedCategories.length} selected`}
          </span>
          {selectedCategories.length > 0 && (
            <span className="inline-flex justify-center items-center rounded-full bg-background text-foreground w-5 h-5 text-xs">
              {selectedCategories.length}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4" align="start">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Filter Spots</h3>
            {selectedCategories.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-muted-foreground"
                onClick={clearCategoryFilters}
              >
                Clear
                <X className="ml-1 h-4 w-4" />
              </Button>
            )}
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Categories</h4>
            <div className="grid grid-cols-2 gap-2">
              {isLoading ? (
                <p className="text-sm text-muted-foreground">Loading categories...</p>
              ) : categories?.length ? (
                categories.map((category: Category) => (
                  <Button
                    key={category.id}
                    variant="outline"
                    size="sm"
                    className={cn(
                      "justify-start",
                      selectedCategories.includes(category.id) && "border-primary bg-primary/10"
                    )}
                    onClick={() => toggleCategoryFilter(category.id)}
                  >
                    <span
                      className="mr-2 h-3 w-3 rounded-full"
                      style={{
                        backgroundColor: CATEGORY_COLORS[category.name.toUpperCase() as keyof typeof CATEGORY_COLORS] || CATEGORY_COLORS.DEFAULT,
                      }}
                    />
                    {category.name}
                  </Button>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No categories found</p>
              )}
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">Search Radius</h4>
              <span className="text-sm text-muted-foreground">{searchRadius} km</span>
            </div>
            <Slider
              value={[searchRadius]}
              min={1}
              max={50}
              step={1}
              onValueChange={(value) => setSearchRadius(value[0])}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1 km</span>
              <span>50 km</span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default MapControls;
