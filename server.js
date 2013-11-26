var express = require('express');
var app = express();

var sentimental = require('Sentimental');
var ejs = require('ejs');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.listen(3000);
console.log('Server running at http://localhost:3000');