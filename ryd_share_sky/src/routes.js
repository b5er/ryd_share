import React from 'react'
import { Route, Router, Switch, Redirect } from 'react-router-dom'
import createHistory from './history'

// Utils
import { checkAuth } from './utils/checkAuth'

// Containers
import LandingPage from './containers/LandingPage'
import ErrorPage from './containers/ErrorPage'

import DashboardPage from './containers/DashboardPage'

const AuthRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		checkAuth() ?
		(<Component {...props} />)
		:
		(<Redirect to={{ pathname: '/' }} />)
	)} />
)

const Routes = () => (
	<Router history={createHistory}>
		<Switch>
			<Route exact path="/" component={LandingPage} />
			<AuthRoute exact path="/dashboard" component={DashboardPage} />
			<Route exact path="/*" render={props => {
				return <ErrorPage {...props} />
			}}/>
		</Switch>
	</Router>
)

export default Routes
