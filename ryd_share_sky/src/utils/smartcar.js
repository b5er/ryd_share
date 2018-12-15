import Smartcar from '@smartcar/auth'

export const smartcar = new Smartcar({
  clientId: '754ca30a-655a-4b86-a9a1-ef2916cf1fe5',
  redirectUri: 'https://javascript-sdk.smartcar.com/redirect-2.0.0?app_origin=http://localhost:3000',
  scope: ['read_vehicle_info', 'read_odometer'],
  testMode: true,
  onComplete: async (err, code) => {
    if(err)
      return err
      console.log(code)
      const vehicles = await fetch('https://api.smartcar.com/v1.0/vehicles')
      console.log(vehicles)
  }
})
