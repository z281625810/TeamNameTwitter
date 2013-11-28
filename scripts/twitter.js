var twitter = require('twitter'),
	util = require('util');

var twitter_credentials = require( __dirname + '/twitter_credentials.js');

var twit;

// Prettify Twitter results
var prettifyTweets = function(data){
	var counter = 1;
	for(var i = 0; i < data.length; i++)
	{
		console.log('Tweet #' + counter++);
		console.log('User: ' + data[i].user.name);
		console.log('Profile Image URL: ' + data[i].user.profile_background_image_url);
		console.log('Text: ' + data[i].text);
		console.log('Date: ' + data[i].created_at);
		console.log('Geolocation: ' + data[i].geo);
		console.log('Coordinates: ' + data[i].coordinates);
		console.log();
	}

}

exports.authentificate = function(r){
	twit = new twitter(
		twitter_credentials.keys()
	);
}

exports.verifyCredentials = function(r){
	twit.verifyCredentials(function(data) {
        console.log(util.inspect(data));
    });
}

exports.search = function(hashtag1, hashtag2){

	twit.search(hashtag1, function(data){
		//console.log(data);
		prettifyTweets(data.statuses);
	})
}