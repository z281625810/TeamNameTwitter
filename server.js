var express = require('express'),
	engine = require('ejs-locals'),
	sentimental = require('Sentimental'),
	twitter = require('twitter'),
	routes = require('./routes'),
	http = require('http');

var app = express();

app.engine('ejs', engine);

app.configure(function(){
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.set('view options', { layout:'layout.ejs' }); 
	app.use(express.static(__dirname + '/public'));
	app.use(express.bodyParser());
  	app.use(express.methodOverride());
  	app.use(app.router);
});

// ============================================================
// Twitter Stuff
// ============================================================
//var tweet_helper = require('./scripts/twitter.js');

//tweet_helper.authentificate();
//tweet_helper.verifyCredentials();

//tweet_helper.search('#BTV AND #Vermont');


http.createServer(app).listen(3000);

app.get('/', routes.index);

console.log('Server running at http://localhost:3000');