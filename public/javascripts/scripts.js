$(document).ready(function(){
	var dates = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];
	var currTemps = {
		curr: Math.round(currentDay.main.temp),
		high: currentDay.main.temp_max,
		low: currentDay.main.temp_min,
	}
	var locationName = currentDay.name;
	var currWeather = currentDay.weather[0].description;
	var currIcon = currentDay.weather[0].icon + '.png';
	var currDate = new Date((currentDay.dt)*1000);
	var currHumidity = currentDay.main.humidity;
	var currWindSpeed = currentDay.wind.speed;
	var currWindDirection = currentDay.wind.deg;
	var currentRise = new Date((currentDay.sys.sunrise)*1000);
	var currentRiseTime = currentRise.toLocaleTimeString();
	var currentSet = new Date((currentDay.sys.sunset)*1000);
	var currentSetTime = currentSet.toLocaleTimeString();


	$('#tabday1').html(dates[currDate.getDay()])
	$('.weatherIcon').html(`<img src="http://openweathermap.org/img/w/${currIcon}" />`);
	$('.currentTemp').html(currTemps.curr + '&#8457;')
	$('.weather-description').html(currWeather)
	$('.location').html(locationName);
	$('.humidity').html(currHumidity);
	$('.wind').html(currWindSpeed);
	$('.direction').html(currWindDirection);
	$('.current-min').html(currTemps.low + '&#8457;');
	$('.current-max').html(currTemps.high + '&#8457;');
	$('.current-sunrise').html(currentRiseTime);
	$('.current-sunset').html(currentSetTime);			

	for (let i = 1; i < multiDay.list.length; i++){
		var dailyMin = multiDay.list[i].temp.min;
		var dailyMax = multiDay.list[i].temp.max;
		var dailyWeather = multiDay.list[i].weather[0].main;
		var dailyIcon = multiDay.list[i].weather[0].icon + '.png';
		var dailyDate = new Date((multiDay.list[i].dt) * 1000);


		$('#day'+(i+1)).html(`min: ${dailyMin}<br>max: ${dailyMax}<br>weather: ${dailyWeather}<br><img src='http://openweathermap.org/img/w/${dailyIcon}' />`)
		$('#tabday'+(i+1)).html(dates[dailyDate.getDay()]);
	}


	$('#myTabs a[href="#day1"]').click(function(event){
		event.preventDefault();
		$(this).tab('show');
	})
	$('#myTabs a[href="day2"]').click(function(event){
		event.preventDefault();
		$(this).tab('show');
	})
	$('#myTabs a[href="#day3"]').click(function(event){
		event.preventDefault();
		$(this).tab('show');
	})
	$('#myTabs a[href="#day4"]').click(function(event){
		event.preventDefault();
		$(this).tab('show');
	})
	$('#myTabs a[href="#day5"]').click(function(event){
		event.preventDefault();
		$(this).tab('show');
	})

})