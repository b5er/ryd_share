const jwt = require('express-jwt')

const getTokenFromHeaders = req => {
	const { headers: { authorization } } = req 
	let token_value = null
	if(typeof authorization !== 'undefined')
		token_value = authorization.split(' ')

	if(authorization && token_value[0] === 'Token') 
		return token_value[1]
	return null
}	

const auth = {
	required: jwt({
		secret: 'secret', 
		userProperty: 'payload',
		getToken: getTokenFromHeaders
	}),
	optional: jwt({
		secret: 'secret',
		userProperty: 'payload',
		getToken: getTokenFromHeaders,
		credentialsRequired: false
	})
}

module.exports = auth