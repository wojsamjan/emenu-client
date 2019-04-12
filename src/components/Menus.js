import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuItem from './MenuItem';


class Menus extends Component {
  render() {
    return this.props.menus.map(menu => (
      <MenuItem key={menu.id} menu={menu} />
    ));
  }
}

// PropTypes
Menus.propTypes = {
  menus: PropTypes.array.isRequired
}

export default Menus;
