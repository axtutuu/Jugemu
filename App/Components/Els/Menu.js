import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

export default class Menu extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <TouchableHighlight style={styles.box}>
          <Image source={require('../../Images/home.png')} style={styles.img}/>
        </TouchableHighlight>
        <TouchableHighlight style={styles.box}>
          <Image source={require('../../Images/add.png')} style={styles.img}/>
        </TouchableHighlight>
        <TouchableHighlight style={styles.box}>
          <Image source={require('../../Images/mypage.png')} style={styles.img}/>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position:    'absolute',
    bottom:      0,
    left:        0,
    right:       0, 
    borderTopColor: '#ccc',
    borderTopWidth: 0.5,
    backgroundColor: '#EFEFF2',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  box: {
    left:           0,
    height:         75,
    width:          50,
    marginLeft:     30,
    marginRight:    30
  },
  img: {
    width: 50,
    height: 50,
    marginTop: 15, // TODO: transform or something
    justifyContent: 'center'
  }
});
