var map,
    markerCluster = null,
    markers = [];

$(document).ready(function(){

	initGoogleMaps();
  
  addUserLocation(1);
  
  markerCluster = new MarkerClusterer(map, markers);
  drawMarkers(); 

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

function addUserLocation(count) {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition( function(position) {
    
      for(var i=0; i<count; i++){
        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var marker = new google.maps.Marker({position: latlng});
        markerCluster.addMarker(marker);
      }
    });

  }
}

function addSearchLocation(address, count){
  if (address){
    var geocodingBase = 'http://maps.googleapis.com/maps/api/geocode/json?address=';
    var geocodingURL = geocodingBase + encodeURIComponent(address) + '&sensor=false';

    $.getJSON(geocodingURL).success( function(data, reply){
      for(var i=0; i<count; i++){
        var latlng = new google.maps.LatLng(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);
        var marker = new google.maps.Marker({position: latlng});
        markerCluster.addMarker(marker);
      }
    })
  } else {
    addUserLocation(count);
  }

}

function addMarkers(lat, lng, count){

  for(var i=0; i<count; i++){

    var some_location = new google.maps.LatLng(lat, lng);
    var some_marker = new google.maps.Marker({position: some_location});
    markers.push(some_marker);
  }
}

function drawMarkers(){
  console.log("Drawing!");
  console.log(markers);
 markerCluster = new MarkerClusterer(map, markers, {zoomOnClick: false}); 
}
