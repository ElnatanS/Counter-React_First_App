import React, { Component } from 'react'

const Navbar = (props) => {
  
    return (
    <nav className="navbar navbar-dark bg-inverted">
      <div className="container-fluid">
        <div className="navbar-header">
          <span className="badge badge-pill badge-primary">{props.totalCounter}</span>
        </div>
      </div>
    </nav>
      )
  
}

export default Navbar;