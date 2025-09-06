import React from 'react';

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Home, Map } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <div className="mb-6 flex justify-center">
        <div className="bg-primary/10 p-3 rounded-full">
          <MapPin className="h-10 w-10 text-primary" />
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h1>
      
      <p className="text-xl text-muted-foreground mb-8 max-w-md">
        Oops! Looks like you've ventured into uncharted territory.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/">
          <Button variant="default" size="lg">
            <Home className="mr-2 h-5 w-5" />
            Go Home
          </Button>
        </Link>
        
        <Link to="/map">
          <Button variant="outline" size="lg">
            <Map className="mr-2 h-5 w-5" />
            Explore Map
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
