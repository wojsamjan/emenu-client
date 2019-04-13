import React, { Component } from 'react'


export class Pagination extends Component {
  render() {
    const { currentPage, lastPage, prevPage, nextPage } = this.props;

    return (
      <div style={{ display: 'flex' }}>
        <ul>
          { 
            currentPage > 1 ? 
            <li 
              className="btn"
              style={{flex: '1'}}
              key='prev' 
              onClick={prevPage}>Prev
            </li> 
            : 
            '' 
          }
          <li 
            className="btn"
            style={{flex: '1'}}
            key='current'>{ currentPage }
          </li>
          { 
            currentPage < lastPage ? 
            <li 
              className="btn"
              style={{flex: '1'}}
              key='next' 
              onClick={nextPage}>Next
            </li> 
            : 
            '' 
          }
        </ul>
      </div>
    )
  }
}

export default Pagination
