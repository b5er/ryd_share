import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { withClientState } from 'apollo-link-state'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { resolvers, defaults } from './resolvers'

const typeDefs = `

	type Auth {
		showAuth: Boolean!
		type: String!
	}

	type Item {
		showItem: String!
	}

	type AvailableCars {
		vehicles: String!
	}

	type Mutation {
		toggleAuth(showAuth: Boolean!, type: String!): Auth
		toggleItem(showItem: String!): Item
		availableCars(vehicles: String!): AvailableCars
	}

	type Query {
		showAuth: Auth
		showItem: Item
		vehicles: AvailableCars
	}

`

const httpLink = new HttpLink({
	uri: 'http://localhost:8000'
})

const cache = new InMemoryCache()
const stateLink = withClientState({
	cache,
	resolvers,
	defaults,
	typeDefs
})

const middlewareLink = new ApolloLink((op, fo) => {
	const token = JSON.parse(localStorage.getItem('_x'))
	const authorization = token ? `Bearer ${token}` : ''
	op.setContext({
		headers: {
			authorization
		}
	})
	return fo(op)
})

const link = ApolloLink.from([stateLink, middlewareLink, httpLink])
const client = new ApolloClient({
	link,
	cache,
	connectToDevTools: true
})

export default client
