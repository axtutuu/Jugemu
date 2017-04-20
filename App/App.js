import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import Top   from './Components/Views/Top';
import About from './Components/Views/About';

export default class App extends React.Component {
  render() {
    return <Router>
      <Scene key="root">
        <Scene key="login" initial component={Top}/>
        <Scene key="about" component={About}/>
      </Scene>
    </Router>
  }
}
