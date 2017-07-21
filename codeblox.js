var request = require('request')

module.exports.default = (event, context, callback) => {
  request.get(`http://api.openweathermap.org/data/2.5/forecast?appid=${process.env.WEATHER_API_KEY}&lat=${process.env.CITY_LAT}&lon=${process.env.CITY_LON}`, (err, res, body) => {
    const weather = JSON.parse(body)
    const weatherToday = weather.list[0];

    let rain = weatherToday.rain.length > 0
    callback(null, Boolean(rain))
  })
}