(function() {

 // API Key;
 const apiKey = '7dbba40bca4e87df764ad569f8b01add';


 // Weather Data Collection.
 let weatherObject = {};

 // Inserting Weather Data Units.
 weatherObject.units = 'Celcius';

 // Obtaining HTMLElements of the Weather Application.
 const input = document.querySelector('.location');
 const button = document.querySelector('.search--btn');
 const weather = document.querySelector('.weather');
 const icon = document.querySelector('.weather--icon');
 const description = document.querySelector('.description');
 const cityName = document.querySelector('p.city--name');
 const country = document.querySelector('span.country')
 const windSpeed = document.querySelector('.speed--value');
 const windDegrees = document.querySelector('.degrees--value');
 const cityHum = document.querySelector('.humidity--value');
 const cityTemp = document.querySelector('.temp--value');

 // Obtain Location from the input HTMLElement.
 function getLocation() {
  let location = input.value;
  if(location === '') {
   alert('Please enter a Location.')
  } else {
   const weatherData = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
   weatherData
    .then(response => response.json())
    .then((data) => {
     cityName.textContent = data.name + ', ';
     country.textContent = data.sys.country;
     weather.textContent = data.weather[0].main;
     icon.innerHTML = `<img src="images/icons/${data.weather[0].icon}.png">`
     description.textContent = data.weather[0].description;
     windSpeed.textContent = data.wind.speed;
     windDegrees.textContent = data.wind.deg;
     cityHum.textContent = data.main.humidity;
     cityTemp.textContent = data.main.temp;
    })
    .catch((error) => {
     console.log({ message: error.mesage })
    })
   }
 };

 // EventListeners.
 button.addEventListener("click", function() {
  getLocation();
 });



})();