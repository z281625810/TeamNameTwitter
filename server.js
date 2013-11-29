var express = require('express'),
	engine = require('ejs-locals'),
	sentimental = require('Sentimental'),
	//twitter = require('twitter'),
	routes = require('./routes'),
	twitterRoute = require('./routes/twitter'),
	http = require('http'),
	util = require('util');

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

http.createServer(app).listen(3000);

console.log('Server running at http://localhost:3000');


app.get('/', routes.index);
// ============================================================
// Twitter Stuff
// ============================================================
app.post('/twitter', twitterRoute.search);
//console.log(util.inspect(routes));
