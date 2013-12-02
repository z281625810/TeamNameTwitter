$(document).ready(function(){

	/*
	var replaceLastWord = function(inputString) {
		
		var lastWord = $("#inputhashtags").val().split(/[\s-]/).pop(),
			newLastWord = lastWord;

		// Add # if not the first character
		if(lastWord.substring(0,1) != '#')
					newLastWord = '#' + lastWord;

		inputString = inputString.replace( $("input#hashtags").val().split(/[\s-]/).pop(), newLastWord );

		return inputString;
	};

	// Hashtags input validation 

	// Change the last hashtag after one word is typed
	$("input#hashtags").keypress(function(event){
		if(event.keyCode == 32){
			$("input#hashtags").val( replaceLastWord($("input#hashtags").val() ) );
		}
	});

	// Change the last hashtag when input looses focus
	$("input#hashtags").blur(function(){
		$("input#hashtags").val( replaceLastWord($("input#hashtags").val() ) );
	});
	*/

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

		$("input#hashtags").val($.trim( $("input#hashtags").val() ));

		var hashtagInputs = $("input#hashtags").val().split(' ');
		console.log('You entered ' + hashtagInputs.length + ' hashtags');

		if(hashtagInputs.length < 2){
			//$("<div class='alert alert-danger'>Please enter at least 2 hashtags</div>").insertAfter(("input#hashtags"));
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