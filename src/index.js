import style from "./css/index.scss";

class Weather {
  showWeather(city, code) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=af4cddf8ba6d2ac99ba304abc62d2cc7&lang=pl`
    )
      .then((resp) => resp.json())
      .then(function (data) {
        let image = document.createElement("img");
        image.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById(
          `showWx${code}`
        ).innerHTML = `Aktualna temperatura wynosi : ${(
          data.main.temp - 273.15
        ).toFixed(1)} &#x2103, a odczuwalna to ${(
          data.main.feels_like - 273.15
        ).toFixed(1)} &#x2103`;
        document.getElementById(`icon${code}`).appendChild(image);
        document.getElementById(
          `wxDescription${code}`
        ).innerHTML = `${data.weather[0].description}`;
      });
  }
}

const krakow = new Weather().showWeather("Krakow", "Krk");
const katowice = new Weather().showWeather("Katowice", "Ktw");
const warszawa = new Weather().showWeather("Warszawa", "Waw");
const poznan = new Weather().showWeather("Poznan", "Poz");
const gdansk = new Weather().showWeather("Gdansk", "Gdn");
const wroclaw = new Weather().showWeather("Wroclaw", "Wro");
