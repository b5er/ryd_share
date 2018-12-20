import React, { Component } from 'react'

import ProfilePic from '../../assets/img/profile.png'

class Navbar extends Component {
  render() {
    return (
      <header className="hero is-light" style={{ backgroundColor: '#474F61' }}>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href={'/'}>
              <img src={ProfilePic} style={{ maxHeight: '4em' }} alt="Profile Icon" />
            </a>
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
              <div className="navbar-item" style={{ padding: '2em', cursor: 'pointer', backgroundColor: '#e7e7e7' }}>
                <i className="fas fa-power-off fa-lg" />
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Navbar
