//POZYSKIWANIE DANYCH Z API
class Weather {
   constructor(city, country) {
      this.apiKey = '51c1f546910717e570769e6749672980';
      //this.apiKey = API_KEY;
      this.city = city;
      this.country = country;
   }

   //Fetch weather from API
   async getWeather() {
      const geoResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${this.city},${this.country}&limit=5&appid=${this.apiKey}`);
      const geoResponseData = await geoResponse.json();
      console.log(geoResponseData);
      const lat = geoResponseData[0].lat;
      const lon = geoResponseData[0].lon;

      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pl&appid=${this.apiKey}&units=metric`);
      const responseData = await response.json();
      // console.log(responseData);
      return responseData;
   }

   //change weather location
   changeLocation(city, country) {
      this.city = city;
      this.country = country
   }
}

//