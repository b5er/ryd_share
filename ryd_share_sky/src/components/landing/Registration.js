import React, { Component } from 'react'

// Apollo
import { compose, graphql } from 'react-apollo'
import { SHOW_REGISTRATION, GET_REGISTRATION } from '../../graphql/landing'

class Registration extends Component {
	constructor() {
		super()
		this.state = {
			fullName: '',
			username: '', 
			password: '',
			formState: localStorage.getItem('x') ? 'login':'signup'
		}
	}

	render() {

		const { username, password, formState, fullName } = this.state
		const { getRegistration, showRegistration } = this.props
		
		return (
			<div id="auth-modal" className={`modal ${getRegistration.showRegistration ? 'is-active':''}`}>
	            <div 
	            	className="modal-background" 
	            	onClick={e => {
	            		showRegistration({ variables: {showRegistration: false } })
	            	}}
	            />
	            <div className="modal-content">
	                <div className="flex-card auth-card">
	                    <div className="tabs-wrapper">
	                        <div className="tabs">
	                            <ul>
	                                <li 
	                                	className={`${formState === 'login' ? 'is-active':''}`} 
	                                	data-tab="login-tab"
	                                	onClick={e => {
	                                		this.setState({ formState: 'login' })
	                                	}}
	                                >
	                                	<a href="#/login">
	                                		Login
	                                	</a>
	                                </li>
	                                <li 
	                                	className={`${formState === 'signup' ? 'is-active':''}`} 
	                                	data-tab="register-tab"
	                                	onClick={e => {
	                                		this.setState({ formState: 'signup' })
	                                	}}
	                                >
	                                	<a href="#/signup">
	                                		Signup
	                                	</a>
	                                </li>
	                            </ul>
	                        </div>
	                        {formState === 'login' ?
		                        <form id="login-tab" className={`tab-content ${formState === 'login' ? 'is-active':''}`}>
		                            <div className="field">
		                                <label>Username</label>
		                                <div className="control">
		                                    <input 
		                                    	type="text" 
		                                    	className="input is-medium"
		                                    	onChange={e => this.setState({ username: e.target.value })} 
		                                    	value={username}
		                                    	placeholder="Enter username" 
		                                    	autoComplete="no"
		                                    />
		                                </div>
		                            </div>
		                            <div className="field">
		                                <label>Password</label>
		                                <div className="control">
		                                    <input 
		                                    	type="password" 
		                                    	className="input is-medium" 
		                                    	onChange={e => this.setState({ password: e.target.value })}
		                                    	value={password}
		                                    	placeholder="Enter password" 
		                                    	autoComplete="no"
		                                    />
		                                </div>
		                            </div>
		        					
		        					<div className="has-text-centered">
			                            <a className="button is-fullwidth secondary-btn is-rounded raised" href="#/login">
			                            	Log in
			                            </a>
			                        </div>
		                        </form>
		                        :
		                        <form id="signup-tab" className={`tab-content ${formState === 'signup' ? 'is-active':''}`}>
		                            <div className="field">
		                                <label>Full Name</label>
		                                <div className="control">
		                                    <input 
		                                    	type="text" 
		                                    	className="input is-medium"
		                                    	onChange={e => this.setState({ fullName: e.target.value })} 
		                                    	value={fullName}
		                                    	placeholder="Enter your full name" 
		                                    	autoComplete="no"
		                                    />
		                                </div>
		                            </div>
		                            <div className="field">
		                                <label>Username</label>
		                                <div className="control">
		                                    <input 
		                                    	type="text" 
		                                    	className="input is-medium"
		                                    	onChange={e => this.setState({ username: e.target.value })} 
		                                    	value={username}
		                                    	placeholder="Enter username" 
		                                    	autoComplete="no"
		                                    />
		                                </div>
		                            </div>
		                            <div className="field">
		                                <label>Password</label>
		                                <div className="control">
		                                    <input 
		                                    	type="password" 
		                                    	className="input is-medium" 
		                                    	onChange={e => this.setState({ password: e.target.value })}
		                                    	value={password}
		                                    	placeholder="Enter password" 
		                                    	autoComplete="no"
		                                    />
		                                </div>
		                            </div>
		        					
		        					<div className="has-text-centered">
			                            <a className="button is-fullwidth secondary-btn is-rounded raised" href="#/signup">
			                            	Signup
			                            </a>
			                        </div>
		                        </form>
		                    }
	                    </div>
	                </div>
	            </div>
	            <button 
	            	className="modal-close is-large" 
	            	aria-label="close"
	            	onClick={e => {
	            		showRegistration({ variables: { showRegistration: false }})
	            	}}
	            />
	        </div>
		)
	}
}

export default compose(
	graphql(SHOW_REGISTRATION, { name: 'showRegistration' }),
	graphql(GET_REGISTRATION, { name: 'getRegistration' })
)(Registration)