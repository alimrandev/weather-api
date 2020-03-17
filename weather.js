class Weather{
  constructor(city,country){
    this.city = city;
    this.country = country
  }
    async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=a849992df84ed2e60441744552334f0f&units=metric`);
    const responseData = await response.json();
    console.log(responseData)
    return {
      weatherData : responseData.weather[0],
      weatherInfo : responseData.main,
      city: responseData.name
    }
  }
  changeLocation(city, country){
    this.city = city;
    this.country = country
  }
}
