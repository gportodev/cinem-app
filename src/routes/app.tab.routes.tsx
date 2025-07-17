import React, { JSX } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Favorites } from '@/screens/Favorites';
import { Home } from '@/screens/Home';
import { colors } from '@/styles/colors';
import { Text } from 'react-native';
import { fontFamily } from '@/styles/fonts';
import { HeartOutlinedIcon, HomeIcon } from '@/assets/icons/Loader';

const Tab = createBottomTabNavigator();

function AppTabRoutes(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.red,
        tabBarInactiveTintColor: colors.mutedSlate,
        tabBarStyle: {
          backgroundColor: colors.slate,
          borderTopWidth: 0,
          height: 64,
        },
        tabBarHideOnKeyboard: true,
        tabBarLabel: ({ children, color, focused }) => (
          <Text
            style={{
              color,
              fontFamily: focused ? fontFamily.bold : fontFamily.regular,
            }}
          >
            {children}
          </Text>
        ),
      }}
    >
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <HomeIcon width={size} height={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favorites}
        options={{
          tabBarIcon: ({ size, color }) => (
            <HeartOutlinedIcon width={size} height={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export { AppTabRoutes };
