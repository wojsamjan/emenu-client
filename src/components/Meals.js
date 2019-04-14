import React, { Component } from 'react'
import PropTypes from 'prop-types';

import MealItem from './MealItem';


export class Meals extends Component {
  render() {
    return (
      <ul style={{ listStyleType: "none" }}>
        {this.props.meals.map(meal => <MealItem key={meal.id} meal={meal} />)}
      </ul>
    )
  }
}

// PropTypes
Meals.propTypes = {
  meals: PropTypes.array.isRequired
}

export default Meals
