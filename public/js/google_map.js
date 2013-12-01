var map;
function initialize() {
  var mapOptions = {
    zoom: 11,
    center: new google.maps.LatLng(44.4758, -73.2119)
  };
  map = new google.maps.Map(document.getElementById('googleMap'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);