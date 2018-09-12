import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';

import ProfileScreen from '../screens/ProfileScreen';
import DashboardScreen from '../screens/DashboardScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import IconV2 from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomNavBar = createBottomTabNavigator({
  dashboard: {
    screen: DashboardScreen,
    navigationOptions: {
      tabBarLabel: "Dashboard",
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-home" color={tintColor} size={24} />
      )
    }
  },
  profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: ({tintColor}) => (
        <IconV2 name="settings" color={tintColor} size={24} />
      )
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey'
  }
});

export default BottomNavBar;