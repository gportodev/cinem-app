
import React, { JSX } from 'react';

import { StatusBar } from 'expo-status-bar';

import { MovieProvider } from '@/context';
import { Routes } from '@/routes';


export default function App(): JSX.Element {
    return (
        <MovieProvider>
            <Routes />
            <StatusBar style="auto" />
        </MovieProvider>
    );
}
