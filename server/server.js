var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);

var fs = require('fs');

// -- SERVE STATIC FILES and JSON

app.use(express.static('public'));

// -- START SERVER

var port = process.env.PORT || 3030;
console.log('Listening on port', port);
server.listen(port);
