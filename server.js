var express = require('express'),
	routes = require('./routes'),
	http = require('http'),
	sentimental = require('Sentimental'),
	twitter = require('twitter');
var app = express();

var sentimental = require('Sentimental');
var ejs = require('ejs');


app.configure(function(){
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.use(express.static(__dirname + '/public'));
	app.use(express.bodyParser());
  	app.use(express.methodOverride());
  	app.use(app.router);
});

app.get('/', routes.index);

http.createServer(app).listen(3000);

console.log('Server running at http://localhost:3000');