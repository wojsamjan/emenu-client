import axios from 'axios';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Meals from './Meals';


export class MenuDetail extends Component {
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
            <div style={ menuDetailStyle }>
              <h2>{ menu.name }</h2>
              <p>{ menu.description }</p>
            </div>
            <Meals meals={menu.meals.sort((a, b) => a.id - b.id)} />
          </React.Fragment>
          : 
          <h2 style={ menuDetailStyle }>Loading...</h2> 
        }
        <Link className='btn' to='/menus'>BACK</Link>
      </div>
    )
  }
}

const menuDetailStyle = {
  background: '#ccc',
  borderBottom: '1px #4f4f4f dotted',
  textAlign: 'center',
  padding: '10px'
}

export default MenuDetail
