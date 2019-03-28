import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// Apollo
import { compose, graphql } from 'react-apollo'
import { SHOW_AUTH, GET_AUTH } from '../../../graphql/landing'

// Utils
import { setStorageItem, rmStorageItem } from '../../../utils/storage'
import { checkAuth } from '../../../utils/checkAuth'

// Components
import Login from './Login'
import Signup from './Signup'

class Registration extends Component {

	render() {

		const { showAuth, history } = this.props
		const auth = this.props.getAuth.showAuth

		return (
			<div id="auth-modal" className={`modal ${auth.showAuth ? 'is-active':''}`}>
	            <div
	            	className="modal-background"
	            	onClick={e => {
	            		showAuth({ variables: { showAuth: false, type: 'login' } })
	            	}}
	            />
	            <div className="modal-content">
	                <div className="flex-card auth-card">
	                    <div className="tabs-wrapper">
	                        <div className="tabs">
	                            <ul>
	                                <li
	                                	className={`${auth.type === 'login' ? 'is-active':''}`}
	                                	data-tab="login-tab"
	                                	onClick={e => {
	                                		showAuth({ variables: { showAuth: true, type: 'login' } })
	                                	}}
	                                >
	                                	<a href="#/login">
	                                		Login
	                                	</a>
	                                </li>
	                                <li
	                                	className={`${auth.type === 'signup' ? 'is-active':''}`}
	                                	data-tab="register-tab"
	                                	onClick={e => {
																			showAuth({ variables: { showAuth: true, type: 'signup' } })
	                                	}}
	                                >
	                                	<a href="#/signup">
	                                		Signup
	                                	</a>
	                                </li>
	                            </ul>
	                        </div>
	                        {auth.type === 'login' ?
														<Login
															auth={auth}
															checkAuth={checkAuth}
															history={history}
															setStorageItem={setStorageItem}
															rmStorageItem={rmStorageItem}
														/>
		                        :
		                        <Signup
															auth={auth}
															checkAuth={checkAuth}
															history={history}
															setStorageItem={setStorageItem}
															rmStorageItem={rmStorageItem}
														/>
		                    }
	                    </div>
	                </div>
	            </div>
	        </div>
		)
	}
}

export default compose(
	graphql(SHOW_AUTH, { name: 'showAuth' }),
	graphql(GET_AUTH, { name: 'getAuth' })
)(withRouter(Registration))
