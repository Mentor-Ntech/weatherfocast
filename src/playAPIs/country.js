const { response } = require('express')
const request = require('postman-request')

// const access_Token = 'pk.60a7cdb237be36fa0a25fb1796029f3b'
// const lat = 53.958332
// const lon = -1.080278

//https://us1.locationiq.com/v1/reverse?key=pk.60a7cdb237be36fa0a25fb1796029f3b&lat=53.958332&lon=-1.080278&format=json
// const url = `https://us1.locationiq.com/v1/reverse?key=${access_Token}}&lat=${lat}&lon=${lon}&format=json`
// request({url : url, json : true },(error, _ , body) =>{
//     // console.log(body)

//     const {suburb, state, country, road, city} = body.address
//     console.log('the surrounded area', suburb);
//     console.log('the state is situated in', state);
//     console.log('The country name is', country);
//     console.log('The roadside of the', road);
//     console.log('The city of ', city);
// })

 const geoCry = (address, callBack) => {
 const lat = 53.958332
 const lon = -1.080278
    const url = `https://us1.locationiq.com/v1/reverse?key=${address}}&lat=${lat}&lon=${lon}&format=json`

    request({url : url, json : true },(error, _, body) =>{
        console.log(body)

        if (error) {
          callBack('Unable to connect to location services', undefined)   
        }else {
            callBack(undefined, {
                state: body[0].address.state,
                country:body[0].address.country,
                city: body[0].address.city

            })
             
        }
    })
}

geoCry('New York', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
}) 