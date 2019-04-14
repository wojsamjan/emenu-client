import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


export class MenuItem extends Component {
  changeRoute = (id) => {
    this.props.history.push(`/menus/${id}`);
  }

  render() {
    const { id, name, description, meals } = this.props.menu;
    return (
      <div style={ menuItemStyle }  onClick={ this.changeRoute.bind(this, id) }>
        <h2>{ name }</h2>
        <p>ID: { id } | { description } | { meals.length }</p>
      </div>
    )
  }
}

// PropTypes
MenuItem.propTypes = {
  menu: PropTypes.object.isRequired
}

const menuItemStyle = {
  background: '#f4f4f4',
  padding: '10px',
  borderBottom: '1px #ccc dotted',
  cursor: 'pointer'
}

export default withRouter(MenuItem)
