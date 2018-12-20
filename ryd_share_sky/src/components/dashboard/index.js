import React, { Component } from 'react'

// Components
import Navbar from './Navbar'
import Sidenav from './Sidenav'

import Ride from './general/Ride'
import Vehicle from './general/Vehicle'
import History from './administration/History'
import Invite from './administration/Invite'
import AddVehicle from './administration/AddVehicle'
import Review from './administration/riders/Review'
import Block from './administration/riders/Block'
import Payments from './transactions/Payments'
import Transfers from './transactions/Transfers'
import Profits from './transactions/Profits'

// Apollo
import { compose, graphql } from 'react-apollo'
import { SHOW_ITEM, GET_ITEM } from '../../graphql/dashboard'

// Utils
import { getPayload } from '../../utils/checkAuth'
import { smartcar } from '../../utils/smartcar'


class Dashboard extends Component {

	componentDidMount() {
		if(getPayload().isOwner) {
			smartcar.openDialog({ forcePrompt: true })
		}
	}

	menuSelect = item => {
		switch(item) {
			case 'vehicle':
				return <Vehicle />
			case 'history':
				return <History />
			case 'invite':
				return <Invite />
			case 'add':
				return <AddVehicle />
			case 'review':
				return <Review />
			case 'block':
				return <Block />
			case 'payments':
				return <Payments />
			case 'transfers':
				return <Transfers />
			case 'profits':
				return <Profits />
			default:
				return <Ride />
		}
	}

	render() {

		const { getItem } = this.props

		return (
			<div>
				<Navbar />

				<div className="section">
					<div className="columns">
						<aside className="column is-2">
							<Sidenav />
						</aside>

						<main className="column">
							{this.menuSelect(getItem.showItem)}
						</main>
					</div>
				</div>
			</div>
		)
	}
}

export default compose(
	graphql(SHOW_ITEM, { name: 'showItem' }),
	graphql(GET_ITEM, { name: 'getItem' })
)(Dashboard)
