// Apollo
// import gql from 'graphql-tag'

export const defaults = {
	showAuth: {
		showAuth: false,
		type: 'login',
		__typename: 'auth'
	},
	// availableCars: {
	//
	// },
	showItem: 'ride'
}

export const resolvers = {
	Mutation: {
		toggleAuth: (_, auth, { cache }) => {
			const showAuth = {
				...auth,
				__typename: 'auth'
			}
			cache.writeData({ data: { showAuth } })
			return null
		},

		// availableCars: (_, vehicles, { cache }) => {
		// 	const cars = {
		// 		...vehicles
		// 	}
		// 	cache.writeData({ data: { cars } })
		// 	return null
		// },

		toggleItem: (_, { showItem }, { cache }) => {
			cache.writeData({ data: { showItem } })
			return null
		}

	}
}
