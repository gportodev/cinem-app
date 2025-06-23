import React, { JSX } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons';
import Favoritos from '@/pages/Favoritos';
import colors from '@/styles/colors';
import { Buscar } from '@/pages/Buscar';
import { Platform } from 'react-native';


const Tab = createBottomTabNavigator();

const labelStyle = {
    fontSize: 10,
    padding: 6,
};

function AppTabRoutes(): JSX.Element {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.comp_tab_view,
                tabBarInactiveTintColor: colors.comp_back_two,
                tabBarStyle: {
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    backgroundColor: colors.comp_back_one,
                    borderTopWidth: 0,
                },
            }}
        >
            <Tab.Screen name="Buscar" component={Buscar}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="search" size={size} color={color} />
                    ),
                    tabBarLabelStyle: labelStyle,
                }}
            />
            <Tab.Screen name="Favoritos" component={Favoritos}

                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="star" size={size} color={color} />
                    ),
                    tabBarLabelStyle: labelStyle,
                }} />
        </Tab.Navigator>
    );
}



export { AppTabRoutes }
