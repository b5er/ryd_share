import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Components
import personOne from '../../assets/img/1.png';
import personTwo from '../../assets/img/2.png';
import personThree from '../../assets/img/3.png';
import appMock from '../../assets/img/app-mockup.png';

// Apollo
import { compose, graphql } from 'react-apollo'
import { SHOW_AUTH } from '../../graphql/landing'

class SocialProof extends Component {
	render() {

		const { showAuth } = this.props

		return (
			<div>
				<section className="section is-medium section-secondary">
		            <div className="container">

		                <div className="title-wrapper has-text-centered">
		                    <h2 className="title is-2 light-text is-spaced">Our Clients love us !</h2>
		                    <h3 className="subtitle is-5 light-text">Our passion is to make your live simpler, one ride at a time.</h3>
		                </div>

		                <div className="content-wrapper">
		                    <div className="columns is-vcentered">
		                        <div className="column is-4">
		                            <figure className="testimonial">
		                                <blockquote>
		                                    Iterport app has helped my roommates and I schedule who will use my car, for how long and how much. Love the app design, practically and making some money helps too.
		                                </blockquote>
		                                <div className="author">
		                                    <img src={personOne} alt=""/>
		                                    <h5>Irma Walters</h5><span>Roommate</span>
		                                </div>
		                            </figure>
		                        </div>
		                        <div className="column is-4">
		                            <figure className="testimonial">
		                                <blockquote>
		                                    Before Iterport, I would have to use the public transportation in my town and grusomely walk hours to my local grocery store. Some times I would miss the bus, and have to manage a hectic schedule just to get groceries once per week. Iterport save me so much time and money, with it's easy to use platform and low cost. Thank you Iterport!
		                                </blockquote>
		                                <div className="author">
		                                    <img src={personTwo} alt=""/>
		                                    <h5>John Bradley</h5><span>Student</span>
		                                </div>
		                            </figure>
		                        </div>
		                        <div className="column is-4">
		                            <figure className="testimonial">
		                                <blockquote>
		                                	Life has been much more doable with Iterport. Now I can get to the places I want, whenever my car is in the shop. There are rarely cars unavailable in my area, so it works out pretty well.
		                                </blockquote>
		                                <div className="author">
		                                    <img src={personThree} alt=""/>
		                                    <h5>Gary Blackman</h5><span>Former metro rider</span>
		                                </div>
		                            </figure>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </section>

		        <section className="section section-feature-grey is-medium">
		            <div className="container">

		                <div className="columns">
		                    <div className="column is-10 is-offset-1">
		                        <div className="has-text-centered">
									<figure className="image is-4by3" style={{position: 'static'}}>
                  	<img className="pushed-image" src={appMock} alt="Product preview" style={{borderRadius: "8px"}}/>
									</figure>
		                        </div>
		                    </div>
		                </div>

		                <div className="title-wrapper has-text-centered">
		                    <h2 className="title is-2">One Platform</h2>
		                    <h3 className="subtitle is-5 is-muted">To rule them All</h3>
		                </div>

		                <p className="has-text-centered mt-20">
		                    <Link
		                    	className="button cta is-large rounded secondary-btn raised"
		                    	to='/'
		                    	onClick={e => {
									      		showAuth({ variables: { showAuth: true, type: 'signup' } })
									      	}}
		                    >
		                        Get Started
		                    </Link>
		                </p>
		            </div>
		        </section>
		    </div>
		)
	}
}

export default compose(
	graphql(SHOW_AUTH, { name: 'showAuth' })
)(SocialProof)
