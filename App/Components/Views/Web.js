import React from 'react';
import { WebView } from 'react-native';

export default class Web extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <WebView
        source={{uri: this.props.link}}
      />
    )
  }
}
