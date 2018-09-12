import React, { Component } from 'react';
import { 
  View, Text
} from 'react-native';

import BasicStyles from '../styles/BasicStyles';

export default class ProfileScreen extends Component {
  render() {
    return(
      <View style={BasicStyles.container}>
        <Text>SETTINGS</Text>
      </View>
    );
  }
}