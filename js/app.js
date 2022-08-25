(function() {



 // Obtaining HTMLElements of the Weather Application.
 const input = document.querySelector('.location');
 const button = document.querySelector('.search--btn');
 const weather = document.querySelector('.weather');
 const icon = document.querySelector('.weather--icon');
 const description = document.querySelector('.description');
 const cityName = document.querySelector('p.city--name');
 const windSpeed = document.querySelector('p.wind--speed');
 const country = document.querySelector('p.country');
 const city = document.querySelector('p.city');

 // Obtain Location from the input HTMLElement.
 function getLocation() {
  let location = input.value;
  console.log(location);
 };

 // EventListeners.
 input.addEventListener("click", function() {
  
 })



})();