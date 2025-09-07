import React from 'react';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { categoriesApi, spotsApi } from '@/api';
import { SpotTag, Tag } from '@/types/spots';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useToast } from '@/components/ui/use-toast';
import { useAuthStore } from '@/store/auth';
import { Plus, Tag as TagIcon, X, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SpotTagsProps {
  spotId: string;
  tags: SpotTag[];
  className?: string;
  readOnly?: boolean;
}

const SpotTags = ({ spotId, tags, className, readOnly = false }: SpotTagsProps) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { isAuthenticated } = useAuthStore();
  
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  
  // Fetch all available tags
  const { data: availableTags, isLoading: isTagsLoading } = useQuery({
    queryKey: ['tags'],
    queryFn: categoriesApi.getAllTags,
    enabled: isAuthenticated && !readOnly,
  });
  
  // Add tag mutation
  const addTagMutation = useMutation({
    mutationFn: (tagId: string) => 
      spotsApi.addTagToSpot({ spotId, tagId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['spot', spotId] });
      setOpen(false);
      toast({
        title: 'Tag added',
        description: 'The tag has been added to the spot.',
      });
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to add tag',
        variant: 'destructive',
      });
    },
  });
  
  // Create tag mutation
  const createTagMutation = useMutation({
    mutationFn: (name: string) => 
      categoriesApi.createNewTag(name),
    onSuccess: (newTag) => {
      queryClient.invalidateQueries({ queryKey: ['tags'] });
      
      // Automatically add the new tag to the spot
      addTagMutation.mutate(newTag.id);
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to create tag',
        variant: 'destructive',
      });
    },
  });
  
  // Remove tag mutation
  const removeTagMutation = useMutation({
    mutationFn: (spotTagId: string) => 
      spotsApi.removeTagFromSpot(spotTagId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['spot', spotId] });
      toast({
        title: 'Tag removed',
        description: 'The tag has been removed from the spot.',
      });
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to remove tag',
        variant: 'destructive',
      });
    },
  });
  
  // Get unused tags - tags that are not already added to the spot
  const unusedTags = availableTags?.filter(
    (tag) => !tags.some((spotTag) => spotTag.tag.id === tag.id)
  ) || [];
  
  // Handle tag selection
  const handleSelectTag = (tagId: string) => {
    addTagMutation.mutate(tagId);
  };
  
  // Handle create tag
  const handleCreateTag = () => {
    if (search.trim()) {
      createTagMutation.mutate(search.trim());
    }
  };
  
  // Handle tag removal
  const handleRemoveTag = (spotTagId: string) => {
    removeTagMutation.mutate(spotTagId);
  };
  
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex flex-wrap gap-2">
        {tags.length > 0 ? (
          tags.map((spotTag) => (
            <Badge 
              key={spotTag.id} 
              variant="secondary"
              className="flex items-center gap-1 text-sm py-1 px-2"
            >
              {spotTag.tag.name}
              {!readOnly && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-4 w-4 p-0 hover:bg-transparent"
                  onClick={() => handleRemoveTag(spotTag.id)}
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
            </Badge>
          ))
        ) : (
          <div className="text-sm text-muted-foreground">No tags yet</div>
        )}
        
        {isAuthenticated && !readOnly && (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="h-7 gap-1"
              >
                <Plus className="h-3.5 w-3.5" />
                <span className="text-xs">Add Tag</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[220px] p-0" align="start">
              <Command>
                <CommandInput 
                  placeholder="Search or create tag..." 
                  value={search}
                  onValueChange={setSearch}
                />
                {isTagsLoading ? (
                  <div className="flex items-center justify-center p-4">
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    <span className="text-sm">Loading tags...</span>
                  </div>
                ) : (
                  <CommandList>
                    {search && (
                      <CommandGroup heading="Create">
                        <CommandItem
                          onSelect={handleCreateTag}
                          className="text-sm"
                        >
                          <Plus className="mr-2 h-4 w-4" />
                          Create "{search}"
                        </CommandItem>
                      </CommandGroup>
                    )}
                    <CommandGroup heading="Available Tags">
                      {unusedTags.length > 0 ? (
                        unusedTags.map((tag) => (
                          <CommandItem
                            key={tag.id}
                            onSelect={() => handleSelectTag(tag.id)}
                            className="text-sm"
                          >
                            <TagIcon className="mr-2 h-4 w-4" />
                            {tag.name}
                          </CommandItem>
                        ))
                      ) : (
                        <CommandEmpty>No tags found</CommandEmpty>
                      )}
                    </CommandGroup>
                  </CommandList>
                )}
              </Command>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
};

export default SpotTags;
