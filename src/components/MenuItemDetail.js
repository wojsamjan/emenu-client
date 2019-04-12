import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export class MenuItemDetail extends Component {
  state = {
    menu: null
  }

  componentDidMount () {
    const { id } = this.props.match.params;
    console.log(`MenuItemDetail: ${id}`);
  }


  render() {
    return (
      <div>
        <Link to='/menus'>BACK</Link>
        <h1>
          Detail View
        </h1>
      </div>
    )
  }
}

export default MenuItemDetail
