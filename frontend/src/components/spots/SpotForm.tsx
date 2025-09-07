import React from 'react';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useQuery } from '@tanstack/react-query';
import { categoriesApi } from '@/api';
import { useGeolocation, useUpload } from '@/hooks';
import { useMapStore } from '@/store/map';
import { CreateSpotRequest, Category } from '@/types/spots';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { MapView } from '@/components/map';
import SpotImageUpload from './SpotImageUpload';
import { Loader2, MapPin, Info, Image, Check } from 'lucide-react';
import { ALLOWED_FILE_TYPES, MAX_UPLOAD_FILES } from '@/lib/constants';

// Form validation schema
const spotFormSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters').max(100, 'Title must be less than 100 characters'),
  description: z.string().max(1000, 'Description must be less than 1000 characters').optional(),
  categoryId: z.string().min(1, 'Please select a category'),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  address: z.string().max(200).optional(),
  city: z.string().max(100).optional(),
  country: z.string().max(100).optional(),
});

type SpotFormValues = z.infer<typeof spotFormSchema>;

interface SpotFormProps {
  initialData?: Partial<SpotFormValues> & { id?: string; images?: string[] };
  onSubmit: (data: CreateSpotRequest) => Promise<void>;
  isSubmitting: boolean;
}

const SpotForm = ({ initialData, onSubmit, isSubmitting }: SpotFormProps) => {
  const { toast } = useToast();
  const { location } = useGeolocation();
  const { newSpotCoordinates, setNewSpotCoordinates } = useMapStore();
  const { uploadMultipleFiles, uploadState } = useUpload();
  
  const [activeTab, setActiveTab] = useState('info');
  const [images, setImages] = useState<string[]>(initialData?.images || []);
  const [files, setFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  
  // Fetch categories
  const { data: categories, isLoading: isCategoriesLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: categoriesApi.getAllCategories,
  });
  
  // Form setup with validation
  const form = useForm<SpotFormValues>({
    resolver: zodResolver(spotFormSchema),
    defaultValues: {
      title: initialData?.title || '',
      description: initialData?.description || '',
      categoryId: initialData?.categoryId || '',
      latitude: initialData?.latitude || (location?.latitude || 0),
      longitude: initialData?.longitude || (location?.longitude || 0),
      address: initialData?.address || '',
      city: initialData?.city || '',
      country: initialData?.country || '',
    },
  });

  // Update coordinates when new spot is placed on map
  useEffect(() => {
    if (newSpotCoordinates) {
      form.setValue('latitude', newSpotCoordinates.latitude);
      form.setValue('longitude', newSpotCoordinates.longitude);
    }
  }, [newSpotCoordinates, form]);

  // Update coordinates when user location changes and no coordinates set
  useEffect(() => {
    if (location && !initialData?.latitude && !newSpotCoordinates) {
      form.setValue('latitude', location.latitude);
      form.setValue('longitude', location.longitude);
    }
  }, [location, form, initialData?.latitude, newSpotCoordinates]);

  // Handle map click to set coordinates
  const handleMapClick = (lat: number, lng: number) => {
    setNewSpotCoordinates({ latitude: lat, longitude: lng });
  };

  // Handle file changes
  const handleFileChange = (files: File[]) => {
    // Limit the number of files
    const validFiles = files.slice(0, MAX_UPLOAD_FILES);
    setFiles(validFiles);
  };

  // Handle image upload
  const handleUploadImages = async () => {
    if (files.length === 0) {
      // If no new files, just use existing images
      return images;
    }

    setIsUploading(true);
    try {
      const uploadedUrls = await uploadMultipleFiles(files);
      
      // Combine with existing images
      const updatedImages = [...images, ...uploadedUrls];
      setImages(updatedImages);
      
      return updatedImages;
    } catch (error) {
      toast({
        title: 'Upload failed',
        description: error instanceof Error ? error.message : 'Failed to upload images',
        variant: 'destructive',
      });
      return images;
    } finally {
      setIsUploading(false);
    }
  };

  // Handle form submission
  const handleFormSubmit = async (data: SpotFormValues) => {
    try {
      // Upload images first if there are any new files
      const uploadedImages = await handleUploadImages();
      
      // Combine form data with uploaded images
      const spotData: CreateSpotRequest = {
        ...data,
        images: uploadedImages,
      };
      
      // Submit the data
      await onSubmit(spotData);
      
      // Clear new spot coordinates
      setNewSpotCoordinates(null);
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to save spot',
        variant: 'destructive',
      });
    }
  };

  // Go to next tab
  const goToNextTab = () => {
    if (activeTab === 'info') {
      // Validate the current tab fields before proceeding
      const isInfoValid = form.trigger(['title', 'description', 'categoryId']);
      if (isInfoValid) {
        setActiveTab('location');
      }
    } else if (activeTab === 'location') {
      const isLocationValid = form.trigger(['latitude', 'longitude']);
      if (isLocationValid) {
        setActiveTab('images');
      }
    }
  };

  // Go to previous tab
  const goToPrevTab = () => {
    if (activeTab === 'location') {
      setActiveTab('info');
    } else if (activeTab === 'images') {
      setActiveTab('location');
    }
  };

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="info" className="flex items-center space-x-2">
            <Info className="h-4 w-4" />
            <span className="hidden sm:inline">Info</span>
          </TabsTrigger>
          <TabsTrigger value="location" className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span className="hidden sm:inline">Location</span>
          </TabsTrigger>
          <TabsTrigger value="images" className="flex items-center space-x-2">
            <Image className="h-4 w-4" />
            <span className="hidden sm:inline">Images</span>
          </TabsTrigger>
        </TabsList>

        <form onSubmit={form.handleSubmit(handleFormSubmit)}>
          {/* Basic Info Tab */}
          <TabsContent value="info" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                {...form.register('title')}
                placeholder="Name of the spot"
              />
              {form.formState.errors.title && (
                <p className="text-sm text-destructive">{form.formState.errors.title.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                {...form.register('description')}
                placeholder="Describe the spot (surface quality, accessibility, etc.)"
                rows={4}
              />
              {form.formState.errors.description && (
                <p className="text-sm text-destructive">{form.formState.errors.description.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select
                value={form.watch('categoryId')}
                onValueChange={(value) => form.setValue('categoryId', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {isCategoriesLoading ? (
                    <div className="flex items-center justify-center p-2">
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Loading...
                    </div>
                  ) : categories?.length ? (
                    categories.map((category: Category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))
                  ) : (
                    <div className="p-2 text-sm text-muted-foreground">No categories found</div>
                  )}
                </SelectContent>
              </Select>
              {form.formState.errors.categoryId && (
                <p className="text-sm text-destructive">{form.formState.errors.categoryId.message}</p>
              )}
            </div>

            <div className="flex justify-end mt-6">
              <Button type="button" onClick={goToNextTab}>
                Next
              </Button>
            </div>
          </TabsContent>

          {/* Location Tab */}
          <TabsContent value="location" className="space-y-4 mt-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground mb-4">
                  Place a pin on the map to set the location or manually enter coordinates.
                </div>
                
                <div className="h-[300px] md:h-[400px] mb-4 rounded-md overflow-hidden">
                  <MapView 
                    onMapClick={handleMapClick}
                    showControls={false}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor="latitude">Latitude *</Label>
                    <Input
                      id="latitude"
                      type="number"
                      step="any"
                      {...form.register('latitude', { valueAsNumber: true })}
                    />
                    {form.formState.errors.latitude && (
                      <p className="text-sm text-destructive">{form.formState.errors.latitude.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="longitude">Longitude *</Label>
                    <Input
                      id="longitude"
                      type="number"
                      step="any"
                      {...form.register('longitude', { valueAsNumber: true })}
                    />
                    {form.formState.errors.longitude && (
                      <p className="text-sm text-destructive">{form.formState.errors.longitude.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    {...form.register('address')}
                    placeholder="Street address (optional)"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      {...form.register('city')}
                      placeholder="City (optional)"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      {...form.register('country')}
                      placeholder="Country (optional)"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between mt-6">
              <Button type="button" variant="outline" onClick={goToPrevTab}>
                Back
              </Button>
              <Button type="button" onClick={goToNextTab}>
                Next
              </Button>
            </div>
          </TabsContent>

          {/* Images Tab */}
          <TabsContent value="images" className="space-y-4 mt-4">
            <SpotImageUpload 
              existingImages={images}
              onImagesChange={setImages}
              onFilesChange={handleFileChange}
              maxFiles={MAX_UPLOAD_FILES}
              acceptedFileTypes={ALLOWED_FILE_TYPES}
            />

            <div className="flex justify-between mt-6">
              <Button type="button" variant="outline" onClick={goToPrevTab}>
                Back
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting || isUploading}
              >
                {isSubmitting || isUploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {isUploading ? 'Uploading...' : 'Saving...'}
                  </>
                ) : (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    {initialData?.id ? 'Update Spot' : 'Create Spot'}
                  </>
                )}
              </Button>
            </div>
          </TabsContent>
        </form>
      </Tabs>
    </div>
  );
};

export default SpotForm;
