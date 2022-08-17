console.log('This javascript from client-side.......Wow👀')


const formEl = document.querySelector('form');
const inputEl = document.querySelector('.inputSearch')
const addressEl = document.querySelector('.city');
const countryEl = document.querySelector('.country');
const tempEl = document.querySelector('.temperature');
const descpritionEl = document.querySelector('.descprition')
const humidityEl = document.querySelector('.humidity--no')
const weatherEl = document.querySelector('.weather--name')
const visibilityEl = document.querySelector('.visibility--no')
const flagEl = document.querySelector('.flagImg')
const mainEl = document.querySelector('main')
const dateEl = document.querySelector('.date')
const errorMSGEl = document.querySelector('.error-message') 



formEl.addEventListener('submit', function (e){
  e.preventDefault()
  const address = inputEl.value

    
      // fetch(`http://localhost:1500/weather?address=${address}`).then(response => { // steps before we add heroku
      fetch(`/weather?address=${address}`).then(response => {
        response.json().then(data => {
          if(data.error) {
             errorMSGEl.classList.remove('hidden') 
            console.log(data.error.message)
           }else {
            console.log(data)
            mainEl.classList.remove('hidden')
            addressEl.textContent = data.address;
            countryEl.textContent = data.country;
            tempEl.textContent = Math.trunc(data.temperature);
            descpritionEl.textContent = data.description;
            humidityEl.textContent = data.humidity;
            weatherEl.textContent = data.weather;
            visibilityEl.textContent =Math.trunc ( data.visibility /1000);
            flagEl.src = data.flag;
            inputEl.value = '';
            inputEl.blur();

          //  const currentDate = new Date()
          //  const locale = navigator.language;

          //    const options = {
          //    day: 'numeric',
          //    month: 'long',
          //    year: '2-digit',
          //    weekday: 'short',
          //   }

          //   dateEl.textContent = new Intl.DateTimeFormat(locale, options).format(currentDate)
          dateEl.textContent = currentDate()
          }
        
 
        })
    
    })
})
const currentDate = function(){
  const d = new Date();
const date = d.getDate()
const day = d.toLocaleDateString('en-US', {weekday: 'short'})
const month = d.toLocaleDateString('en-US', {month: 'short'})
const year = d.getFullYear()

return(`${day} ${date} ${month} ${year}`)
}





  






















