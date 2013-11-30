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

	$("input#hashtags").blur(function(){

		$("input#hashtags").val($.trim( $("input#hashtags").val() ));

		var hashtagInputs = $("input#hashtags").val().split(' ');
		console.log('You entered ' + hashtagInputs.length + ' hashtags');

		if(hashtagInputs.length < 2){
			$("<div class='alert alert-danger'>Please enter at least 2 hashtags</div>").insertAfter(("input#hashtags"));
		}
	});

});