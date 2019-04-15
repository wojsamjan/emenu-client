import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class SortMenus extends Component {
  renderHeading = (sortBy, text) => {
    const { sortMenus } = this.props;
    return (
      <h2 className="btn" style={sortMenusStyle} onClick={() => sortMenus(sortBy)}>
        {text}
      </h2>
    );
  }

  render() {
    return (
      <div className="sort-container">
        <h2 style={titleStyle}>Sortowanie</h2>
        { this.renderHeading('id', 'domyślne') }
        { this.renderHeading('name', 'po nazwie') }
        { this.renderHeading('meals', 'po liczbie dań') }
      </div>
    )
  }
}

// PropTypes
SortMenus.propTypes = {
  sortMenus: PropTypes.func.isRequired
}

const titleStyle = {
  background: '#555',
  color: '#fff',
  padding: '7px 20px',
  textAlign: 'center',
}

const sortMenusStyle = {
  // flex: '1',
  textAlign: 'center'
}

export default SortMenus
