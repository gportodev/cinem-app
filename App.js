import { StatusBar } from 'expo-status-bar';
import React from 'react';

import MovieProvider from './src/context/Movie';

import Routes from './src/routes';

export default function App() {
    return (
        <MovieProvider>
            <Routes />
            <StatusBar style="auto" />
        </MovieProvider>
    );
}
