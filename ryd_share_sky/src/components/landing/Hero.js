import React, { Component } from 'react'

import SmartCar from '../../assets/img/smartcar.svg'
import CarSharing from '../../assets/img/car_sharing.gif' // Link/Credit: https://gifer.com/en/H7d1

// Components
import Navbar from './Navbar'

import Scroll from 'react-scroll'

class Hero extends Component {
	render() {

		const ScrollLink = Scroll.Link

		return (
			<section className="hero is-fullheight is-bold" style={{ backgroundColor: '#474F61' }}>

	            <Navbar />

	            <div className="hero-body">
	                <div className="container">

	                    <div className="columns is-vcentered is-multiline">
	                        <div className="column is-12 landing-caption has-text-centered">
	                        	<img src={CarSharing} alt="Product preview" style={{ minWidth: '60em', height: '40em', borderRadius: '5px'}}/>
	                        </div>
													<div className="column">
														<div className="has-text-centered" style={{ marginTop: '2em' }}>
					                    <ScrollLink
					                    	className="button is-outlined is-danger is-large is-rounded glow"
					                    	to="features"
                                smooth={true}
                                offset={20}
                                duration={500}
					                    >
						                		Get Started
						                	</ScrollLink>
					                	</div>
													</div>
											</div>

	                </div>
	            </div>
	            <div className="hero-foot">
	                <div className="container">
	                    <p className="subtitle" style={{ color: 'white' }}>
												Powered by
												<a href="https://smartcar.com/" target="_blank" rel="noopener noreferrer">
                        	<img width="25em" src={SmartCar} alt="Smartcar logo" style={{ margin: '0 .5em' }} />
												</a>
											</p>
	                </div>
	            </div>

	        </section>
		)
	}
}

export default Hero
