import React from 'react';

import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { SpotImage } from '@/types/spots';
import { generateImageUrl } from '@/lib/utils';
import { ChevronLeft, ChevronRight, X, Image as ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SpotGalleryProps {
  images: SpotImage[];
  className?: string;
}

const SpotGallery = ({ images, className }: SpotGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);
  
  // If no images, show placeholder
  if (images.length === 0) {
    return (
      <div className={cn(
        "bg-muted rounded-lg flex flex-col items-center justify-center h-64",
        className
      )}>
        <ImageIcon className="h-12 w-12 text-muted-foreground mb-2" />
        <p className="text-muted-foreground text-sm">No images available</p>
      </div>
    );
  }
  
  // Handle navigation
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  // Open fullscreen viewer
  const openViewer = (index: number) => {
    setCurrentIndex(index);
    setViewerOpen(true);
  };
  
  return (
    <>
      {/* Main Gallery */}
      <div className={cn("space-y-2", className)}>
        {/* Featured Image */}
        <div 
          className="relative rounded-lg overflow-hidden bg-muted cursor-pointer"
          onClick={() => openViewer(currentIndex)}
        >
          <img
            src={generateImageUrl(images[currentIndex].url)}
            alt={`Spot image ${currentIndex + 1}`}
            className="w-full h-64 object-cover"
          />
          
          {/* Navigation Controls */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full h-10 w-10"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full h-10 w-10"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              
              <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-md">
                {currentIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>
        
        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="grid grid-cols-5 gap-2">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={cn(
                  "rounded-md overflow-hidden cursor-pointer transition-opacity",
                  index === currentIndex 
                    ? "ring-2 ring-primary" 
                    : "opacity-70 hover:opacity-100"
                )}
                onClick={() => setCurrentIndex(index)}
              >
                <img
                  src={generateImageUrl(image.url)}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-16 object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Fullscreen Image Viewer */}
      <Dialog open={viewerOpen} onOpenChange={setViewerOpen}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <div className="relative bg-black rounded-lg overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 text-white bg-black/20 hover:bg-black/40 z-10"
              onClick={() => setViewerOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
            
            <div className="flex items-center justify-center h-[80vh]">
              <img
                src={generateImageUrl(images[currentIndex].url)}
                alt={`Spot image ${currentIndex + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            
            {/* Navigation Controls */}
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full h-12 w-12"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full h-12 w-12"
                  onClick={goToNext}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                  {currentIndex + 1} / {images.length}
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SpotGallery;
