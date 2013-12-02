var map;

$(document).ready(function(){

  var latlng = new Array();
	
	initGoogleMaps();
	setMapLocationToUser();
  
  if( formSubmitted ) {
    console.log("DAAAAAAAAAAAAAAAAAAA");
    console.log('user_location: '+user_location);

    if (user_location == '') {
      console.log("In Get user geo");
      var latlng = getUserGeolocation();
      console.log("Function: " + getUserGeolocation());
    } else {
      console.log("In Get Geo from address");
      var latlng = getGeoFromAddress(user_location, 20);
    }

    console.log(latlng);
}
	
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
        //user_coords['lat'] = position.coords.latitude;
        //user_coords['lng'] = position.coords.longitude;
        //console.log(user_coords);
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

var getUserGeolocation = function(){  
  GMaps.geolocate({
      success: function(position) {
        var latlng = new Array();
        latlng['lat'] = position.coords.latitude;
        latlng['lng'] = position.coords.longitude;
        console.log(latlng);

        return(latlng);
        
        //map.setCenter(position.coords.latitude, position.coords.longitude);
        //user_coords['lat'] = position.coords.latitude;
        //user_coords['lng'] = position.coords.longitude;
        //console.log(user_coords);
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

var addMarkers = function(){
  console.log(user_coords['lat']);
  console.log(user_coords['lng']);
  for (var i = 0; i < 20; i++) {    
    map.addMarker({
      lat: user_coords['lat'],
      lng: user_coords['lng']
    });
  }
};

var getGeoFromAddress = function(user_location, markers){
  console.log(user_location);
	GMaps.geocode({
  		address: user_location,
  		callback: function(results, status) {
    		if (status == 'OK') {
      			var latlng = results[0].geometry.location;
            console.log(latlng);
            //return {lat: latlng.lat(), lng: latlng.lng()};
            var markers = [];
      			for(var i=0; i<markers; i++){
              markers.push(new Gmarker(latlng));

            };

            console.log(markers);

            map.setCenter(latlng.lat(), latlng.lng());
              // map.addMarker({
              //   lat: latlng.lat(),
              //   lng: latlng.lng()
              //});
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