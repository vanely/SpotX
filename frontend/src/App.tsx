import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import AppRoutes from './routes';
import { useAuthStore } from './store/auth';
import { useEffect } from 'react';

function App() {
  const { checkAuth } = useAuthStore();

  // Check for existing auth token on app load
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <Router>
      <AppRoutes />
      <Toaster />
    </Router>
  );
}

export default App;
