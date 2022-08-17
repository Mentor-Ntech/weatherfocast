
//http://api.openweathermap.org/data/2.5/weather?q=lagos&units=metric&appid=7dd77c159e6075707c7ab3c328676acf;


///////////////////
//http://api.openweathermap.org/data/2.5/weather?q={}&units=metric&appid={access_key};
///////////////////////////
const request = require('postman-request')

const geoCode = (address, callBackFn) => {
    const access_key = '7dd77c159e6075707c7ab3c328676acf';
    const geoCodeURL = `http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${access_key}`

    request({url: geoCodeURL, json: true}, (error, response, body) => {
        if(error) {
            callBackFn('Unable to find location!', undefined)
        }else {
            callBackFn(undefined, {
                latitude: body.coord.lat,
                longitude: body.coord.lon,
                visibility: body.visibility,
                humidity: body.main.humidity,
                weather: body.weather[0].main,
                description: body.weather[0].description,
                temperature: body.main.temp,
                address: body.name
            })
            
        }
    
    })
}

module.exports = geoCode

// const geoCodeURL = 'http://api.openweathermap.org/data/2.5/weather?q=lagos&units=metric&appid=7dd77c159e6075707c7ab3c328676acf'
// request({url: geoCodeURL, json: true}, (error, response, body) => {
//     if(error) {
//         console.log('Unable to find location!')
//     }else {
//         console.log(body)
//     }
    
// })