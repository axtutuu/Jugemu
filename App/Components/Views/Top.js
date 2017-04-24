import React from 'react';
import Menu from '../Els/Menu';
import { TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Top extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Root </Text>
        <TouchableOpacity onPress={Actions.about}>
          <Text> About </Text>
        </TouchableOpacity>
        <Menu />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    fontSize: 32,
    color: 'rgb(95, 177, 237)',
  },
});
