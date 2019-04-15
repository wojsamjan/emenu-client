import axios from 'axios';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { HashRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Pagination from './components/Pagination';
import Menus from './components/Menus';
import SortMenus from './components/SortMenus';
import MenuDetail from './components/MenuDetail';

import './App.css';


class App extends Component {
  state = {
    menus: [],
    sortedBy: 'id',
    asc: true,
    currentPage: 1,
    perPage: 5
  }

  componentDidMount() {
    // axios.get('http://127.0.0.1:8000/api/menu/menus/?format=json')
    axios.get('https://connectis-server.herokuapp.com/api/menu/menus/?format=json')
      .then(res => this.setState({ menus: res.data
        .filter(m => m.meals.length !== 0)
        .sort((a, b) => a.id - b.id) }));
  }

  nextPage = (e) => {
    this.setState({
      currentPage: this.state.currentPage + 1
    });
  }

  prevPage = (e) => {
    this.setState({
      currentPage: this.state.currentPage - 1
    });
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
    if (p === 'id' || p === 'name')
      this.setState({menus: menus.sort((a, b) => a[p] > b[p] ? 1 : -1)})
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
      if (p !== 'id')
      {
        if (p === 'name') this.sortByName(p)
        else if (p === 'meals') this.sortByMeals(p)
        this.toggleOrder(p)
      }
    }
  }

  toggleOrder = (p) => {
    this.setState({asc: !this.state.asc})
  }

  changeSortedBy = (p) => {
    this.setState({sortedBy: p})
  }

  render() {
    const { menus, currentPage, perPage } = this.state;

    // Displaying current menus
    const lastMenuIndex = currentPage * perPage;
    const firstMenuIndex = lastMenuIndex - perPage;
    const currentMenus = menus.slice(firstMenuIndex, lastMenuIndex);

    const lastPage = Math.ceil(menus.length / perPage);

    return (
      <Router>
      {/* <Router basename="/"> */}
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/menus/" render={props => (
              <React.Fragment>
                <SortMenus sortMenus={this.sortMenus} />
                <Menus menus={currentMenus} />
                <Pagination 
                  currentPage={currentPage}
                  lastPage={lastPage}
                  prevPage={this.prevPage}
                  nextPage={this.nextPage}
                />
              </React.Fragment>
            )} />
            <Route exact path="/menus/:id" component={MenuDetail} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
