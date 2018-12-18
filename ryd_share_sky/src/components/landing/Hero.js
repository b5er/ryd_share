import React, { Component } from 'react'

// import HeroImage from '../../assets/img/hero_image.svg'
import SmartCar from '../../assets/img/smartcar.svg'
// import carMap from '../../assets/img/map.png'

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

	                    <div className="columns is-vcentered">

                            <div className="column is-5">
                                <figure className="image is-4by3">
                                    {/*<img src={HeroImage} alt="Description" style={{transform: "scale(2.8)"}} />*/}
                                </figure>
                            </div>

	                        <div className="column is-3 landing-caption has-text-centered">
	                        	{/*<img src={carMap} alt="Product preview" style={{ maxWidth: '50em', height: '30em', borderRadius: '5px'}}/>*/}
	                        </div>

	                    </div>
	                    <div className="has-text-right" style={{ marginRight: '18em', marginTop: '2em' }}>
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
