const request = require('postman-request');


const countryCity =(capital)=> {

 const url = `https://restcountries.com/v3.1/capital/${capital}`;
     request({url : url, json: true },(error, _, body)=> {
        console.log(typeof body)
        console.log(body)
     

    })


}   
countryCity('abuja')  
    // const{name, capital, population} = body[0];

    // console.log('country', name.common);
    // console.log('capital', capital[0] );          //desstructring
    // console.log('population', (population/1000000).toFixed(2))

    // const{name: countryName, capital: countryCapital, population: population} = body[0];
    // console.log('country', countryName.common);
    // console.log('capital', countryCapital[0] );               
    // console.log('population', (population/1000000).toFixed(2))  //This also desstructring and you change the name
   
    // console.log('The country is', body[0].name.common)
    // console.log('In capital city of', body[0].capital[0])
    // console.log('With the total population of', body[0].population / 1000000)
    // console.log('Our flag',body[0].flag[0])
    
// })

// }

// countrycity('abuja') 
// countrycity('paris')

// const capital = 'Abuja'
// const url = `https://restcountries.com/v3.1/capital/${capital}`;
// request({url : url, json: true },(error, _, body)=> {
//     console.log(body)
// })