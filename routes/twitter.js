var Twit = require('twit'),
	util = require('util'),
	string = require('string');

var twitterCredentials = require(require('path').normalize(__dirname + '/../scripts/twitter_credentials.js'));

var T = new Twit( twitterCredentials.keys() );
/*
exports.search = function(req, res){
	var hashtag1 = req.params.hashtag1,
		hashtag2 = req.params.hashtag2;

	res.render(require('path').normalize(__dirname + '/../views/twitter.ejs') , {
		title: 'Twitter Results',
		hashtag1: hashtag1,
		hashtag2: hashtag2
	})
};
*/

exports.search = function(req, res){
	
	var hashtags = req.body.hashtags,
		radius = req.body.radius,
		happyTweets = req.body.happyTweets ? true : false,
		formSubmitted = true;

	T.get('search/tweets', { q: 'banana since:2011-11-11', count: 100 }, function(err, reply) {
		//console.log(util.inspect(reply));
		console.log('Error: ' + err);
 		res.render('index', {
 			reply: reply,
 			formSubmitted: true,
 			title: 'Search Results'
 		});
	});


	/*
	res.render('index', {
		hashtag1: req.body.hashtag1,
		hashtag2: req.body.hashtag2,
		radius: req.body.radius,
		happyTweets: req.body.happyTweets ? true : false,
		formSubmitted: true
	});
	
};

var processHashtags = function(string){
	var processedString = '';
	while( hashtag != '' ){
		processedString += 
	}
};
*/