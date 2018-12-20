import React, { Component } from 'react'

// Apollo
import { compose, graphql } from 'react-apollo'
import { SHOW_ITEM, GET_ITEM } from '../../graphql/dashboard'

// Utils
import { getPayload } from '../../utils/checkAuth'

class Sidenav extends Component {

	render() {

		const user = getPayload()
		const { getItem, showItem } = this.props

		return (
			<nav className="menu">
				<p className="menu-label">
					General
				</p>
				<ul className="menu-list">
					<li>
						<a
							className={`${getItem.showItem === 'ride' ? 'is-active':''}`}
							onClick={e => {
								showItem({ variables: { showItem: 'ride' } })
							}}
							href="#/ride"
						>
							Ride
						</a>
					</li>
					{user.isOwner ?
						<li>
							<a
								className={`${getItem.showItem === 'vehicle' ? 'is-active':''}`}
								onClick={e => {
									showItem({ variables: { showItem: 'vehicle' } })
								}}
								href="#/vehicle"
							>
								Vehicle
							</a>
						</li>
						:
						null
					}
				</ul>

				<p className="menu-label">
					Administration
				</p>
				<ul className="menu-list">
					<li>
						<a
							className={`${getItem.showItem === 'history' ? 'is-active':''}`}
							onClick={e => {
								showItem({ variables: { showItem: 'history' } })
							}}
							href="#/history"
						>
							History
						</a>
					</li>
					{user.isOwner ?
						<li>
							<span>Manage Riders</span>
							<ul>
								<li>
									<a
										className={`${getItem.showItem === 'review' ? 'is-active':''}`}
										onClick={e => {
											showItem({ variables: { showItem: 'review' } })
										}}
										href="#/review"
									>
										Review
									</a>
								</li>
								<li>
									<a
										className={`${getItem.showItem === 'block' ? 'is-active':''}`}
										onClick={e => {
											showItem({ variables: { showItem: 'block' } })
										}}
										href="#/block"
									>
										Block
									</a>
								</li>
							</ul>
						</li>
						:
						null
					}
					<li>
						<a
							className={`${getItem.showItem === 'invite' ? 'is-active':''}`}
							onClick={e => {
								showItem({ variables: { showItem: 'invite' } })
							}}
							href="#/invite"
						>
							Invite
						</a>
					</li>
					<li>
						<a
							className={`${getItem.showItem === 'add' ? 'is-active':''}`}
							onClick={e => {
								showItem({ variables: { showItem: 'add' } })
							}}
							href="#/add"
						>
							Add Vehicle
						</a>
					</li>
				</ul>
				<p className="menu-label">
					Transactions
				</p>
				<ul className="menu-list">
					<li>
						<a
							className={`${getItem.showItem === 'transfers' ? 'is-active':''}`}
							onClick={e => {
								showItem({ variables: { showItem: 'transfers' } })
							}}
							href="#/transfers"
						>
							Transfers
						</a>
					</li>
					<li>
						<a
							className={`${getItem.showItem === 'payments' ? 'is-active':''}`}
							onClick={e => {
								showItem({ variables: { showItem: 'payments' } })
							}}
							href="#/payments"
						>
							Payments
						</a>
					</li>
					{user.isOwner ?
						<li>
							<a
								className={`${getItem.showItem === 'profits' ? 'is-active':''}`}
								onClick={e => {
									showItem({ variables: { showItem: 'profits' } })
								}}
								href="#/profits"
							>
								Profits
							</a>
						</li>
						:
						null
					}
				</ul>
			</nav>
		)
	}
}

export default compose(
	graphql(SHOW_ITEM, { name: 'showItem' }),
	graphql(GET_ITEM, { name: 'getItem' })
)(Sidenav)
