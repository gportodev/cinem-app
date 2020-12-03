import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Buscar from './pages/Buscar';
import Favoritos from './pages/Favoritos';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function Home() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Buscar" component={Buscar} />
            <Tab.Screen name="Favoritos" component={Favoritos} />
        </Tab.Navigator>
    );
}

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
