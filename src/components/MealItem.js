import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class MealItem extends Component {
  renderVeganInfo = (isVegan) => {
    if (isVegan) return <p style={{ fontWeight: "bold" }}>*[danie wegańskie]</p>
  }

  render() {
    const { id, name, description, price, time_minutes, is_vegan } = this.props.meal;
    return (
      <li style={ mealItemStyle }>
        <h3>{ name }</h3>
        { this.renderVeganInfo(is_vegan) }
        <p>ID: { id } | { description } | { price }zł | { time_minutes }min</p>
      </li>
    )
  }
}

// PropTypes
MealItem.propTypes = {
  meal: PropTypes.object.isRequired
}

const mealItemStyle = {
  background: '#f4f4f4',
  padding: '10px',
  borderBottom: '1px #ccc dotted'
}

export default MealItem
