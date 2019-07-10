const request = require('request')

function weather(city, callback) {
    request.get(`http://api.apixu.com/v1/current.json?key=11f04876365c41ddb1b113707191007&q=${city}`, function (err, response, body) {
        const outserver = JSON.parse(body)
        callback(outserver)
    })
}
module.exports = weather
