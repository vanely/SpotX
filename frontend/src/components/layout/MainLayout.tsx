import React from 'react';

import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useUIStore } from '@/store/ui';

const MainLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobileMenuOpen } = useUIStore();

  // Detect scroll for styling header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header isScrolled={isScrolled} />
      
      <main className={`flex-1 ${isMobileMenuOpen ? 'pt-0' : 'pt-16'}`}>
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
