import React, { Component } from 'react'


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
          { currentPage > 1 ? this.renderListItem('prev', prevPage, 'Prev') : '' }
          { this.renderListItem('current', null, currentPage) }
          { currentPage < lastPage ? this.renderListItem('next', nextPage, 'Next') : ''}
        </ul>
      </div>
    )
  }
}

export default Pagination
