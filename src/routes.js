import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons';

import SearchMovie from './pages/SearchMovie';
import FavoriteMovie from './pages/FavoriteMovie';

import colors from './styles/colors';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function Home() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: colors.comp_tab_view,
                inactiveTintColor: colors.comp_back_two,
                style: {
                    backgroundColor: colors.comp_back_one,
                    borderTopWidth: 0,
                },
                tabStyle: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    fontSize: 20,
                    padding: 12,
                },
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    if (route.name === 'Buscar') {
                        return (
                            <Feather name="search" size={20} color={color} />
                        );
                    }
                    if (route.name === 'Favoritos') {
                        return <Feather name="star" size={20} color={color} />;
                    }
                },
            })}
        >
            <Tab.Screen name="Buscar" component={SearchMovie} />
            <Tab.Screen name="Favoritos" component={FavoriteMovie} />
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
