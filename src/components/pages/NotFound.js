import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export class NotFound extends Component {
  render() {
    return (
      <div style={notFoundStyle}>
        <div style={{ fontSize: '3rem' }}>
          <h2>404</h2>
          <p>Not Found</p>
          <Link className="btn-home" style={{ fontSize: '1.5rem' }} to='/menus'>HOME</Link>
        </div>
      </div>
    )
  }
}

const notFoundStyle = {
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#333',
  color: '#fff',
  // Header is 2.8rem, 2x 10px padding
  height: 'calc(100vh - 20px - 2.8rem)',
}

export default NotFound
