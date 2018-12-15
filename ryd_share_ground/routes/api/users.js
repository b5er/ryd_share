const mongoose = require('mongoose')
const passport = require('passport')
const router = require('express').Router()
const auth = require('../auth')
const Users = mongoose.model('Users')

router.post('/signup', auth.optional, async (req, res, next) => {
	const { body: { user } } = req

	if(!user.fullName) {
		return res.send({
			success: false,
			message: 'Error: full name required'
		})
	}

	const fullName = user.fullName.toLowerCase().trim()

	if(!user.email) {
		return res.send({
			success: false,
			message: 'Error: email required'
		})
	}

	const email = user.email.toLowerCase().trim()

	if(!user.password) {
		return res.send({
			success: false,
			message: 'Error: password blank'
		})
	}

	let prevUsers = null
	try {
		prevUsers = await Users.find({ email })
		if(prevUsers.length > 0) {
			return res.send({
				success: false,
				message: 'Error: Account already exist'
			})
		}
	} catch(e) {
		return res.send({
			success: false,
			message: 'Error: Server error'
		})
	}

	if(prevUsers.length == 0) {
		const finalUser = new Users(user)
		finalUser.setPassword(user.password)
		try {
			const savedUser = await finalUser.save()
			return res.json({ user: finalUser.toAuthJSON() })
		} catch(e) {
			console.log(e)
		}
	}
})

router.post('/login', auth.optional, (req, res, next) => {
	const { body: { user } } = req

	if(!user.email) {
		return res.send({
			success: false,
			message: 'Error: email required'
		})
	}

	const email = user.email.toLowerCase().trim()

	if(!user.password) {
		return res.send({
			success: false,
			message: 'Error: password required'
		})
	}

	return passport.authenticate('local', { session: false, successRedirect: '/dashboard', failureRedirect: '/login' }, (err, passportUser, info) => {
		if(err)
			return next(err)

		if(passportUser) {
			const user = passportUser
			user.token = passportUser.generateJWT()
			return res.json({ user: user.toAuthJSON() })
		}

		return res.send({
			success: false,
			message: 'Error: unable to login'
		})
	})(req, res, next)
})


// router.post('logout', auth.required, (req, res, next) => {
// 	const { payload: { id } } = req
//
// 	return Users.findById(id)
// 		.then(user => {
// 			if(!user)
// 				return res.sendStatus(400)
//
//
// 		})

// GET current route (required, only authenticated users have accesss)
router.get('/dashboard', auth.required, (req, res, next) => {
	const { payload: { id } } = req
	console.log('fesss')
	return Users.findById(id)
		.then(user => {
			if(!user) {
				return res.sendStatus(400)
			}

			return res.json({ user: user.toAuthJSON() })
		})
})

module.exports = router
