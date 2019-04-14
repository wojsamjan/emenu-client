import React, { Component } from 'react'
import PropTypes from 'prop-types';


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
        { this.renderHeading('id', 'Sortuj domyślnie') }
        { this.renderHeading('name', 'Sortuj po nazwie') }
        { this.renderHeading('meals', 'Sortuj po liczbie dań') }
      </div>
    )
  }
}

// PropTypes
SortMenus.propTypes = {
  sortMenus: PropTypes.func.isRequired
}

export default SortMenus
