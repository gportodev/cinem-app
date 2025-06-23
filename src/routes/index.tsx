import React, { JSX } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppTabRoutes } from './app.tab.routes';

const Stack = createNativeStackNavigator();

function Routes(): JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={AppTabRoutes} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export { Routes }
