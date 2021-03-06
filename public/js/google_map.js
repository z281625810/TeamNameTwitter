
var map,
markerCluster = null,
    markers = [];

$(document).ready(function() {

    initGoogleMaps();

    markerCluster = new MarkerClusterer(map, []);

    initClusters();

});

function initClusters(stuff1, stuff2) {
    if (markerCluster == null) {
        addUserLocation(1, stuff1, stuff2);

        //drawMarkers(stuff1, stuff2);

    } else {
        addSearchLocation(stuff1, stuff2);
    }
    console.log(stuff1);

}

// Initialize Google Maps
var initGoogleMaps = function() {

    var UScenter = new google.maps.LatLng(38.4758, - 93.2119);

    map = new google.maps.Map(document.getElementById("googleMap"), {
        center: UScenter,
        zoom: 4,
        zoomControl: true,
        zoomControlOpt: {
            style: 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false
    });
};

function addUserLocation(count, stuff1, stuff2) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {



            markerCluster = new MarkerClusterer(map, markers, {
                zoomOnClick: false
            });
            //drawMarkers();

            for (var i = 0; i < count; i++) {
                var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                var marker = new google.maps.Marker({
                    position: latlng
                });
                markerCluster.addMarker(marker);
            }

            addSearchLocation(stuff1, stuff2);
        });

    }
}

function addSearchLocation(address, count) {

    console.log(typeof markerCluster);

    if (typeof address == 'string') {
        if (address) {
            var geocodingBase = 'http://maps.googleapis.com/maps/api/geocode/json?address=';
            var geocodingURL = geocodingBase + encodeURIComponent(address) + '&sensor=false';

            $.getJSON(geocodingURL).success(function(data, reply) {
                for (var i = 0; i < count; i++) {
                    var latlng = new google.maps.LatLng(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);
                    var marker = new google.maps.Marker({
                        position: latlng
                    });
                    markerCluster.addMarker(marker);
                }
            })
        } else {
            // addUserLocation(count);
        };
    } else {
        console.log(typeof markerCluster);
        console.log(markerCluster);
        for (var i = 0; i < count; i++) {
            if (address[i].geo) {
                var latlng = new google.maps.LatLng(address[i].geo.coordinates[0], address[i].geo.coordinates[1]);
                var marker = new google.maps.Marker({
                    position: latlng
                });
                markerCluster.addMarker(marker);
            }
        }
    }

}

function addMarkers(lat, lng, count) {
    /*
  for(var i=0; i<count; i++){

    var some_location = new google.maps.LatLng(lat, lng);
    var some_marker = new google.maps.Marker({position: some_location});
    markers.push(some_marker);
  }
  */
}

function drawMarkers() {
    console.log("Drawing!");
    console.log(markers);
    //markerCluster = new MarkerClusterer(map, markers, {zoomOnClick: false}); 
    //addSearchLocation(stuff1, stuff2);
} 