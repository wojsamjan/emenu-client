import axios from 'axios';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Menus from './components/Menus';
import MenuItemDetail from './components/MenuItemDetail';

import './App.css';


class App extends Component {
  state = {
    menus: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/menu/menus/?format=json')
      .then(res => this.setState({ menus: res.data.filter(m => m.meals.length !== 0) }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/menus/" render={props => (
              <React.Fragment>
                <Menus menus={this.state.menus} />
              </React.Fragment>
            )} />
            <Route exact path="/menus/:id" component={MenuItemDetail} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
