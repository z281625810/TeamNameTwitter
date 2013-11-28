var express = require('express'),
	ejs = require('ejs'),
	sentimental = require('Sentimental'),
	routes = {
		index: require('./routes').index,
		twitter: require('./routes/twitter.js')
	},
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
//tweet_helper.search('#BTV AND #Vermont');

app.get('/twitter/:hashtag1/:hashtag2', routes.twitter.search);

http.createServer(app).listen(3000);

console.log('Server running at http://localhost:3000');