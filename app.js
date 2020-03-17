// Curencey Converter
// http://apilayer.net/api/live?access_key=b19508a044236769359f7cbebf9aa97e&currencies=BDT&source=USD&format=1


// class
// a849992df84ed2e60441744552334f0f
// api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a849992df84ed2e60441744552334f0f&units=metric

// instantiate store
const store = new Store();
// instantiate UI
const ui = new UI();
const {city, country} = store.getLocation();
// instantiate weather
const weather = new Weather(city, country);
// dynamic input field
document.getElementById('w-form').addEventListener('submit', e =>{
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;
  if(city === '' || country === ''){
    ui.showAlart('Please Provide necessary Information')
  }else{
    weather.changeLocation(city, country);
    store.setLocation(city, country)
    ui.clearInput()
    weatherResponse()
  }
  
  e.preventDefault()
})

function weatherResponse(){
  weather.getWeather().then(data => {
    const ui = new UI();
    ui.paint(data)
  }).catch( data => ui.showAlart('City Not Found'))
}

weatherResponse();

// result.weather[0]
// result.main