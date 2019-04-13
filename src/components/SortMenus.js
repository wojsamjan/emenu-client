import React, { Component } from 'react'


export class SortMenus extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <h2 
          className="btn" 
          style={{flex: '1'}}
          onClick={() => this.props.sortMenus('name')}>Sortuj Nazwa
        </h2>
        <h2 
          className="btn" 
          style={{flex: '1'}}
          onClick={() => this.props.sortMenus('meals')}>Sortuj liczba dań
        </h2>
      </div>
    )
  }
}

export default SortMenus
