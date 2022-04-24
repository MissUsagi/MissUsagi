//INIT storage
const storage = new Storage();
//Get stored location data
const weatherLocation = storage.getLocationData();

//POZYSKIWANIE DANYCH Z API
//INIT weather OBJECT
// const weather = new Weather('Łomża', 'PL');

const weather = new Weather(weatherLocation.city, weatherLocation.country);
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
   const city = document.getElementById('city').value;
   const country = document.getElementById('country').value;

   weather.changeLocation(city, country);
   //set location in localstorage
   storage.setLocationData(city, country);
   //get weather again
   getWeather();
   //Close Modal
   // $('#locModal').modal('toggle');
});

function getWeather() {
   weather.getWeather() //async zwraca promise!!!!!!!!!!
      .then(result => {
         console.log(result);
         ui.paint(result)
      })
      .catch(err => console.log(err));
}

//