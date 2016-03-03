var express = require('express');
var router = express.Router();
var indexRoute = function(app){
	app.get('/', function(req, res) {
		res.render('index');
	});
};
module.exports = indexRoute;