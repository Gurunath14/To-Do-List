const apikey = "&appid=2aa2384d686072f2398976d89ca34f4c";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const button = document.querySelector(".search button");
const city = document.querySelector(".search input");
const weatherimage = document.querySelector(".weathericon");
button.addEventListener("click", function () {
  checkweather(city.value);
});

async function checkweather(city) {
  const response = await fetch(apiurl + city + apikey);
  //   const response = await fetch(
  //     "https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=2aa2384d686072f2398976d89ca34f4c&units=metric"
  //   );
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity;
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}
