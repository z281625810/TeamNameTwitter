var express = require('express'),
	// Routes
	routes = {
		index: require('./routes').index,
		twitter: require('./routes/twitter.js')
	},
	ejs = require('ejs'),
	sentimental = require('Sentimental'),
	http = require('http'),
	twit = require('twit');

var app = express();

app.configure(function(){
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.use(express.static(__dirname + '/public'));
	app.use(express.bodyParser());
  	app.use(express.methodOverride());
  	app.use(app.router);
});

app.get('/', routes.index);

// ============================================================
// Twitter Stuff
// ============================================================
var tweet_helper = require('./scripts/twitter.js');

tweet_helper.authentificate();
//tweet_helper.verifyCredentials();
//tweet_helper.search('#BTV AND #Vermont');

var twitter_credentials = require( __dirname + '/scripts/twitter_credentials.js');
var T = new twit(twitter_credentials.keys());

T.get('search/tweets', { q: 'banana since:2011-11-11', count: 100 }, function(err, reply) {
  console.log(reply);
});

app.get('/twitter/:hashtag1/:hashtag2', routes.twitter.search);

http.createServer(app).listen(3000);

console.log('Server running at http://localhost:3000');