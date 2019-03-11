const fetch = require("node-fetch");

const getWeatherForCity = async(req, res, next) => {
	let weather = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + req.query.city + "&APPID=" + process.env.apiKey)
		.then(response => response.json())
		.then(data => data);
	
	req.weather = weather;
	next();
}

const getWeatherForCoordinates = async(req, res, next) => {
	// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
	let weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${req.query.lat}&lon=${req.query.lon}&APPID=${process.env.apiKey}`)
		.then(response => response.json())
		.then(data => data);
	
	req.weather = weather;
	next();
}

module.exports = { getWeatherForCity, getWeatherForCoordinates };