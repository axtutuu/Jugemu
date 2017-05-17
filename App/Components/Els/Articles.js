import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import * as actions from '../../Actions';
import {Actions} from 'react-native-router-flux';
import {
  ScrollView, View, Text, StyleSheet
} from 'react-native';

import HbClient from '../../Utils/HbClient';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.hb = new HbClient();
    this.hb.fetch()
      .then((res) => {
        console.log(res);
        props.setArticles(res);
      });
  }

  press() {
    console.log('press');
  }

  handleScroll(ev) {
    const height = ev.nativeEvent.contentSize.height-(ev.nativeEvent.layoutMeasurement.height+300)

    if(ev.nativeEvent.contentOffset.y>height) {
      console.log('add');
      console.log(this);
      console.log(this.props.articles.length);
      this.hb.fetch(this.props.articles.length)
        .then((res) => {
          this.props.setArticles(_.concat(this.props.articles, res));
          // props.setArticles(res);
        });
    }
  }

  render() {
    const items = this.props.articles.map((v, i)=>{
      return (
        <View key={i} style={styles.box}>
          <Text onPress={() => { Actions.web({link: v.link}); }} >{v.title}</Text>
        </View>
      )
    });
    return (
      <ScrollView onScroll={(e) => { this.handleScroll(e) }}>
        <View style={styles.container} onPress={this.press} test='test'>
          {items}
        </View>
      </ScrollView>
    )
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

function mapStateToProps(state) {
  return {
    articles: state.article.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setArticles: (data) => dispatch(actions.setArticles(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles);
