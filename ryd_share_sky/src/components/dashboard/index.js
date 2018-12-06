import React, { Component } from 'react'

import ProfilePic from "../../assets/img/profile.png";

// Apollo
import { compose, graphql } from 'react-apollo'
import { SHOW_ITEM, GET_ITEM } from '../../graphql/landing'

import Sidebar from './Sidebar'
import History from './History'
import CarList from './CarList'
import Bank from './Bank'

class Dashboard extends Component {


	render() {
		
		const name = "Sidnee Gye";
		const { getItem } = this.props

		return (
			<div>
				<section className="hero is-small">
					<Sidebar />
					<div className="hero-body">
						<div className="container">
	                        <div className="columns is-centered">
								<div className="column is-2 is-offset-2">
	                                <figure className="image" style={{width: "200px", height: "200px"}}>
	                                    <img className="is-rounded img-glow" src={ProfilePic} alt=""/>
	                                </figure>
									<p className="title has-text-centered">
										{name}
									</p>
									<p className="subtitle has-text-centered">(Renter)</p>
								</div>
							</div>
							<div className="columns is-centered">
								<div className="column is-8 is-offset-2 notification is-dark">
									<p className="title">ID:
										<span className="has-text-danger" style={{paddingLeft: "20px"}}>38ca7b7c-7c60-4702-972a-930f211dbaf9</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{
					getItem.showItem === 'history' ?
					<History />
					:
					(
						getItem.showItem === 'carList' ?
						<CarList />
						:
						(
							getItem.showItem === 'bank' ?
							<Bank />
							:
							<History />
						)
					)
				}
			</div>
		)
	}
}

export default compose(
	graphql(SHOW_ITEM, { name: 'showItem' }),
	graphql(GET_ITEM, { name: 'getItem' })
)(Dashboard)