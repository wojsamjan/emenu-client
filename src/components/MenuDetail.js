import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Meals from './Meals';
import NotFound from './pages/NotFound';


export class MenuDetail extends Component {
  state = {
    menu: null
  }

  // this.props.history.push('/menus')

  componentDidMount () {
    const { id } = this.props.match.params;

    // axios.get(`http://127.0.0.1:8000/api/menu/menus/${id}/?format=json`)
    axios.get(`https://connectis-server.herokuapp.com/api/menu/menus/${id}/?format=json`)
      .then(res => this.setState({ menu: res.data }))
      .catch(err => this.setState({ menu: 404 }));
  }

  render() {
    const { menu } = this.state;

    return (
      <div>
        { 
          menu ? 
            menu !== 404 ?
              <React.Fragment>
                <div style={ menuDetailStyle }>
                  <h2>{ menu.name }</h2>
                  <p>{ menu.description }</p>
                </div>
                <Meals meals={menu.meals.sort((a, b) => a.id - b.id)} />
                <Link className='btn' to='/menus'>POWRÓT</Link>
              </React.Fragment>
            : <NotFound />
          : <h2 style={ menuDetailStyle }>Loading...</h2> 
        }
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
