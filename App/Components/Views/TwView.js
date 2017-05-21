import React from 'react';
import Menu from '../Els/Menu';
import { connect } from 'react-redux'
import * as actions from '../../Actions';
import {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TwClient from '../../Utils/TwClient';
import Article from '../Els/Article';

class TwView extends React.Component {
  constructor(props) {
    super(props);
    this.tw = new TwClient();
    this.tw.fetch()
      .then((res) => {
        props.setTw(res);
      });
  }

  render() {
    const items = this.props.tw.map((v,i)=>{
      return <Article key={i} value={v} />
    });
    console.log(items);

    return(
      <View style={styles.container}>
        <ScrollView>
          {items}
        </ScrollView>
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


function mapStateToProps(state) {
  return {
    tw: state.tw.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTw: (data) => dispatch(actions.setTw(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TwView);
