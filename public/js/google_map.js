var map;

$(document).ready(function(){
	
	initGoogleMaps();
	setMapLocationToUser();
	
});

// Initialize Google Maps
var initGoogleMaps = function(){
		map = new GMaps({
        el: '#googleMap',
        lat: 44.4758,
        lng: -73.2119,
        zoom: 12,
        zoomControl : true,
        zoomControlOpt: {
            style : 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl : false,
        streetViewControl : false,
        mapTypeControl: false,
        overviewMapControl: false
      });
};

// Set the location of the map to user Geolocation
var setMapLocationToUser = function(){
	GMaps.geolocate({
  		success: function(position) {
    		map.setCenter(position.coords.latitude, position.coords.longitude);
  		},
  		error: function(error) {
    		alert('Geolocation failed: '+error.message);
  		},
  		not_supported: function() {
    		alert("Your browser does not support geolocation");
  		},
  		always: function() {
    		
  		}
	});
};

var getGeoFromAddress = function(address){
	GMaps.geocode({
  		address: $('#address').val(),
  		callback: function(results, status) {
    		if (status == 'OK') {
      			var latlng = results[0].geometry.location;
      			map.setCenter(latlng.lat(), latlng.lng());
      			map.addMarker({
        			lat: latlng.lat(),
        			lng: latlng.lng()
      			});
    		}
  		}
	});
};

/*
function initialize() {
  var mapOptions = {
    zoom: 11,
    center: new google.maps.LatLng(44.4758, -73.2119)
  };
  map = new google.maps.Map(document.getElementById('googleMap'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);
*/