let now = new Date();
let p = document.querySelector("p");
let hours = now.getHours();
let minutes = now.getMinutes();
let day = now.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
p.innerHTML = `${days[day]} ${hours}:${minutes}`;

function showTemp(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function citySearch(city) {
  let apiKey = "573a564668504c3a4328912c04e8e7e5";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

function buttonSearch(event) {
  event.preventDefault();
  let city = document.querySelector("#search-click").value;
  citySearch(city);
}

function showFahrenheitTemp(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#temperature");
  let fahrenheitTemp = (tempElement.innerHTML * 9) / 5 + 32;
  tempElement.innerHTML = Math.round(fahrenheitTemp);
}

let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("submit", buttonSearch);
citySearch("Paris");

let tempLink = document.querySelector("#temp-link");
tempLink.addEventListener("click", showFahrenheitTemp);
