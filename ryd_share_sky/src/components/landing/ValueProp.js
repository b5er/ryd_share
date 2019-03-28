import React, { Component } from 'react'

// Apollo
import { compose, graphql } from 'react-apollo'
import { SHOW_AUTH } from '../../graphql/landing'

import Scroll from 'react-scroll'


class ValueProp extends Component {

	render() {

		const { showAuth } = this.props
		const ScrollLink = Scroll.Link

		return (
			<div>
				<section id="features" className="section section-feature-grey is-medium">
		            <div className="container">
		                <div className="title-wrapper has-text-centered">
		                    <h2 className="title is-2">Great Power Comes </h2>
		                    <h3 className="subtitle is-5 is-muted">With great Responsibility</h3>
		                    <div className="divider is-centered"></div>
		                </div>

		                <div className="content-wrapper">
		                    <div className="columns">
		                        <div className="column is-one-third">
		                            <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1" data-animation="fadeInLeft">
		                                <div className="card-title">
		                                    <h4>Ride on demand</h4>
		                                </div>
		                                <div className="card-icon" style={{margin: "2.5em 0"}}>
		                                    <i className="fas fa-car fa-4x"></i>
		                                </div>
		                                <div className="card-text">
		                                    <p>Choose from dozen of available cars in your area</p>
		                                </div>
		                                <div className="card-action">
		                                    <span
																					className="button btn-align-md accent-btn raised"
																					onClick={async e => {
																						try {
																							await showAuth({ variables: { showAuth: true, type: 'signup' } })
																						} catch(e) {
																							console.log(e)
																						}
																					}}
																				>
																					Free Trial
																				</span>
		                                </div>
		                            </div>
		                        </div>
		                        <div className="column">
		                            <div className="feature-card is-bordered has-text-centered revealOnScroll delay-2" data-animation="fadeInLeft">
		                                <div className="card-title">
		                                    <h4>Improve carbon footprint</h4>
		                                </div>
		                                <div className="card-icon" style={{margin: "2.5em 0"}}>
		                                    <i className="fas fa-leaf fa-4x" />
		                                </div>
		                                <div className="card-text">
		                                    <p>Pick up guest on your way to your destination</p>
		                                </div>
		                                <div className="card-action">
		                                    <ScrollLink
																					className="button btn-align-md secondary-btn raised"
																					to="learn-more"
					                                smooth={true}
					                                offset={20}
					                                duration={500}
																				>
																					Learn more
																				</ScrollLink>
		                                </div>
		                            </div>
		                        </div>
		                        <div className="column">
		                            <div className="feature-card is-bordered has-text-centered revealOnScroll delay-3" data-animation="fadeInLeft">
		                                <div className="card-title">
		                                    <h4>Lower the cost</h4>
		                                </div>
		                                <div className="card-icon" style={{margin: "2.5em 0"}}>
		                                    <i className="fas fa-hand-holding-usd fa-4x"></i>
		                                </div>
		                                <div className="card-text">
		                                    <p>Save about 10% more than uber and lyft on average</p>
		                                </div>
		                                <div className="card-action">
		                                    <span
																					className="button btn-align-md primary-btn raised"
																					onClick={async e => {
																						try {
																							await showAuth({ variables: { showAuth: true, type: 'signup' } })
																						} catch(e) {
																							console.log(e)
																						}
																					}}
																				>
																					Get Started
																				</span>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </section>

		        <section id="learn-more" className="section is-medium">
		            <div className="container">
		                <div className="columns">
		                    <div className="column is-centered-tablet-portrait">
		                        <h1 className="title section-title">Our platform is a two-sided market place, that will have your needs met</h1>
		                        <div className="divider"></div>
                                <h3 className="subtitle is-4 is-muted">Here's how it works</h3>
		                    </div>
		                    <div className="column is-8 mt-60">


		                        <article className="media icon-box">
		                            <figure className="media-left">
		                                <p className="image">
																				<i className="fas fa-star fa-3x"></i>
		                                </p>
		                            </figure>
		                            <div className="media-content mt-50">
		                                <div className="content">
		                                    <p>
		                                      <span className="icon-box-title">Owner</span>
		                                        <span className="icon-box-text">Don't use your car freqently? Want to earn some extra cash? Join our platform. We provide a way for car owners to let drivers in need of an on demand ride, to rent a car for a fraction of the cost of owning a car.</span>
		                                      {/*  <span className="icon-box-title">Join</span>
		                                        <span className="icon-box-text">Start booking rides, as soon as you Sign Up!</span>*/}
		                                    </p>
		                                </div>
		                            </div>
		                        </article>

		                        <article className="media icon-box">
		                            <figure className="media-left">
		                                <p className="image">
                                            <i className="fas fa-car fa-3x"></i>
		                                </p>
		                            </figure>
		                            <div className="media-content mt-50">
		                                <div className="content">
		                                    <p>
		                                        <span className="icon-box-title">Renter</span>
		                                        <span className="icon-box-text">Missed the bus? Need to go to grocery store, but the store is too far and don't want to waste time in public transportation? Sign up, see the available cars near you and get to drive on demand.</span>
		                                    </p>
		                                </div>
		                            </div>
		                        </article>

		                        <article className="media icon-box">
		                            <figure className="media-left">
		                                <p className="image">
                                            <i className="fas fa-3x fa-parking"></i>
		                                </p>
		                            </figure>
		                            <div className="media-content mt-50">
		                                <div className="content">
		                                    <p>
		                                       {/* <span className="icon-box-title">Security</span>
		                                        <span className="icon-box-text">Our clients' security is one of our utmost important focus we have. We will protect car owners from theft, property damage and personal data; as well as, protect car renters from overcharges, short-term insurance and personal data.</span>*/}
		                                        <span className="icon-box-title">Return</span>
		                                        <span className="icon-box-text">Drop off the vehicle to one of our Iterportation</span>
                                                <span className="icon-box-text">Iterportation are specific locations to drop off our cars</span>
		                                    </p>
		                                </div>
		                            </div>
		                        </article>

		                    </div>
		                </div>
		            </div>
		        </section>
		    </div>
		)
	}
}

export default compose(
    graphql(SHOW_AUTH, { name: 'showAuth' })
)(ValueProp)
