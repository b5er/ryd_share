import Smartcar from '@smartcar/auth'

export const smartcar = new Smartcar({
  clientId: '754ca30a-655a-4b86-a9a1-ef2916cf1fe5',
  redirectUri: 'https://javascript-sdk.smartcar.com/redirect-2.0.0?app_origin=http://localhost:3000',
  scope: ['read_vehicle_info', 'read_odometer'],
  testMode: true,
  onComplete: async (err, code, status) => {
    if(err)
      return err

      try {
        // Could of used post request for both, but in this case having them as this is faster within the network.
        const accessToken = await fetch(`http://localhost:8000/api/smartcar/exchange?code=${code}`)
        const { token } = await accessToken.json()
        const vehicles = await fetch(`http://localhost:8000/api/smartcar/vehicle?token=${JSON.stringify(token)}`)
        const vehiclesInfo = await vehicles.json()
        getVehicles(vehiclesInfo)
      } catch(e) {
        console.log(e)
      }
  }
})

export const getVehicles = vehicles => {
  console.log('here', vehicles)
}
