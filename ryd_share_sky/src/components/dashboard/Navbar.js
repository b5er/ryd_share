import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ProfilePic from '../../assets/img/profile.png'

class Navbar extends Component {
  render() {
    return (
      <header className="hero is-light" style={{ backgroundColor: '#474F61' }}>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link to={'/dashboard'} className="navbar-item">
              <img src={ProfilePic} style={{ maxHeight: '4em' }} alt="Profile Icon" />
            </Link>
            {/*
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
            */}
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <Link to={'/'} className="navbar-item" style={{ padding: '2em', cursor: 'pointer', backgroundColor: '#e7e7e7' }}>
                <i className="fas fa-power-off fa-lg" />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Navbar
