import React from 'react';

import { Link } from 'react-router-dom';
import { MapPin, Github, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted py-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/" className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold">SpotX</span>
            </Link>
          </div>
          
          <div className="text-center md:text-right text-sm text-muted-foreground">
            <div className="flex items-center justify-center md:justify-end space-x-4 mb-2">
              <a 
                href="https://github.com/spotx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
            
            <p className="flex items-center justify-center md:justify-end">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for the community
            </p>
            <p>&copy; {new Date().getFullYear()} SpotX. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
