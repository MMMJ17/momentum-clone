let weather = document.querySelector('.js-weather');

const COORDS = 'coords';

const API_KEY = '61d641d0c63e22a5c60c2755f41971e1';

const DEFAULT_CITY = 'Seoul';

function showCityWeather() {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${DEFAULT_CITY}&appid=${API_KEY}&units=metric`
    ).then(function (response) {
        return response.json()
    }).then(function (json) {
        weather.innerHTML = `[${json.name}] <br /> ${json.main.temp}℃  ${json.weather[0].main}`;
    })
}

function showCoordsWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        ).then(function (response) {
            return response.json()
        }).then(function (json) {
            weather.innerText = `${json.name} / ${json.main.temp}c ${json.weather[0].main}`;
        })
}

function saveGeo(obj) {
    localStorage.setItem(COORDS, JSON.stringify(obj));
}

function successGeo(geo) {
    let latitude = geo.coords.latitude;
    let longitude = geo.coords.longitude;
    let coordsObj = {
        latitude,
        longitude
    }
    saveGeo(coordsObj);
    showCoordsWeather(latitude, longitude);
}

function errorGeo() {
    showCityWeather();
}

function getCoords() {
    navigator.geolocation.getCurrentPosition(successGeo, errorGeo);
}

function loadCoords() {
    let loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords===null) {
        getCoords();
    } else {
        let parseCoords = JSON.parse(localStorage.getItem(COORDS));
        showWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}
init();