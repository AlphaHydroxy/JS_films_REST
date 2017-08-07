var express = require('express');
var app = express();
// var path = require('path');

// this makes post requests work
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));
// ^^^this makes post requests work

app.use(require('./controller/index.js'));

app.use(express.static('client/build'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});