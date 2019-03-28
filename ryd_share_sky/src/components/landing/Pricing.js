import React, { Component } from 'react'

// Apollo
import { compose, graphql } from 'react-apollo'
import { SHOW_AUTH } from '../../graphql/landing'


class Pricing extends Component {
	render() {

		const { showAuth } = this.props

		return (
			<section id="pricing" className="section section-light-grey is-medium">
	            <div className="pricing-table">
				  <div className="pricing-plan is-warning">
				    <div className="plan-header">Community</div>
				    <div className="plan-price">
							<span className="plan-price-amount">
								<span className="plan-price-currency">
									$
								</span>
								20
							</span>
							/month
						</div>
				    <div className="plan-items">
				      <div className="plan-item">Up to 300 miles /month</div>
				      <div className="plan-item">Pick up guest on the way</div>
				      <div className="plan-item">4 door model cars</div>
				      <div className="plan-item">-</div>
				    </div>
				    <div className="plan-footer">
				      <button
				      	className="button is-fullwidth"
				      	onClick={async e => {
									try {
										await showAuth({ variables: { showAuth: true, type: 'signup' } })
									} catch(e) {
										console.log(e)
									}
				      	}}
				      >
				      	Choose
				      </button>
				    </div>
				  </div>

				  <div className="pricing-plan is-active">
				    <div className="plan-header">Trip</div>
				    <div className="plan-price"><span className="plan-price-amount"><span className="plan-price-currency">$</span>100</span>/month</div>
				    <div className="plan-items">
				      <div className="plan-item">Up to 2,000 miles /month</div>
				      <div className="plan-item">Pick up guest on the way</div>
				      <div className="plan-item">4 door model cars</div>
				      <div className="plan-item">Convenient drop off spot</div>
				    </div>
				    <div className="plan-footer">
				      <button
				      	className="button is-fullwidth"
				      	onClick={async e => {
									try {
										await showAuth({ variables: { showAuth: true, type: 'signup' } })
									} catch(e) {
										console.log(e)
									}
				      	}}
				      >
				      	Choose
				      </button>
				    </div>
				  </div>

				  <div className="pricing-plan is-danger">
				    <div className="plan-header">Luxury</div>
				    <div className="plan-price"><span className="plan-price-amount"><span className="plan-price-currency">$</span>500</span>/month</div>
				    <div className="plan-items">
				      <div className="plan-item">Up to 5,000 miles /month</div>
				      <div className="plan-item">No guest pick up</div>
				      <div className="plan-item">Luxury vehicle selection</div>
				      <div className="plan-item">International travel</div>
				    </div>
				    <div className="plan-footer">
				      <button
				      	className="button is-fullwidth"
				      	onClick={async e => {
									try {
										await showAuth({ variables: { showAuth: true, type: 'signup' } })
									} catch(e) {
										console.log(e)
									}
				      	}}
				      >
				      	Choose
				      </button>
				    </div>
				  </div>
				</div>
	        </section>
		)
	}
}

export default compose(
    graphql(SHOW_AUTH, { name: 'showAuth' })
)(Pricing)
