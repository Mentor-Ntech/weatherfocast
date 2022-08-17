//https://restcountries.com/v2/name/nigeria

/////
//https://restcountries.com/v2/name/nigeria
//

const request = require('postman-request')

const getCountryFlag = (country, visibility, humidity, weather, temperature, description, address, callBackFn) => {
    const countryFlagURL = `https://restcountries.com/v2/name/${country}`
    request({url: countryFlagURL, json: true}, (error, response, body) => {
        if(error) {
            callBackFn('Unable to find location', undefined)
        }else{
            callBackFn(undefined, {
                country: body[0].cioc,
                flag: body[0].flags .png,
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

// getCountryFlag('nigeria', (error, data) => {
//     if (error) {
//         console.log('Error', error) 
//     }else {
//         console.log('Data', data)
//     }
    
    
// })

module.exports = getCountryFlag