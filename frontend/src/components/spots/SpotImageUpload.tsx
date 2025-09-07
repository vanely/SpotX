import React from 'react';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { generateImageUrl } from '@/lib/utils';
import { ImagePlus, X, Camera, Upload, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SpotImageUploadProps {
  existingImages?: string[];
  onImagesChange: (images: string[]) => void;
  onFilesChange: (files: File[]) => void;
  maxFiles?: number;
  acceptedFileTypes?: string[];
}

const SpotImageUpload = ({
  existingImages = [],
  onImagesChange,
  onFilesChange,
  maxFiles = 5,
  acceptedFileTypes = ['image/jpeg', 'image/png', 'image/webp'],
}: SpotImageUploadProps) => {
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  
  // Calculate remaining slots
  const remainingSlots = maxFiles - existingImages.length - previewImages.length;
  
  // Handle file drop
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Limit the number of files
    const filesToAdd = acceptedFiles.slice(0, remainingSlots);
    
    // Create preview URLs
    const previews = filesToAdd.map(file => URL.createObjectURL(file));
    setPreviewImages(prev => [...prev, ...previews]);
    
    // Pass files to parent
    onFilesChange(filesToAdd);
  }, [remainingSlots, onFilesChange]);
  
  // Set up dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': acceptedFileTypes,
    },
    maxFiles: remainingSlots,
    disabled: remainingSlots <= 0,
  });
  
  // Handle removing an existing image
  const handleRemoveExistingImage = (index: number) => {
    const updatedImages = [...existingImages];
    updatedImages.splice(index, 1);
    onImagesChange(updatedImages);
  };
  
  // Handle removing a preview image
  const handleRemovePreviewImage = (index: number) => {
    const updatedPreviews = [...previewImages];
    
    // Revoke the object URL to avoid memory leaks
    URL.revokeObjectURL(updatedPreviews[index]);
    
    updatedPreviews.splice(index, 1);
    setPreviewImages(updatedPreviews);
    
    // Update the files in the parent component
    onFilesChange([]);
  };
  
  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground">
        Add up to {maxFiles} images of the spot. The first image will be used as the cover.
      </div>
      
      {/* Image Preview Grid */}
      {(existingImages.length > 0 || previewImages.length > 0) && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {/* Existing Images */}
          {existingImages.map((image, index) => (
            <Card key={`existing-${index}`} className="relative group overflow-hidden">
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button
                  variant="destructive"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => handleRemoveExistingImage(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <img
                src={generateImageUrl(image)}
                alt={`Spot image ${index + 1}`}
                className="w-full h-40 object-cover"
              />
              {index === 0 && (
                <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md">
                  Cover
                </div>
              )}
            </Card>
          ))}
          
          {/* Preview Images */}
          {previewImages.map((preview, index) => (
            <Card key={`preview-${index}`} className="relative group overflow-hidden">
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button
                  variant="destructive"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => handleRemovePreviewImage(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <img
                src={preview}
                alt={`New image ${index + 1}`}
                className="w-full h-40 object-cover"
              />
              {existingImages.length === 0 && index === 0 && (
                <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md">
                  Cover
                </div>
              )}
              <div className="absolute bottom-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-md">
                New
              </div>
            </Card>
          ))}
        </div>
      )}
      
      {/* Upload Dropzone */}
      {remainingSlots > 0 ? (
        <div
          {...getRootProps()}
          className={cn(
            "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
            isDragActive
              ? "border-primary bg-primary/10"
              : "border-muted-foreground/25 hover:border-primary/50"
          )}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="p-3 bg-muted rounded-full">
              {isDragActive ? (
                <Upload className="h-6 w-6 text-primary" />
              ) : (
                <Camera className="h-6 w-6 text-muted-foreground" />
              )}
            </div>
            <div className="text-sm font-medium">
              {isDragActive
                ? "Drop the images here"
                : "Drag & drop images here or click to select"}
            </div>
            <p className="text-xs text-muted-foreground">
              Supported formats: JPEG, PNG, WebP. Max {maxFiles} images.
              {remainingSlots < maxFiles && ` (${remainingSlots} remaining)`}
            </p>
          </div>
        </div>
      ) : (
        <Card>
          <CardContent className="p-4 text-center text-muted-foreground">
            <ImagePlus className="h-6 w-6 mx-auto mb-2" />
            <p>Maximum number of images reached ({maxFiles}).</p>
            <p className="text-xs">
              Remove some images to add new ones.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SpotImageUpload;
