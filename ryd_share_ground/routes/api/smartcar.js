const router = require('express').Router()
const auth = require('../auth')
const mongoose = require('mongoose')
const Users = mongoose.model('Users')
const smartcar = require('smartcar')

const client = new smartcar.AuthClient({
  clientId: '754ca30a-655a-4b86-a9a1-ef2916cf1fe5',
  clientSecret: 'b33b52ff-40f7-4489-8b4c-3f119c7fa725',
  redirectUri: 'https://javascript-sdk.smartcar.com/redirect-2.0.0?app_origin=http://localhost:3000',
  scope: ['read_vehicle_info', 'read_odometer'],
  testMode: true
})

let access

router.get('/exchange', async (req, res, next) => {
  const { query: { code } } = req

  if(req.query.error)
    return next(new Error(req.query.error))

  try {
    const accessToken = await client.exchangeCode(code)

    return res.send({
      success: true,
      token: accessToken
    })

  } catch(e) {
    console.log(e)
  }

})

router.get('/vehicle', async (req, res) => {
  const token = req.query.token ? JSON.parse(req.query.token):null
  if(!token) {
    return res.send({
      success: false,
      message: 'Error: no valid token'
    })
  }

  try {
    const vehicleIds = await smartcar.getVehicleIds(token.accessToken)
    let vehicles = {}
    for(let i = 0; i < vehicleIds.vehicles.length; i++) {
      const ids = vehicleIds.vehicles[i]
      const vehicle = new smartcar.Vehicle(ids, token.accessToken)
      try {
        vehicles[ids] = await vehicle.info()
      } catch(e) {
        console.log(e)
        vehicles[ids] = null
      }
    }

    res.send({
      success: true,
      vehicles
    })

  } catch(e) {
    res.send({
      success: false,
      message: 'Error: vehicle info'
    })
  }
})

module.exports = router
