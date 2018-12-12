// Apollo
// import gql from 'graphql-tag'

export const defaults = {
	showAuth: {
		showAuth: false,
		type: 'login',
		__typename: 'auth'
	},
	showItem: 'history'
}

export const resolvers = {
	Mutation: {
		// auth = { showAuth: <Boolean>, type: <String> }
		toggleAuth: (_, auth, { cache }) => {
			const showAuth = {
				...auth,
				__typename: 'auth'
			}
			cache.writeData({ data: { showAuth } })
			return null
		},

		toggleItem: (_, { showItem }, { cache }) => {
			cache.writeData({ data: { showItem } })
			return null
		}

	}
}
