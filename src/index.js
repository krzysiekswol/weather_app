import style from "./css/index.scss";

fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Krakow&appid=af4cddf8ba6d2ac99ba304abc62d2cc7"
)
  .then((resp) => resp.json())
  .then(function (data) {
    document.getElementById(
      "showWX"
    ).innerHTML = `Aktualna temperatura w Krakowie to: ${(
      data.main.temp - 273.15
    ).toFixed(1)} &#x2103, a odczuwalna to ${(
      data.main.feels_like - 273.15
    ).toFixed(1)} &#x2103`;
  });
