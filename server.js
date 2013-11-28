var express = require('express'),
	ejs = require('ejs'),
	sentimental = require('Sentimental'),
	routes = require('./routes'),
	http = require('http');

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

tweet_helper.search('#BTV AND #Vermont');

//app.get('/', routes.searchTweets);

http.createServer(app).listen(3000);

console.log('Server running at http://localhost:3000');