import React, { Component } from 'react'

// Components
import Hero from './Hero'
import ValueProp from './ValueProp'
import SocialProof from './SocialProof'
import Registration from './registration'
import Pricing from './Pricing'
import Footer from './Footer'

class Landing extends Component {
	render() {

		return (
			<div>
		        <Hero />
		        <Registration />
		        <ValueProp />
		        <SocialProof />
		        <Pricing />
		        <Footer />
			</div>
		)
	}
}

export default Landing
