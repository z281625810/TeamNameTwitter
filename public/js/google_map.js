var map,
    markerCluster = null,
    markers = [];

$(document).ready(function(){

	initGoogleMaps();

  addUserLocation();
/*
  for (var i = 0; i < 100; ++i) {
    var latlng = new google.maps.LatLng(38.4758, -93.2119);
    var marker = new google.maps.Marker({position: latlng});
    markers.push(marker);
  };
  */

});

// Initialize Google Maps
var initGoogleMaps = function(){

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

function addUserLocation() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition( function(position) {
      var user_location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      var user_marker = new google.maps.Marker({position: user_location});

      markers.push(user_marker);
      // Call the next
      addSearchLocation('Burlington');
    });
  }
}

function addSearchLocation(address){
  drawMarkers();
}

function drawMarkers(){
 markerCluster = new MarkerClusterer(map, markers, {zoomOnClick: false}); 
}