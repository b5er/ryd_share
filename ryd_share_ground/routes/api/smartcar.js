const router = require('express').Router()
const auth = require('../auth')
const mongoose = require('mongoose')
const Users = mongoose.model('Users')
const smartcar = require('smartcar')

const client = new smartcar.AuthClient({
  clientId: '754ca30a-655a-4b86-a9a1-ef2916cf1fe5',
  clientSecret: 'b1b0062e-f028-4958-af0e-9a3a859e0865',
  redirectUri: 'https://javascript-sdk.smartcar.com/redirect-2.0.0?app_origin=http://localhost:3000',
  scope: ['read_vehicle_info', 'read_odometer'],
  testMode: true
})

router.get('/callback', (req, res, next) => {
  let access = null
  console.log(req.query.code)
  if(req.query.error)
    return next(new Error(req.query.error))

  return client.exchangeCode(req.query.code)
    .then(_access => {
      access = _access
      return smartcar.getVehicleIds(access.accessToken)
    })
    .then(res => {
      const vehicle = new smartcar.Vehicle(res.vehicles[0], access.accessToken)
      return vehicle.info()
    })
    .then(data => {
      return res.json(data)
    })
    .catch(e => {
      console.log(e)
    })
})

module.exports = router
