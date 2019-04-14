import React, { Component } from 'react'


export class SortMenus extends Component {
  renderHeading = (sortBy, text) => {
    const { sortMenus } = this.props;
    return (
      <h2 className="btn" style={{flex: '1'}} onClick={() => sortMenus(sortBy)}>{text}</h2>
    );
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        { this.renderHeading('name', 'Sortuj Nazwa') }
        { this.renderHeading('meals', 'Sortuj Liczba Dań') }
      </div>
    )
  }
}

export default SortMenus
