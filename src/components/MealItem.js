import React, { Component } from 'react'


export class MealItem extends Component {
  render() {
    const { id, name, description } = this.props.meal;
    return (
      <li style={mealItemStyle}>
        <h4>{ name }</h4>
        <p>{ id } | { description }</p>
      </li>
    )
  }
}

const mealItemStyle = {
  background: '#f4f4f4',
  padding: '10px',
  borderBottom: '1px #ccc dotted',
  cursor: 'pointer'
}

export default MealItem
