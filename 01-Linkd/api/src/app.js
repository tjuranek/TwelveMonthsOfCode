const express = require("express");
const bodyParser = require('body-parser');

var db = 'database';

var linkRoutes = require('./link/link.routes');
const app = express();

var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended: true});

var router = express.Router();

db();

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader("Access-Control-Allow-Credentials", "true");
     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
   next();
 });

app.use('/api',router);

linkRoutes(router);

module.exports = app;