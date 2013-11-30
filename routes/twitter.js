var Twit = require('twit'),
	util = require('util'),
	string = require('string'),
	check = require('validator').check;

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
		date = req.body.date,
		radius = req.body.radius,
		happyTweets = req.body.sentimentalTweets ? true : false,
		formSubmitted = true;

	console.log('hashtags: '+hashtags);
	console.log('date: '+date);
	console.log('radius: '+radius);
	console.log('happyTweets: '+happyTweets);
	console.log('formSubmitted: ' + formSubmitted);

	// Checks to see if user entered at least 2 hashtags
	//check(hashtags, 'Please enter at least 2 hashtags').regex(/^([a-zA-Z0-9]+(\s?)){2,10}$/i);

	var tagsArray = hashtags.split(" ");

	for(var tag_index in tagsArray){
		if(tagsArray[tag_index].charAt(0) != '#')
			tagsArray[tag_index] = "#" + tagsArray[tag_index];
		console.log('Here is number ' + tag_index + ': ' + tagsArray[tag_index]);
	}

	var query = tagsArray.join(" ");
		query += " since:" + date;
		query += " near:Burlington, VT";
		query += " within:" + radius + "mi";

	console.log(query);
	//query = encodeURIComponent(query);
	//console.log(query);


	T.get('search/tweets', { q: query, count: 100 }, function(err, reply) {
		console.log(util.inspect(reply));
		console.log('Error: ' + err);
 		res.render('index', {
 			reply: reply,
 			formSubmitted: true,
 			title: 'Search Results'
 		});
	});
};


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