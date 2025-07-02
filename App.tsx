import React, { JSX } from 'react';

import { StatusBar } from 'expo-status-bar';

import { MovieProvider } from '@/context';
import { Routes } from '@/routes';
import useCachedResources from '@/hooks/useCachedResources';
import { SafeAreaView } from 'react-native';
import { Loader } from '@/components/Loader';

export default function App(): JSX.Element {
  const isLoading = useCachedResources();

  if (!isLoading) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Loader />
      </SafeAreaView>
    );
  }

  return (
    <MovieProvider>
      <Routes />
      <StatusBar style="auto" />
    </MovieProvider>
  );
}
