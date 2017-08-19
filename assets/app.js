import * as Elements from './elements.js';
import {Http} from './https.js';
import {WeatherData, WeatherProxyHandler} from './weather-data.js';

const appId = '756b02c9112dea64f95d57c9516cc1e8';

Elements.SearchButton.addEventListener('click', searchWeather);
function searchWeather(){
  const cityName = Elements.SearchCity.value.trim();
  if(cityName.length == 0){
    alert('input a cityName');
  }
  Elements.LoadingText.style.display = 'block';
  Elements.WeatherBox.style.display = 'none';
  const URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid='+ appId;
  Http.fetchData(URL)
    .then(ResponseData => {
        const weatherDATA = new WeatherData(cityName,ResponseData.weather[0].description.toUpperCase(),ResponseData.main.humidity);
        const weatherProxy = new Proxy(weatherDATA, WeatherProxyHandler);
        weatherProxy.temperature = ResponseData.main.temp;
        updateWeather(weatherProxy);
    })
    .catch(error => alert(error));
}


let updateWeather = weatherData => {
  Elements.WeatherCity.textContent = weatherData.cityName;
  Elements.WeatherDescripton.textContent = weatherData.description;
  Elements.WeatherTemperaure.textContent = weatherData.temperature;
  Elements.WeatherHumidity.textContent = weatherData.humidity +' %';
  Elements.WeatherBox.style.display = 'block';
  Elements.LoadingText.style.display = 'none';
}
