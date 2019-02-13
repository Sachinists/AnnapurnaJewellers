'use strict';

const
  express = require('express'),
  http = require('http'),
  path = require('path'),
  bodyParser = require('body-parser'),
  app = express().use(bodyParser.json());
require('dotenv').config();

app.use(express.static(__dirname+'/dist/frontend'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname));
});

http.createServer(app).listen( 1337, () => console.log('Your server is listening in port: ' + process.env.PORT || 1337));