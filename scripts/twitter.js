var twitter_credentials = require('twitter_credentials.js');

var twit;

exports.authentificate = function(r){
	twit = new twitter(
		twitter_credentials.keys();
	);
};

exports.verifyCredentials = function(r){
	twit.verifyCredentials(function(data) {
        console.log(util.inspect(data));
    });
}