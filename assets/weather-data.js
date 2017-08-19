export class WeatherData{
  constructor(cityName, description,humidity){
    this.cityName = cityName;
    this.description = description;
    this.temperature = '';
    this.humidity = humidity;
  }
}

export const WeatherProxyHandler = {
  get: function(target, property){
    return Reflect.get(target,property);
  },
  set: function(target,property, value){
    // const newValue = (value * 1.8 + 32).toFixed(2)+ 'F.';
    const newValue = value + 'C.';
    return Reflect.set(target,property,newValue);
  }
};
