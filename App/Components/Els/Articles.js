import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../../Actions';
import { ScrollView, View, Text } from 'react-native';

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
        <View key={i}>
          <Text>{v.title}</Text>
        </View>
      )
    });
    return (
      <ScrollView>
        {items}
      </ScrollView>
    )
  }
}

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
