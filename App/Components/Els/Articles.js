import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../../Actions';
import {
  ScrollView, View, Text, StyleSheet
} from 'react-native';

import HbClient from '../../Utils/HbClient';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    const hb = new HbClient();
    hb.fetch()
      .then((res) => {
        props.setArticles(res);
      });
  }

  render() {
    const items = this.props.articles.map((v, i)=>{
      return (
        <View key={i} style={styles.box}>
          <Text>{v.title}</Text>
        </View>
      )
    });
    return (
      <ScrollView>
        <View style={styles.container}>
          {items}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCC'
  },
  box: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 5,
    marginBottom: 5,
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
