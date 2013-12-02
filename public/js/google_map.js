var map,
    markerCluster = null;

$(document).ready(function(){

	initGoogleMaps();
  //map.setCenter(position.coords.latitude, position.coords.longitude);

/*
  getLocation(user_location, function(location){
    var latlng = new Object();
    latlng['lat'] = location.latitude;
    latlng['lng'] = location.longitude;
    console.log(latlng);
    
  });
*/
  var markers = [];
  for (var i = 0; i < 100; ++i) {
    var latlng = new google.maps.LatLng(38.4758, -93.2119);
    var marker = new google.maps.Marker({position: latlng});
    markers.push(marker);
  };

  markerCluster = new MarkerClusterer(map, markers);

  /*
  getLocation(user_location, function(coords){
    latlng['lat'] = coords.latitude;
    latlng['lng'] = coords.longitude;
    console.log(coords);
  });
*/
});

// Initialize Google Maps
var initGoogleMaps = function(){
  /*
		map = new GMaps({
        el: '#googleMap',
        lat: 38.4758,
        lng: -93.2119,
        //zoom: 12,
        zoom: 4,
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
*/
    var UScenter = new google.maps.LatLng(38.4758, -93.2119);

    map = new google.maps.Map(document.getElementById("googleMap"), 
    {
        center: UScenter,
        zoom: 4,
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

var getUserGeolocation = function(){

  GMaps.geolocate({
    success: function(position) {
      user_location['lat'] = position.coords.latitude;
      user_location['lng'] = position.coords.longitude;
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

}

function getLocation(loc, fn){

  GMaps.geolocate({
    success: function(position) {
      //user_location['lat'] = position.coords.latitude;
      //user_location['lng'] = position.coords.longitude;

      fn(position.coords);
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
}
