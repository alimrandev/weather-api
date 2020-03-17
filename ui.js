class UI{
  constructor(){
    this.icon = document.getElementById('w-icon')
    this.feels = document.getElementById('w-feels');
    this.temp = document.getElementById('w-temp');
    this.pressure = document.getElementById('w-pressure');
    this.humidity = document.getElementById('w-humidity');
    this.city = document.getElementById('w-city')
  }
  paint({weatherData,weatherInfo,city}){
    const getUrl = UI.getIcon(weatherData.icon);
    this.icon.setAttribute('src',getUrl);
    this.feels.textContent = weatherData.main;
    this.temp.textContent = `Temperature(Cel): ${weatherInfo.temp}`;
    this.pressure.textContent = `Pressure(hpa): ${weatherInfo.pressure}`;
    this.humidity.textContent = `Humidity(%): ${weatherInfo.humidity}`;
    this.city.textContent = city;
  }
  static getIcon(icon){
    return "http://openweathermap.org/img/w/" + icon + ".png";
  }
  clearInput(){
    document.getElementById('city').value = '';
    document.getElementById('country').value = '';
  }
  showAlart(msg){
    const div = document.createElement('div');
    div.className = 'alert alert-danger';
    div.id = 'removeMsg'
    const showMsg = document.querySelector('.jumbotron p');
    div.innerText = msg;
    showMsg.insertAdjacentElement('afterend', div);
    setTimeout(()=>{
      document.getElementById('removeMsg').remove()
    },2000)
  }
}