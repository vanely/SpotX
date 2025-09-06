import React from 'react';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, MapPin, User, Sun, Moon, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store/auth';
import { useUIStore } from '@/store/ui';
import { cn } from '@/lib/utils';

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const { isMobileMenuOpen, setMobileMenuOpen, theme, setTheme } = useUIStore();
  const [isMounted, setIsMounted] = useState(false);

  // Handle theme toggle
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Hydration fix
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-200',
        {
          'bg-background/80 backdrop-blur-md shadow-sm': isScrolled,
          'bg-background': !isScrolled || isMobileMenuOpen,
        }
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SpotX</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/map"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Explore Map
            </Link>
            <Link
              to="/spots/add"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Add Spot
            </Link>
            <Link
              to="/collections"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Collections
            </Link>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            {isMounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            )}

            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile">
                  <Button variant="ghost" size="sm" className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    {user?.displayName || user?.username || 'Profile'}
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={logout}
                  aria-label="Log out"
                >
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button variant="default" size="sm">
                  Sign In
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-4 px-4 pb-6 pt-2">
            <Link
              to="/map"
              className="block py-2 text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Explore Map
            </Link>
            <Link
              to="/spots/add"
              className="block py-2 text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Add Spot
            </Link>
            <Link
              to="/collections"
              className="block py-2 text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Collections
            </Link>

            <hr className="border-muted" />

            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Theme</span>
              {isMounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              )}
            </div>

            {isAuthenticated ? (
              <div className="space-y-4">
                <Link
                  to="/profile"
                  className="block py-2 text-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Profile
                </Link>
                <Button
                  variant="destructive"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                >
                  Log Out
                </Button>
              </div>
            ) : (
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="default" className="w-full">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
