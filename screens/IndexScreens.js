import React from 'react';
import {
  createStackNavigator
} from 'react-navigation';

import DashboardScreen from './DashboardScreen';
import ProfileScreen from './ProfileScreen';

const IndexScreen = createStackNavigator({
  dashboard: DashboardScreen,
  profile: ProfileScreen
})

export default IndexScreen;