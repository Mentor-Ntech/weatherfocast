const request = require('postman-request')


//Weatherstack data
// const accessKey = 'c1b9e03070180ae424461b620924196a';

// const lat = '37.8267'
// const lng = '-122.4233'

// const baseURL = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${lat},${lng}`

// request(baseURL, (error, response, body) =>{
    //     const data = JSON.parse(body);
    //     console.log(data)
    // })
    
    //http://api.weatherstack.com/current?access_key=c1b9e03070180ae424461b620924196a&query=lat,lng;
    
    
    //Openweathermap data
const geoCode =(address, callBackFn)=>{
        const accessKey = '7dd77c159e6075707c7ab3c328676acf'; 
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${accessKey}`

    request({url: url, json: true}, (error, _, body) =>{
        // console.log('type of data is ==>', typeof(data))
        if (error) {
         callBackFn('Error:Unable to connect', undefined)
         
        }else {
          const{temp, feels_like} = body.main; //object notation
            // console.log(temp)
            // console.log(feels_like)
            //  console.log(body.main.feel) 
            
            //  callBackFn(undefined, `The temperature is ${Math.trunc(temp)} degree celcius`)  
        }
             
        
    });
}
 
// geoCode('chelsea')   
// geoCode('dubai')   
// geoCode('Osun')   
    
    
    
    
    //http://api.openweathermap.org/data/2.5/weather?q=city&units=metric&appid=apiKey;
    //http://api.openweathermap.org/data/2.5/weather?q=Texas&units=metric&appid=7dd77c159e6075707c7ab3c328676acf
module.exports = geoCode