import React, { Component } from 'react';
import Menus from './components/Menus'

import './App.css';

class App extends Component {
  state = {
    menus: [
      {
        id: 1,
        name: 'Menu 1',
        description: 'Menu 1 - description'
      },
      {
        id: 2,
        name: 'Menu 2',
        description: 'Menu 2 - description'
      },
      {
        id: 3,
        name: 'Menu 3',
        description: 'Menu 3 - description'
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Menus menus={this.state.menus} />
      </div>
    );
  }
}

export default App;
