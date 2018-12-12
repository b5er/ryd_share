const express = require('express')
const router = express.Router()

router.use('/account', require('./users'))
// router.use('/smartcar', require('./smartcar'))

module.exports = router
