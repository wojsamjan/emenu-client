import React, { Component } from 'react';
import MenuItem from './MenuItem';

class Menus extends Component {
  render() {
    return this.props.menus.map(menu => (
      <MenuItem menu={menu}/>
    ));
  }
}

export default Menus;
