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
    console.log(response.data);
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
        response.data.main.temp
    );
    celsiusTemp = response.data.main.temp;
    let iconElement = document.querySelector("#weather-icon");
    iconElement.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
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
    let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
    tempElement.innerHTML = Math.round(fahrenheitTemp);
}

function showCelsiusTemp(event) {
    event.preventDefault();
    let tempElement = document.querySelector("#temperature");
    tempElement.innerHTML = Math.round(celsiusTemp);
}

let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("submit", buttonSearch);
citySearch("Buffalo");

let fLink = document.querySelector("#f-link");
fLink.addEventListener("click", showFahrenheitTemp);

let cLink = document.querySelector("#c-link");
cLink.addEventListener("click", showCelsiusTemp);

let celsiusTemp = 0;