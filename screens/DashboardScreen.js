import React, { Component } from 'react';
import { 
  View, Text
} from 'react-native';

import BasicStyles from '../styles/BasicStyles';
 
export default class DashboardScreen extends Component {

  static navigationOptions = {
    header: null
  }
  
  render() {
    return(
      <View style={BasicStyles.container}>
        <Text>DASHBOARD</Text>
      </View>
    );
  }
}