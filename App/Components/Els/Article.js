import React from 'react';
import {Actions} from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <View key={this.props.id} style={styles.box}>
        <Text> hoge </Text>
      </View>
    )
    /// <View key={this.props.id} style={styles.box}>
    ///   <Text onPress={() => { Actions.web({link: this.props.link}); }}> {this.props.title} </Text>
    /// </View>

    // <View key={i} style={styles.box}>
    //   <Text onPress={() => { Actions.web({link: this.props.link}); }}> {this.props.title} </Text>
    // </View>
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCC',
    paddingTop: 50,
    paddingBottom: 150,
  },
  box: {
    marginLeft: 15,
    marginRight: 15,
    height: 75,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5,
    paddingTop: 3,
    paddingLeft: 3,
    paddingRight: 3,
    backgroundColor: '#FFF',
    shadowColor: '#171717',
    shadowOpacity: 0.8,
    shadowOffset: {width: 2, height: 2}
  }
});
