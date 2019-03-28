import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Scroll from 'react-scroll'

import Logo from '../../assets/img/logo.svg'

// Apollo
import { compose, graphql } from 'react-apollo'
import { SHOW_AUTH } from '../../graphql/landing'

class Navbar extends Component {
	render() {

        const { showAuth } = this.props
        const ScrollLink = Scroll.Link

		return (
			<nav className="navbar is-primary is-transparent no-shadow" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item">
                            <img src={Logo} alt="Project Logo" width="60" height="500" />
                            <h1 className="title" style={{ color: 'white' }}>
                                Iterport
                            </h1>
                        </Link>
                    </div>

                    <div id="navbar-menu" className="navbar-menu is-static">

                        <div className="navbar-end">
                            <ScrollLink
                                to="features"
                                smooth={true}
                                offset={20}
                                duration={500}
                                className="navbar-item"
                            >
                                Features
                            </ScrollLink>
                            <ScrollLink
                                to="pricing"
                                smooth={true}
                                offset={20}
                                duration={500}
                                className="navbar-item"
                            >
                                Pricing
                            </ScrollLink>
                            <span
                                className="navbar-item modal-trigger"
                                data-modal="auth-modal"
																style={{ cursor: 'pointer' }}
                                onClick={async e => {
																	try{
																		await showAuth({ variables: { showAuth: true, type: 'login' } })
																	} catch(e) {
																		console.log(e)
																	}
																}}
                            >
                                Log in
                            </span>
                            <span
                                className="navbar-item"
                                onClick={e => {
																		showAuth({ variables: { showAuth: true, type: 'signup' } })
                                }}
                            >
                                <span className="button signup-button rounded secondary-btn raised">
                                    Sign up
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
		)
	}
}

export default compose(
    graphql(SHOW_AUTH, { name: 'showAuth' })
)(Navbar)
