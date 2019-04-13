import axios from 'axios';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Pagination from './components/Pagination';
import Menus from './components/Menus';
import SortMenus from './components/SortMenus';
import MenuItemDetail from './components/MenuItemDetail';

import './App.css';


class App extends Component {
  state = {
    menus: [],
    sortedBy: 'id',
    asc: true,
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/menu/menus/?format=json')
      .then(res => this.setState({ menus: res.data
        .filter(m => m.meals.length !== 0)
        .sort((a, b) => a.id - b.id) }));
  }

  sortByName = (p) => {
    this.setState({
      menus: !this.state.asc ? 
      this.state.menus.sort((a, b) => a.name > b.name ? 1 : -1) : 
      this.state.menus.sort((a, b) => b.name > a.name ? 1 : -1)
    })
  }

  sortByMeals = (p) => {    
    this.setState({
      menus: !this.state.asc ? 
      this.state.menus.sort((a, b) => a.meals.length - b.meals.length) : this.state.menus.sort((a, b) => b.meals.length - a.meals.length)
    })
  }

  sortAsc = (p) => {
    const { menus } = this.state;
    if (p === 'name')
      this.setState({menus: menus.sort((a, b) => a.name > b.name ? 1 : -1)})
    else if (p === 'meals')
      this.setState({menus: menus.sort((a, b) => a.meals.length - b.meals.length)})
  }

  sortMenus = (p) => {
    if (p !== this.state.sortedBy) 
    {
      this.sortAsc(p)
      this.changeSortedBy(p)
      this.setState({asc: true})
    }
    else 
    {
      if (p === 'name') this.sortByName(p)
      else if (p === 'meals') this.sortByMeals(p)
      this.toggleOrder(p)
    }
  }

  toggleOrder = (p) => {
    this.setState({asc: !this.state.asc})
  }

  changeSortedBy = (p) => {
    this.setState({sortedBy: p})
  }

  render() {
    const { menus } = this.state;

    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/menus/" render={props => (
              <React.Fragment>
                <SortMenus sortMenus={this.sortMenus} />
                <Menus menus={menus} />
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
