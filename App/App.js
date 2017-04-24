import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import Top   from './Components/Views/Top';
import Settings from './Components/Views/Settings';

export default class App extends React.Component {
  render() {
    return <Router>
      <Scene key="root">
        <Scene key="top" initial component={Top}/>
        <Scene key="settings" component={Settings}/>
      </Scene>
    </Router>
  }
}
