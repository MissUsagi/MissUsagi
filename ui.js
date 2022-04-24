class UI {
   constructor() {
      this.city = document.getElementById('w-location');
      this.desc = document.getElementById('w-desc');
      this.tempString = document.getElementById('w-string');
      this.details = document.getElementById('w-details');
      this.icon = document.getElementById('w-icon');
      this.humidity = document.getElementById('w-humidity');
      this.feelsLike = document.getElementById('w-feels-like');
      this.pressure = document.getElementById('w-pressure');
      this.wind = document.getElementById('w-wind');
      this.cityList = document.getElementById('city-list');

   }

   paint(weather) {
      this.city.textContent = weather.name + " " + weather.sys.country;
      this.desc.textContent = weather.weather[0].description;
      this.tempString.textContent = Math.floor(weather.main.temp) + "\u02DAC";
      this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`)
      this.feelsLike.textContent = 'Temperatura odczuwalna: ' + Math.floor(weather.main.feels_like) + "\u02DAC";
      this.pressure.textContent = 'Ciśnienie: ' + weather.main.pressure + "hPa";
      this.humidity.textContent = 'Wilgotność: ' + weather.main.humidity + "%";
      this.wind.textContent = 'Prędkość wiatru: ' + weather.wind.speed + "m\u002Fs";

   }
}