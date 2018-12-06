import React from 'react';
import { render } from 'react-dom';

// Routes
import Routes from './routes'

// Apollo
import { ApolloProvider } from 'react-apollo'
import client from './apollo'

// Smartcar
// import SmartcarProvider from './smartcar' 
// import smartcarClient from './smartcar/client'

// Styles
import './styles/css/core/core.min.css'
import './styles/css/routes/bundle_routes.min.css'


render(
	(
		<ApolloProvider client={client}>
			<Routes />
		</ApolloProvider>
	),
	document.querySelector('#root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();


