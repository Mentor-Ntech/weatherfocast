const request = require('postman-request')

// const countryName = 'Nigeria'

// const url = `https://restcountries.com/v3.1/name/${countryName}`

//  request({url: url, json: true}, (error, _, body) =>{
//         console.log(body)
// })

const currency = 'naira';

const url = `https://restcountries.com/v3.1/currency/${currency}`
request({url: url, json: true}, (error, _, body) =>{
    console.log(body)
})



