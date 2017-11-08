import React, { Component } from 'react';
import { Text } from 'react-native';
import Home from './src/Home';
import Chat from './src/Chat';
import {
  Router,
  Scene,
} from 'react-native-router-flux';

import {
  Platform
} from 'react-native';

class App extends Component {
  render() {
    return (
      <Router>
        <Scene key='root' style={{paddingTop:64}}>
        <Scene key='home'component={Home} title='Home'/>
        <Scene key='chat'component={Chat} title='Chat'/>
        </Scene>
      </Router>
    );
  }
}

export default App;
