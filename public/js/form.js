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

	$("input#hashtags").blur(function(){
		// Trim the spaces
		$("input#hashtags").val($.trim( $("input#hashtags").val() ));

		//if ( var hashtagInputs = $("input#hashtags").val().split(' ').length < 2 )
			console.log('You entered ' + hashtagInputs.length + ' hashtags');

		if(hashtagInputs.length < 2){
			
		}
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
	});

});

var getUserLocation = function(){
	var coords = new Array();
	GMaps.geolocate({
  		success: function(position) {
  			coords['lat'] = position.coords.latitude;
  			coords['lng'] = position.coords.longitude;
  			return coords;
    		//map.setCenter(position.coords.latitude, position.coords.longitude);
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