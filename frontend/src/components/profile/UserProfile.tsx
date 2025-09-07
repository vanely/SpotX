import React from 'react';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { User } from '@/types/auth';
import { spotsApi, usersApi } from '@/api';
import { useAuthStore } from '@/store/auth';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  MapPin, 
  Calendar, 
  Edit, 
  Grid3X3, 
  Map, 
  Settings, 
  ThumbsUp, 
  MessageSquare, 
  FolderHeart 
} from 'lucide-react';
import { SpotCard } from '@/components/spots';
import { Collection } from '@/types/collections';
import { formatDate } from '@/lib/utils';

interface UserProfileProps {
  user: User;
  isCurrentUser?: boolean;
}

const UserProfile = ({ user, isCurrentUser = false }: UserProfileProps) => {
  const [activeTab, setActiveTab] = useState('spots');
  const { isAuthenticated } = useAuthStore();

  // Fetch user's spots
  const { data: spots, isLoading: isSpotsLoading } = useQuery({
    queryKey: ['user-spots', user.id],
    queryFn: () => spotsApi.searchSpots({ 
      userId: user.id, 
      limit: 20,
      sortBy: 'newest',
    }),
  });

  // Fetch user's collections (only public ones if not current user)
  const { data: collections, isLoading: isCollectionsLoading } = useQuery({
    queryKey: ['user-collections', user.id, isCurrentUser],
    queryFn: () => isCurrentUser 
      ? usersApi.getUserCollections() 
      : usersApi.getUserPublicCollections(user.id),
  });

  // Get user initials for avatar fallback
  const getInitials = () => {
    const name = user.displayName || user.username || user.email;
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <Avatar className="h-24 w-24 border-2 border-border">
          <AvatarImage src={user.avatar || undefined} alt={user.displayName || user.username} />
          <AvatarFallback className="text-xl">{getInitials()}</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <h1 className="text-2xl font-bold">
            {user.displayName || user.username || user.email}
          </h1>
          
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              Joined {formatDate(user.createdAt)}
            </div>
            <div className="flex items-center">
              <MapPin className="mr-1 h-4 w-4" />
              {spots?.total || 0} spots added
            </div>
            <div className="flex items-center">
              <ThumbsUp className="mr-1 h-4 w-4" />
              {user.reputation} reputation
            </div>
          </div>

          {user.bio && (
            <p className="mt-4 text-muted-foreground">
              {user.bio}
            </p>
          )}

          {isCurrentUser && (
            <div className="mt-4">
              <Link to="/profile/edit">
                <Button variant="outline" size="sm" className="gap-1">
                  <Edit className="h-4 w-4" />
                  Edit Profile
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Tabs for different sections */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="spots" className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>Spots</span>
          </TabsTrigger>
          <TabsTrigger value="collections" className="flex items-center gap-1">
            <FolderHeart className="h-4 w-4" />
            <span>Collections</span>
          </TabsTrigger>
          {isCurrentUser && (
            <TabsTrigger value="settings" className="flex items-center gap-1">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </TabsTrigger>
          )}
          {!isCurrentUser && (
            <TabsTrigger value="activity" className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              <span>Activity</span>
            </TabsTrigger>
          )}
        </TabsList>

        {/* Spots Tab */}
        <TabsContent value="spots" className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Added Spots</h2>
          
          {isSpotsLoading ? (
            <div className="text-center py-12 text-muted-foreground">
              Loading spots...
            </div>
          ) : spots?.items.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {spots.items.map(spot => (
                <SpotCard
                  key={spot.id}
                  spot={spot}
                  onClick={() => {}}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Grid3X3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No spots yet</h3>
              <p className="text-muted-foreground">
                {isCurrentUser
                  ? "You haven't added any spots yet."
                  : "This user hasn't added any spots yet."}
              </p>
              {isCurrentUser && (
                <Link to="/spots/add" className="mt-4 inline-block">
                  <Button>
                    <MapPin className="mr-2 h-4 w-4" />
                    Add a Spot
                  </Button>
                </Link>
              )}
            </div>
          )}
        </TabsContent>

        {/* Collections Tab */}
        <TabsContent value="collections" className="mt-6">
          <h2 className="text-xl font-semibold mb-4">
            {isCurrentUser ? 'Your Collections' : 'Public Collections'}
          </h2>
          
          {isCollectionsLoading ? (
            <div className="text-center py-12 text-muted-foreground">
              Loading collections...
            </div>
          ) : collections?.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {collections.map((collection: Collection) => (
                <Link 
                  key={collection.id} 
                  to={`/collections/${collection.id}`}
                >
                  <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
                    <div className="h-36 bg-muted rounded-t-lg relative">
                      {collection.coverImage ? (
                        <img 
                          src={collection.coverImage} 
                          alt={collection.name} 
                          className="w-full h-full object-cover rounded-t-lg"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FolderHeart className="h-10 w-10 text-muted-foreground" />
                        </div>
                      )}
                      <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-md">
                        {collection._count.spots} spots
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold truncate">{collection.name}</h3>
                      {collection.description && (
                        <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                          {collection.description}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FolderHeart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No collections yet</h3>
              <p className="text-muted-foreground">
                {isCurrentUser
                  ? "You haven't created any collections yet."
                  : "This user hasn't created any public collections yet."}
              </p>
              {isCurrentUser && (
                <Link to="/collections" className="mt-4 inline-block">
                  <Button>
                    <FolderHeart className="mr-2 h-4 w-4" />
                    Create Collection
                  </Button>
                </Link>
              )}
            </div>
          )}
        </TabsContent>

        {/* Settings Tab (only for current user) */}
        {isCurrentUser && (
          <TabsContent value="settings" className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-medium">Email Address</h3>
                  <p className="text-muted-foreground">{user.email}</p>
                </div>
                
                <div>
                  <h3 className="font-medium">Profile Visibility</h3>
                  <p className="text-muted-foreground">Your profile is visible to everyone.</p>
                </div>
                
                <div className="pt-2">
                  <Link to="/profile/edit">
                    <Button>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Profile
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}

        {/* Activity Tab (only for other users) */}
        {!isCurrentUser && (
          <TabsContent value="activity" className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="text-center py-12">
              <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">Activity feed coming soon</h3>
              <p className="text-muted-foreground">
                This feature is currently under development.
              </p>
            </div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};

export default UserProfile;
