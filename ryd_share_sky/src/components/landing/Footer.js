import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/img/logo.svg'

class Footer extends Component {
	render() {
		return (
			<footer className="footer footer-dark">
	            <div className="container">
	                <div className="columns">
	                    <div className="column">
	                        <div className="footer-logo">
	                            <img src={Logo} alt="footer-logo" />
	                        </div>
	                    </div>
	                    <div className="column">
	                        <div className="footer-column">
	                            <div className="footer-header">
	                                <h3>Product</h3>
	                            </div>
	                            <ul className="link-list">
	                                <li><Link to='/'>Why choose our Product ?</Link></li>
	                                <li><Link to='/'>Compare features</Link></li>
	                                <li><Link to='/'>Our Roadmap</Link></li>
	                                <li><Link to='/'>Request features</Link></li>
	                            </ul>
	                        </div>
	                    </div>
	                    <div className="column">
	                        <div className="footer-column">
	                            <div className="footer-header">
	                                <h3>Docs</h3>
	                            </div>
	                            <ul className="link-list">
	                                <li><Link to='/'>Get Started</Link></li>
	                                <li><Link to='/'>User guides</Link></li>
	                                <li><Link to='/'>Admin guide</Link></li>
	                                <li><Link to='/'>Developers</Link></li>
	                            </ul>
	                        </div>
	                    </div>
	                    <div className="column">
	                        <div className="footer-column">
	                            <div className="footer-header">
	                                <h3>Blogroll</h3>
	                            </div>
	                            <ul className="link-list">
	                                <li><Link to='/'>Latest News</Link></li>
	                                <li><Link to='/'>Tech articles</Link></li>
	                                <li><Link to='/'>Video Blog</Link></li>
	                            </ul>
	                        </div>
	                    </div>
	                    <div className="column">
	                        <div className="footer-column">
	                            <div className="footer-header">
	                                <h3>Follow Us</h3>
	                                <nav className="level is-mobile">
	                                    <div className="level-left">
	                                        <a className="level-item" href="https://github.com/#">
	                                            <span className="icon"><i className="fab fa-github-square fa-lg"></i></span>
	                                        </a>
	                                        <a className="level-item" href="https://dribbble.com/#">
	                                            <span className="icon"><i className="fab fa-dribbble-square fa-lg"></i></span>
	                                        </a>
	                                        <a className="level-item" href="https://fb.com/#">
	                                            <span className="icon"><i className="fab fa-facebook-square fa-lg"></i></span>
	                                        </a>
	                                        <a className="level-item" href="https://twitter.com/#">
	                                            <span className="icon"><i className="fab fa-twitter-square fa-lg"></i></span>
	                                        </a>
	                                       <a className="level-item" href="https://bitbucket.org/#">
	                                            <span className="icon"><i className="fab fa-bitbucket fa-lg"></i></span>
	                                        </a>
	                                    </div>
	                                </nav>
	        
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </footer>
		)
	}
}

export default Footer