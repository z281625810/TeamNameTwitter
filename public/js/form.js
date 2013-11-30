$(document).ready(function(){

	// Hashtags input validation 
	$("#hashtags").keypress(function(event){
		if(event.keyCode == 32)
			console.log('Space pressed');
	});

});