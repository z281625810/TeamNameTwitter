$(document).ready(function(){

	// Get today's date
	var today = new Date();
	// Set default date on form for two weeks ago
	$('#date').val(new Date(
			today.getFullYear(),
			today.getMonth(), 
			today.getDate() - 14
		).toJSON().slice(0,10));

	// Sync miles input value with range input
	$('input#radius').change(function(){
		$('input#miles').val($('input#radius').val());
	});

	// Sync range input value with miles input
	$('input#miles').change(function(){
		$('input#radius').val($('input#miles').val());
	});	

	if( !$('#search_location').val() ){
			setUserLocation();
		}

	$("input#hashtags").blur(function(){
		// Trim the spaces
		$("input#hashtags").val($.trim( $("input#hashtags").val() ));

		//if ( var hashtagInputs = $("input#hashtags").val().split(' ').length < 2 ){}
		//	console.log('You entered ' + hashtagInputs.length + ' hashtags');

		//if(hashtagInputs.length < 2){
			
		//}
	});

		var hashes = $("input#hashtags").val().split(' ').length;
		console.log("How many hashtags" + hashes);

	$("#tweets_form").submit(function(event){

		var hashes = $("input#hashtags").val().split(' ').length;
		console.log("How many hashtags" + hashes);
		if ( $("input#hashtags").val().split(' ').length < 2 ){
			alert('Please enter at least 2 hashtags');
			event.preventDefault();
		}
		if( !$('#search_location').val() ){
			setUserLocation();
		}
	});

});

var setUserLocation = function(){
	var coords = new Array();
	GMaps.geolocate({
  		success: function(position) {
  			console.log('SETTING USER LOCATION');
  			coords['lat'] = position.coords.latitude;
  			coords['lng'] = position.coords.longitude;
  			
  			var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  			var geocoder = new google.maps.Geocoder();

  			geocoder.geocode({'latLng': latlng}, function(results, status) {
    			if (status == google.maps.GeocoderStatus.OK) {
    				console.log(results[1].address_components[2]);
    				console.log(results[1].address_components[4]);
    				console.log(results[1].address_components[3]);
    				var user_location = results[1].address_components[2].long_name + ', ' + results[1].address_components[4].short_name;
    				console.log("USER: " + user_location);
   					$('input#search_location').val( user_location );
      			};
  			});			


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