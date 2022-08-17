//https://us1.locationiq.com/v1/reverse?key=pk.60a7cdb237be36fa0a25fb1796029f3b&lat=53.958332&lon=-1.080278&format=json


/////////////////
//https://us1.locationiq.com/v1/reverse?key={access _}&lat={latitude}&lon={longitude}&format=json
//
const request = require('postman-request');

const getCountry = (latitude, longitude, visibility, humidity, weather, temperature,description, address, callBackFn) => {
    const access_key = 'pk.60a7cdb237be36fa0a25fb1796029f3b'
    const countryURL =`https://us1.locationiq.com/v1/reverse?key=${access_key}&lat=${latitude}&lon=${longitude}&format=json`

    request({url : countryURL, json: true}, (error, response, body) => {
        if (error) {
            callBackFn('Unable to find location', undefined)
        }else {
            callBackFn(undefined, {
                country:body.address.country,
                visibility,
                humidity,
                weather,
                temperature,
                description,
                address
            })
            
        }
    })
}

// getCountry(43.958, 3.75, (error, data) =>{
//     if(error) {
//         console.log('Error', error)
//     }else {
//         console.log('Data', data)
//     }
    
// });
module.exports = getCountry