import React, { JSX, useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';

import { MovieProvider } from '@/context';
import { Routes } from '@/routes';
import useCachedResources from '@/hooks/useCachedResources';
import * as SplashScreen from 'expo-splash-screen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ToastManager from 'toastify-react-native';

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

const queryClient = new QueryClient();

export default function App(): JSX.Element {
  const isLoading = useCachedResources();

  useEffect(() => {
    if (isLoading) {
      SplashScreen.hide();
    }
  }, [isLoading]);

  return (
    <QueryClientProvider client={queryClient}>
      <MovieProvider>
        <Routes />
        <StatusBar style="light" />
        <ToastManager />
      </MovieProvider>
    </QueryClientProvider>
  );
}
