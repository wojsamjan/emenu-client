import axios from 'axios';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Meals from './Meals';


export class MenuItemDetail extends Component {
  state = {
    menu: null
  }

  componentDidMount () {
    const { id } = this.props.match.params;

    axios.get(`http://127.0.0.1:8000/api/menu/menus/${id}/?format=json`)
      .then(res => this.setState({ menu: res.data }));
  }

  render() {
    const { menu } = this.state;

    return (
      <div>
        
        { 
          menu ? 
          <React.Fragment>
            <h2>{ menu.name }</h2>
            <p>{ menu.description }</p>
            <Meals meals={menu.meals} />
          </React.Fragment>
          : 
          <h2>Loading...</h2> 
        }
        <Link className='btn' to='/menus'>BACK</Link>
      </div>
    )
  }
}

export default MenuItemDetail
