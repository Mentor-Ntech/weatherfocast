const path = require('path')
const geoCode = require('./APIs/geocode');
const getCountry = require('./APIs/country');
const getCountryFlag = require('./APIs/countryflag');
const express = require('express');




const app = express();
app.set('view engine', 'hbs');

const port = process.env.PORT || 1500;
// const port = 1500; //before we insert heroku

const publicDirectory = path.join(__dirname, '../public')
app.use(express.static(publicDirectory));

const viewsPath = path.join(__dirname, '../templates/views');
app.set('views', viewsPath);


//EXPRESS ROUTING
app.get('/', (req, res) => {
    res.render('index')
    // res.render('index', {
    //     app: 'Weather-Focast☁',
    //     page: 'Homepage'
    // });

})

// app.get('/', (req, res) => {
//     res.send('index')
// })

app.get('/weather', (req, res) => {
    if(!req.query.address)
    res.send('Invalid address....input a correct location')

    geoCode(req.query.address, (error, data) => {
        if (error){
            console.log(error)
        }else {
            getCountry(data.latitude, data.longitude, data.visibility, data.humidity, data.weather, data.temperature, data.description, data.address, (error, data) =>{
                if(error) {
                    console.log('Error', error)
                }else {
                    
                    getCountryFlag(data.country,data.visibility,data.humidity, data.weather, data.temperature, data.description, data.address, (error, data) => {
                        if (error) {
                            console.log('Error', error) 
                        }else {
                            // res.send(data)
                            res.json({           
                                country: data.country,
                                visibility: data.visibility,
                                humidity: data.humidity,
                                weather: data.weather,
                                temperature: data.temperature,
                                description: data.description,
                                address: data.address,
                                flag:data.flag
                            })
                            console.log('Data', data)
                        }
                        
                        
                    })
                }
                
            });
        }
    
            
        
    })
    
})


app.get('*', (req, res) =>{
    res.send('<h3>Page Not Found</h3>')
})







//EXPRESS LISTEN Port
app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
})
