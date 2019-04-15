import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class Pagination extends Component {
  renderListItem = (key, eventHandler, text) => {
    return (
      <li className="btn" style={{flex: '1'}} key={key} onClick={eventHandler}>{text}</li>
    );
  }
  
  render() {
    const { currentPage, lastPage, prevPage, nextPage } = this.props;

    return (
      <div style={{ display: 'flex' }}>
        <ul>
          {currentPage > 1 ? this.renderListItem('prev', prevPage, '<') : '' }
          { this.renderListItem('current', null, `${currentPage} / ${lastPage}`) }
          {currentPage < lastPage ? this.renderListItem('next', nextPage, '>') : ''}
        </ul>
      </div>
    )
  }
}

// PropTypes
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
  prevPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired
}

export default Pagination
