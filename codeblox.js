var request = require('request')

module.exports.default = (event, context, callback) => {
	console.log(event)
	console.log(process.env.WEATHER_API_KEY);
  request.get(`http://api.openweathermap.org/data/2.5/forecast?appid=${process.env.WEATHER_API_KEY}&lat=${event.input[0]}&lon=${event.input[1]}`, (err, res, body) => {
    const weather = JSON.parse(body)
    console.log(weather)

    // let rain = weather.hourly.data.find(d => d.precipProbability >= 0.5 && d.precipType === 'rain')
    // callback(null, Boolean(rain))
  })
}