import React, { Component } from 'react'

import Logo from '../../assets/img/logo.svg'

// Apollo
import { compose, graphql } from 'react-apollo'
import { SHOW_ITEM, GET_ITEM } from '../../graphql/landing'

class Sidebar extends Component {
	constructor() {
		super()
		this.state = {
			tab: 'history'
		}
	}

	render() {

		const { tab } = this.state
		const { showItem } = this.props

		return (
			<div id="sidebar" className="sidebar is-active">
	            <div className="sidebar-header">
	                <img src={Logo} alt="project logo" />
	                <strong><p className="is-size-4" style={{ color: 'white' }}>Iterport</p></strong>
	                {/*<a className="sidebar-close" href="javascript:void(0);"><i data-feather="x"></i></a>*/}
	            	<button 
	            		className="button"
	            		onClick={e => {
	            			document.querySelector('#sidebar').style.width = 0
	            		}}
	            	>
	            		close
	            	</button>
	            </div>
	            <div className="inner">
	                <ul className="sidebar-menu">
	                    <li>
	                    	<span className="nav-section-title" />
	                    </li>
	                    <li 
	                    	className={`${tab === 'history' ? 'is-dark-blue':''}`}
	                    	onClick={e => {
	                    		e.preventDefault()
	                    		this.setState({ tab: 'history' })
	                    		showItem({ variables: { showItem: 'history' } })
	                    	}}
	                    >
	                    	<a href="#">
	                    		<span className="fa fa-user fa-lg" />
	                    		History
	                    	</a>
	                    </li>
	                    <li 
	                    	className={`${tab === 'carList' ? 'is-dark-blue':''}`}
	                    	onClick={e => {
	                    		e.preventDefault()
	                    		this.setState({ tab: 'carList' })
	                    		showItem({ variables: { showItem: 'carList' } })
	                    	}}
	                    >
	                    	<a href="#">
	                    		<span className="fas fa-car-alt fa-lg" />
	                    		Car list
	                    	</a>
	                    </li>
	                    <li 
	                    	className={`${tab === 'bank' ? 'is-dark-blue':''}`}
	                    	onClick={e => {
	                    		e.preventDefault()
	                    		this.setState({ tab: 'bank' })
	                    		showItem({ variables: { showItem: 'bank' } })
	                    	}}
	                    >
	                    	<a href="#">
	                    		<span className="fas fa-piggy-bank fa-lg" />
	                    		Bank
	                    	</a>
	                    </li>
	                </ul>
	            </div>
	        </div>
		)
	}
}

export default compose(
	graphql(SHOW_ITEM, { name: 'showItem' }),
	graphql(GET_ITEM, { name: 'getItem' })
)(Sidebar)