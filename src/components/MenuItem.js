import React, { Component } from 'react'

export class MenuItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.menu.name}</p>
      </div>
    )
  }
}

export default MenuItem
