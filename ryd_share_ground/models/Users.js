const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { Schema } = mongoose

const UsersSchema = new Schema({
	fullName: {
		type: String,
		default: ''
	},
	email: {
		type: String,
		default: '',
		required: true
	},
	password: {
		type: String,
		default: '',
		required: true
	},
	isOwner: {
		type: Boolean,
		default: false
	},
	isDeleted: {
		type: Boolean,
		default: false
	},
	createdAt: {
		type: Date,
		default: Date.now()
	}
})

UsersSchema.methods.generateHash = password => {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

UsersSchema.methods.setPassword = function(password) {
	this.password = this.generateHash(password)
}

UsersSchema.methods.validatePassword = function(password) {
	return bcrypt.compareSync(password, this.password)
}

UsersSchema.methods.generateJWT = function() {
	const today = new Date()
	const expirationDate = new Date(today)
	expirationDate.setDate(today.getDate() + 60)

	return jwt.sign({
		fullName: this.fullName,
		isOwner: this.isOwner,
		email: this.email,
		id: this._id,
		exp: parseInt(expirationDate.getTime() / 1000, 10),
	}, 'secret')
}

UsersSchema.methods.toAuthJSON = function() {
	return {
		_id: this._id,
		fullName: this.fullName,
		isOwner: this.isOwner,
		email: this.email,
		token: this.generateJWT()
	}
}

mongoose.model('Users', UsersSchema)
