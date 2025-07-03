import React, { JSX } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons';
import { Favorites } from '@/pages/Favorites';
// import colors from '@/styles/colors';
import { Home } from '@/pages/Home';
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
        // tabBarActiveTintColor: colors.comp_tab_view,
        // tabBarInactiveTintColor: colors.comp_back_two,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          // backgroundColor: colors.comp_back_one,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="search" size={size} color={color} />
          ),
          tabBarLabelStyle: labelStyle,
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favorites}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="star" size={size} color={color} />
          ),
          tabBarLabelStyle: labelStyle,
        }}
      />
    </Tab.Navigator>
  );
}

export { AppTabRoutes };
