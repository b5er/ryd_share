import React, { Component } from 'react'

import HeroImage from '../../assets/img/hero_image.svg'
import SmartCar from '../../assets/img/smartcar.svg'
import carMap from '../../assets/img/map.png'

// Components 
import Navbar from './Navbar'

import Typing from 'react-typing-animation'
import Scroll from 'react-scroll'

class Hero extends Component {
	render() {

		const ScrollLink = Scroll.Link

		return (
			<section className="hero is-fullheight is-primary is-bold">
	            
	            <Navbar />

	            <div className="hero-body">
	                <div className="container">
	                	<Typing loop={true} speed={40} cursor={"|"} className="in-line">
	                        <h1 className="title is-size-1 has-text-right">
	                        	Get to your destination with ease
	                        </h1>
	                        <Typing.Delay ms={1500} />
	                        <Typing.Backspace count={34} />
	                        <h1 className="title is-size-1 has-text-right">
	                        	Find available cars near you
	                        </h1>
	                        <Typing.Delay ms={1500} />
	                        <Typing.Backspace count={15} />
	                        <h1 className="title is-size-1 has-text-right">
		                        Unlock car
							</h1>
	                        <Typing.Delay ms={1500} />
	                        <Typing.Backspace count={25} />
	                        <h1 className="title is-size-1 has-text-right">
		                        Go to your destination
							</h1>
	                        <Typing.Delay ms={1500} />
	                        <Typing.Backspace count={25} />
	                        <h1 className="title is-size-1 has-text-right">
		                        Pick up guest on the way
							</h1>
	                        <Typing.Delay ms={1500} />
	                        <Typing.Backspace count={25} />
	                        <h1 className="title is-size-1 has-text-right">
		                        Return the car
							</h1>
	                        <Typing.Delay ms={1500} />
	                        <Typing.Backspace count={25} />
	                        <h1 className="title is-size-1 has-text-right">
		                        Is that simple!
							</h1>
	                        <Typing.Delay ms={1500} />
	                        <Typing.Backspace count={25} />
                        </Typing>
	                    <div className="columns is-vcentered">
	                    
                            <div className="column is-5">
                                <figure className="image is-4by3">
                                    <img src={HeroImage} alt="Description" style={{transform: "scale(2.8)"}} />
                                </figure>
                            </div>

	                        <div className="column is-3 landing-caption has-text-centered">
	                        	<img src={carMap} alt="Product preview" style={{ maxWidth: '50em', height: '30em', borderRadius: '5px'}}/>
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
			                	Get started
			                </ScrollLink>
	                	</div>
	                </div>
	            </div>
	            <div className="hero-foot mb-20">
	                <div className="container">
	                    <p className="title">Powered by
                            <img src={SmartCar} alt="" style={{margin: '0 1em'}} />
						</p>
	                </div>
	            </div>

	        </section>
		)
	}
}

export default Hero