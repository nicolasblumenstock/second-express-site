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
var mainUrl = `http://api.openweathermap.org/data/2.5/weather?zip=`
var forecastUrl = `http://api.openweathermap.org/data/2.5/forecast/daily?zip=`





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { studentsArray: students });
});

router.get('/reverse', function(req, res, next) {
  res.render('reverse', { studentsArray: students });
});

router.get('/weather', function(req, res, next) {
	res.render('weather', {
		// config: config.apiKey
	});
});

router.post('/weather', (req,res)=>{
	var zipCode = req.body.zipCode;
	var currentDayUrl = `${mainUrl}${zipCode},us&units=imperial&appid=${config.apiKey}`;
	var multiDayUrl = `${forecastUrl}${zipCode},us&units=imperial&cnt=5&appid=${config.apiKey}`;
	request.get(currentDayUrl,(error,response,currentData)=>{
		var currentDay = JSON.parse(currentData)
		request.get(multiDayUrl,(error,response,multiData)=>{
			var multiDay = JSON.parse(multiData)
			res.render('weather_loaded',{
				currentDay: currentDay,
				multiDay: multiDay,
			})
		})
	})

})

module.exports = router;
