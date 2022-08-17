const request = require('postman-request');

const countrycity =(capital, callBackFn)=> {
   const url = `https://restcountries.com/v3.1/capital/${capital}`;
   request({url : url, json: true },(error,_, body) => {
      console.log(body[0])

      // if (error) {
      //    callBackFn('unable to connect to server', undefined)
      // }else {
      //    const{name, capital, population} = body[0];
      // }
      if (error) {
         callBackFn('unable to connect to server', undefined)
         } else {
            callBackFn(undefined, {
               country:body[0].name.common,
              capitalcity:body[0].capital[0],
              population:body[0].population/1000000
            })
        }
   })
}
// countrycity(`dublin`, (error, data)=>{
//    console.log('Error', error);
//    console.log('Data', data)
// }) 

countrycity('abuja', (error, data) =>{
   console.log('Error', error)
   console.log('Data', data)
})


 
   
     
        
    // const{name, capital, population} = body[0];

    // console.log('country', name.common);
    // console.log('capital', capital[0] );          //desstructring
    // console.log('population', (population/1000000).toFixed(2))
   





