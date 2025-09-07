import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { usersApi } from '@/api';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAuthStore } from '@/store/auth';
import { Collection, CreateCollectionRequest } from '@/types/collections';
import Loading from '@/components/common/Loading';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import {
  FolderHeart,
  Plus,
  Lock,
  Unlock,
  Pencil,
  Trash2,
  Loader2
} from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { formatDate } from '@/lib/utils';

const CollectionsPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { isAuthenticated } = useAuthStore();
  
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);
  
  const [newCollection, setNewCollection] = useState<CreateCollectionRequest>({
    name: '',
    description: '',
    isPublic: true,
  });
  
  // Redirect if not authenticated
  if (!isAuthenticated) {
    navigate('/login', { 
      replace: true,
      state: { from: '/collections' }
    });
    return null;
  }
  
  // Fetch user's collections
  const { data: collections, isLoading } = useQuery({
    queryKey: ['user-collections'],
    queryFn: usersApi.getUserCollections,
    enabled: isAuthenticated,
  });
  
  // Create collection mutation
  const createCollectionMutation = useMutation({
    mutationFn: usersApi.createCollection,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-collections'] });
      setIsCreateDialogOpen(false);
      setNewCollection({
        name: '',
        description: '',
        isPublic: true,
      });
      toast({
        title: 'Collection created',
        description: 'Your collection has been successfully created.',
      });
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to create collection',
        variant: 'destructive',
      });
    },
  });
  
  // Delete collection mutation
  const deleteCollectionMutation = useMutation({
    mutationFn: (id: string) => usersApi.deleteCollection(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-collections'] });
      setIsDeleteDialogOpen(false);
      setSelectedCollection(null);
      toast({
        title: 'Collection deleted',
        description: 'Your collection has been successfully deleted.',
      });
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to delete collection',
        variant: 'destructive',
      });
    },
  });
  
  // Handle create collection
  const handleCreateCollection = () => {
    if (!newCollection.name.trim()) {
      toast({
        title: 'Collection name required',
        description: 'Please enter a name for your collection.',
        variant: 'destructive',
      });
      return;
    }
    
    createCollectionMutation.mutate(newCollection);
  };
  
  // Handle delete collection
  const handleDeleteCollection = (collection: Collection) => {
    setSelectedCollection(collection);
    setIsDeleteDialogOpen(true);
  };
  
  // Confirm delete collection
  const confirmDeleteCollection = () => {
    if (selectedCollection) {
      deleteCollectionMutation.mutate(selectedCollection.id);
    }
  };
  
  if (isLoading) {
    return <Loading text="Loading collections..." />;
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Your Collections</h1>
          <p className="text-muted-foreground mt-2">
            Organize your favorite spots into collections
          </p>
        </div>
        
        <Button onClick={() => setIsCreateDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Create Collection
        </Button>
      </div>
      
      {collections?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <Card key={collection.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 bg-muted relative">
                {collection.coverImage ? (
                  <img 
                    src={collection.coverImage} 
                    alt={collection.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FolderHeart className="h-16 w-16 text-muted-foreground" />
                  </div>
                )}
                
                <div className="absolute top-3 right-3 flex space-x-2">
                  {collection.isPublic ? (
                    <div className="bg-primary/10 text-primary p-1.5 rounded-full" title="Public collection">
                      <Unlock className="h-4 w-4" />
                    </div>
                  ) : (
                    <div className="bg-secondary p-1.5 rounded-full" title="Private collection">
                      <Lock className="h-4 w-4" />
                    </div>
                  )}
                </div>
                
                <div className="absolute bottom-3 right-3 flex space-x-2">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-sm"
                    onClick={() => navigate(`/collections/${collection.id}/edit`)}
                  >
                    <Pencil className="h-3.5 w-3.5" />
                  </Button>
                  
                  <Button
                    variant="destructive"
                    size="icon"
                    className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-sm"
                    onClick={() => handleDeleteCollection(collection)}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
              
              <Link to={`/collections/${collection.id}`}>
                <CardContent className="p-4 cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold truncate">{collection.name}</h3>
                      {collection.description && (
                        <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                          {collection.description}
                        </p>
                      )}
                    </div>
                    <div className="bg-muted text-muted-foreground text-sm px-2 py-1 rounded-md">
                      {collection._count.spots} spots
                    </div>
                  </div>
                  
                  <div className="text-xs text-muted-foreground mt-2">
                    Created {formatDate(collection.createdAt)}
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <FolderHeart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h2 className="text-xl font-semibold mb-2">No collections yet</h2>
          <p className="text-muted-foreground mb-6">
            Create your first collection to organize your favorite spots
          </p>
          <Button onClick={() => setIsCreateDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Create Collection
          </Button>
        </div>
      )}
      
      {/* Create Collection Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Collection</DialogTitle>
            <DialogDescription>
              Group your favorite spots into a collection
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                placeholder="My Favorite Spots"
                value={newCollection.name}
                onChange={(e) => setNewCollection({ ...newCollection, name: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="A collection of my favorite spots..."
                value={newCollection.description || ''}
                onChange={(e) => setNewCollection({ ...newCollection, description: e.target.value })}
                rows={3}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                id="isPublic"
                checked={newCollection.isPublic}
                onCheckedChange={(checked) => setNewCollection({ ...newCollection, isPublic: checked })}
              />
              <Label htmlFor="isPublic">Public collection</Label>
            </div>
          </div>
          
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsCreateDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleCreateCollection}
              disabled={createCollectionMutation.isPending}
            >
              {createCollectionMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                'Create Collection'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Collection</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this collection? This action cannot be undone.
              The spots will not be deleted, only the collection.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDeleteCollection}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              disabled={deleteCollectionMutation.isPending}
            >
              {deleteCollectionMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                'Delete'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CollectionsPage;
