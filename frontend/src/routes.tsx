import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { useAuthStore } from '@/store/auth';
import Loading from '@/components/common/Loading';

// Lazy-loaded pages
const HomePage = lazy(() => import('@/pages/HomePage'));
const MapPage = lazy(() => import('@/pages/map/MapPage'));
const SpotDetailPage = lazy(() => import('@/pages/spots/SpotDetailPage'));
const AddSpotPage = lazy(() => import('@/pages/spots/AddSpotPage'));
const EditSpotPage = lazy(() => import('@/pages/spots/EditSpotPage'));
const LoginPage = lazy(() => import('@/pages/auth/LoginPage'));
const VerifyPage = lazy(() => import('@/pages/auth/VerifyPage'));
const ProfilePage = lazy(() => import('@/pages/profile/ProfilePage'));
const EditProfilePage = lazy(() => import('@/pages/profile/EditProfilePage'));
const CollectionsPage = lazy(() => import('@/pages/collections/CollectionsPage'));
const CollectionDetailPage = lazy(() => import('@/pages/collections/CollectionDetailPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

// Protected route wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify" element={<VerifyPage />} />
        
        {/* Routes with main layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="map" element={<MapPage />} />
          <Route path="spots/:spotId" element={<SpotDetailPage />} />
          
          {/* Protected routes */}
          <Route path="spots/add" element={
            <ProtectedRoute>
              <AddSpotPage />
            </ProtectedRoute>
          } />
          <Route path="spots/:spotId/edit" element={
            <ProtectedRoute>
              <EditSpotPage />
            </ProtectedRoute>
          } />
          <Route path="profile" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />
          <Route path="profile/edit" element={
            <ProtectedRoute>
              <EditProfilePage />
            </ProtectedRoute>
          } />
          <Route path="collections" element={
            <ProtectedRoute>
              <CollectionsPage />
            </ProtectedRoute>
          } />
          <Route path="collections/:collectionId" element={
            <ProtectedRoute>
              <CollectionDetailPage />
            </ProtectedRoute>
          } />
        </Route>
        
        {/* Catch-all route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
