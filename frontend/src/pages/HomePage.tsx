import React from 'react';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGeolocation } from '@/hooks';
import { Button } from '@/components/ui/button';
import { MapPin, Map } from 'lucide-react';
import { useMapStore } from '@/store/map';

const HomePage = () => {
  const navigate = useNavigate();
  const { location, loading } = useGeolocation();
  const { setUserLocation } = useMapStore();
  const [locationPermission, setLocationPermission] = useState<'granted' | 'denied' | 'unknown'>('unknown');

  useEffect(() => {
    // If we have location, update permission state
    if (location) {
      setLocationPermission('granted');
      setUserLocation(location);
    }

    // Check permission state
    if (navigator.permissions) {
      navigator.permissions.query({ name: 'geolocation' as PermissionName })
        .then((result) => {
          setLocationPermission(result.state as 'granted' | 'denied' | 'unknown');
        });
    }
  }, [location, setUserLocation]);

  const handleExploreMap = () => {
    navigate('/map');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: 'url(/assets/images/map-bg.jpg)' }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="bg-primary/10 p-3 rounded-full">
              <MapPin className="h-10 w-10 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Discover the Best Community Spots
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find and share amazing locations for skateboarding, parkour, rollerblading, and more activities around you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8"
              onClick={handleExploreMap}
            >
              <Map className="mr-2 h-5 w-5" />
              Explore Map
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8"
              onClick={() => navigate('/spots/add')}
            >
              Add a Spot
            </Button>
          </div>
          
          {locationPermission === 'denied' && (
            <div className="mt-6 p-3 rounded-lg bg-destructive/10 text-destructive max-w-md mx-auto">
              <p className="text-sm">
                Please enable location services to get the most out of SpotX.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Find Your Perfect Spot
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Discover Spots</h3>
              <p className="text-muted-foreground">
                Find the best spots around you for your favorite activities, rated by the community.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                  <path d="M18 8c0 2.5-2 2.5-2 5h-8c0-2.5-2-2.5-2-5 0-3 3-6 6-6s6 3 6 6z" />
                  <path d="M12 19v-3" />
                  <path d="M8 22h8" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Share Spots</h3>
              <p className="text-muted-foreground">
                Add your favorite spots to the map and help others find great places to practice.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tag & Rate</h3>
              <p className="text-muted-foreground">
                Tag spots with useful information like surface quality, crowdedness, and accessibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to explore?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our community of spot hunters and discover the best places for your favorite activities.
          </p>
          <Button
            size="lg"
            className="text-lg px-8"
            onClick={handleExploreMap}
          >
            Open Map
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
