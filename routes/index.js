var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config/config');
var students = [
	'Marissa',
	'Merilee',
	'Chris',
	'Stephen',
	'Chad',
	'Shane',
	'Ian',
	'Drew',
	'Guido',
	'Porscha',
	'Carla',
	'Yingrong',
	'Daniel',
	'Nicolas',
	'Hayes',
	'Michael'
	];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { studentsArray: students });
});

router.get('/reverse', function(req, res, next) {
  res.render('reverse', { studentsArray: students });
});

router.get('/weather', function(req, res, next) {
	res.render('weather', {
		config: config.apiKey
	});
})

module.exports = router;
