import React, { Component } from 'react'

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

export default Meals
