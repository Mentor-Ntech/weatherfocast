const request = require('postman-request');

const language ='german'

const url = `https://restcountries.com/v3.1/lang/${language}`
request({url : url, json: true },(error, _, body)=> {
    console.log(body)
})