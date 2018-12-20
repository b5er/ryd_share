mapboxgl.accessToken = 'pk.eyJ1IjoicGVyZG9tb2giLCJhIjoiY2pwNjhxdW5pMWJrNDNsczBhbnM0YnB0aCJ9.1foZ2zl63oD45LNz63WCxA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/dark-v9', //hosted style id
    // center: [-72.931085661344, 41.313722549999994], // starting position
    center: [0,0], // starting position
    // zoom: 15 // starting zoom
});


map.on('load', function() {
    map.loadImage('/img/dot.png', function(error, image) {
        if (error) throw error;
        map.addImage('dot', image);
        map.addLayer(newDot( -105.82012176513672, 37.016571044921875, "dot1"));
        map.addLayer(newDot( -105.57901763916016, 37.462100982666016, "dot2"));
        map.addLayer(newDot(-106.50420379638672, 37.60503005981445, "dot3"));

    });

});

function newDot(lng, lat, id){



    return {
        "id": id,
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [lng, lat]
                    }
                }]
            }
        },
        "layout": {
            "icon-image": "dot",
            "icon-size": .75
        }
    }
}