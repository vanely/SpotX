import React from 'react';

import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { authApi } from '@/api';
import { useAuthStore } from '@/store/auth';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { MapPin, Loader2, CheckCircle, XCircle } from 'lucide-react';

const VerifyPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { login } = useAuthStore();
  const { toast } = useToast();
  
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying');
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const verifyToken = async () => {
      const token = searchParams.get('token');
      
      if (!token) {
        setStatus('error');
        setError('No verification token found. Please request a new login link.');
        return;
      }
      
      try {
        // Verify magic link with the backend
        const response = await authApi.verifyMagicLink({ token });
        
        // Store authentication token
        await login(response.accessToken);
        
        // Show success
        setStatus('success');
        
        toast({
          title: 'Successfully logged in',
          description: 'Welcome to SpotX!',
        });
        
        // Redirect after a short delay
        setTimeout(() => {
          // Redirect to home or the page they were trying to access
          const redirectTo = searchParams.get('redirect') || '/';
          navigate(redirectTo);
        }, 1500);
      } catch (error) {
        setStatus('error');
        setError(error instanceof Error ? error.message : 'Failed to verify magic link');
        
        toast({
          title: 'Verification failed',
          description: error instanceof Error ? error.message : 'Failed to verify magic link',
          variant: 'destructive',
        });
      }
    };
    
    verifyToken();
  }, [searchParams, login, navigate, toast]);
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-muted/30">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-2">
            <div className="flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">SpotX</span>
            </div>
          </div>
          
          <CardTitle className="text-2xl font-bold">
            {status === 'verifying' && 'Verifying your login'}
            {status === 'success' && 'Login successful'}
            {status === 'error' && 'Login failed'}
          </CardTitle>
          
          <CardDescription>
            {status === 'verifying' && 'Please wait while we verify your login link'}
            {status === 'success' && 'You are now signed in to SpotX'}
            {status === 'error' && 'There was a problem with your login link'}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex flex-col items-center justify-center py-8">
          {status === 'verifying' && (
            <div className="flex flex-col items-center space-y-4">
              <Loader2 className="h-12 w-12 text-primary animate-spin" />
              <p className="text-muted-foreground">Verifying your login link...</p>
            </div>
          )}
          
          {status === 'success' && (
            <div className="flex flex-col items-center space-y-4">
              <CheckCircle className="h-12 w-12 text-green-500" />
              <p className="text-center">
                You have successfully signed in to SpotX. Redirecting you...
              </p>
            </div>
          )}
          
          {status === 'error' && (
            <div className="flex flex-col items-center space-y-4">
              <XCircle className="h-12 w-12 text-destructive" />
              <p className="text-center text-destructive">
                {error || 'An unknown error occurred'}
              </p>
            </div>
          )}
        </CardContent>
        
        <CardFooter className="flex justify-center">
          {status === 'error' && (
            <Button onClick={() => navigate('/login')}>
              Back to Sign In
            </Button>
          )}
          
          {status === 'success' && (
            <Button onClick={() => navigate('/')}>
              Go to Home
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default VerifyPage;
