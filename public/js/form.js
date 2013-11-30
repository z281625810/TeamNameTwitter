$(document).ready(function(){

	var replaceLastWord = function(inputString,newstring) {
		
		var lastWord = $("input#hashtags").val().split(/[\s-]/).pop(),
			newLastWord = lastWord;

		// Add # if not the first character
		if(lastWord.substring(0,1) != '#')
					newLastWord = '#' + lastWord;

		inputString = inputString.replace( lastWord, newLastWord );

		return inputString;
	};

	// Hashtags input validation 

	// Change the last hashtag after one word is typed
	$("input#hashtags").keypress(function(event){
		if(event.keyCode == 32){
			$("input#hashtags").val( replaceLastWord($("input#hashtags").val(), 'da') );
		}
	});

	// Change the last hashtag when input looses focus
	$("input#hashtags").blur(function(){
		$("input#hashtags").val( replaceLastWord($("input#hashtags").val(), 'da') );
	});

});