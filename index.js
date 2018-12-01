require('dotenv').config();

const   smartcar        = require('smartcar'),
        express         = require('express'),
        bodyParser      = require('body-parser'),
        clientId        = process.env.CLIENTID,
        clientSecret    = process.env.CLIENTSECRET,
        redirectUri     = process.env.REDIRECTURI,
        port            = 8000;

let app = express();

// Client setup
const Client = new smartcar.AuthClient({
    clientId,
    clientSecret,
    redirectUri,
    scope: ['read_vehicle_info'],
    testMode: true,
});

/**
 * Redirect to smart car login
 */
app.get('/', (req, res) =>{

    const link = Client.getAuthUrl({state: 'passive'});
    res.redirect(link);

});

/**
 * Response from contacting smart car directly
 */
app.get('/callback', (req, res, next) => {

    let access;
    if(req.query.error){
        // the user denied your requested permissions
        return next(new Error(req.query.error));
    }

    return Client.exchangeCode(req.query.code)
        .then(_access => {
            // in a production app you'll want to store this in some kind of persistent storage
            // todo: store this access token key in some database to access user and vehicles by brand
            access = _access;

            //todo: remove this, testing purposes only
            console.log(_access);
            // get the user's vehicles
            return smartcar.getVehicleIds(access.accessToken);
        })
        .then(res => {
            // instantiate first vehicle in vehicle list
            const vehicle = new smartcar.Vehicle(res.vehicles[0], access.accessToken);
            // get identifying information about a vehicle
            return vehicle.info();
        })
        .then(data => {
            console.log(data);
            // {
            //   "id": "36ab27d0-fd9d-4455-823a-ce30af709ffc",
            //   "make": "TESLA",
            //   "model": "Model S",
            //   "year": 2014
            // }

            // json response will be sent to the user
            res.json(data);
        });


});

/**
 * Gets all the vehicles info for a certain access token
 */
app.get('/vehicles/info/:token', (req, res) => {

    let accessToken  = req.params.token;
    smartcar.getVehicleIds(accessToken)
        .then(response => {
            return response.vehicles;

        })
        .map(vid =>  new smartcar.Vehicle(vid, accessToken).info())
        .then( vehicle => {
            res.json(vehicle);
            console.log(vehicle)
    });

});


app.get('/user/:token', (req, res) => {

    let accessToken  = req.params.token;

    smartcar.getUserId(accessToken)
        .then(function(response) {
            res.json(response);
        });

});

app.listen(port, ()=>{
    console.log(`App running on localhost:${port}`);
});