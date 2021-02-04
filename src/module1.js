export const wxKrk = fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Krakow&appid=af4cddf8ba6d2ac99ba304abc62d2cc7"
)
  .then((resp) => resp.json())
  .then(function (data) {
    document.getElementById(
      "showWxKrk"
    ).innerHTML = `Aktualna temperatura wynosi : ${(
      data.main.temp - 273.15
    ).toFixed(1)} &#x2103, a odczuwalna to ${(
      data.main.feels_like - 273.15
    ).toFixed(1)} &#x2103`;
  });

export const wxKtw = fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Katowice&appid=af4cddf8ba6d2ac99ba304abc62d2cc7"
)
  .then((resp) => resp.json())
  .then(function (data) {
    document.getElementById(
      "showWxKtw"
    ).innerHTML = `Aktualna temperatura wynosi : ${(
      data.main.temp - 273.15
    ).toFixed(1)} &#x2103, a odczuwalna to ${(
      data.main.feels_like - 273.15
    ).toFixed(1)} &#x2103`;
  });
export const wxWaw = fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Warszawa&appid=af4cddf8ba6d2ac99ba304abc62d2cc7"
)
  .then((resp) => resp.json())
  .then(function (data) {
    document.getElementById(
      "showWxWaw"
    ).innerHTML = `Aktualna temperatura wynosi : ${(
      data.main.temp - 273.15
    ).toFixed(1)} &#x2103, a odczuwalna to ${(
      data.main.feels_like - 273.15
    ).toFixed(1)} &#x2103`;
  });
export const wxPoz = fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Poznan&appid=af4cddf8ba6d2ac99ba304abc62d2cc7"
)
  .then((resp) => resp.json())
  .then(function (data) {
    document.getElementById(
      "showWxPoz"
    ).innerHTML = `Aktualna temperatura wynosi : ${(
      data.main.temp - 273.15
    ).toFixed(1)} &#x2103, a odczuwalna to ${(
      data.main.feels_like - 273.15
    ).toFixed(1)} &#x2103`;
  });
export const wxGdn = fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Gdansk&appid=af4cddf8ba6d2ac99ba304abc62d2cc7"
)
  .then((resp) => resp.json())
  .then(function (data) {
    document.getElementById(
      "showWxGdn"
    ).innerHTML = `Aktualna temperatura wynosi : ${(
      data.main.temp - 273.15
    ).toFixed(1)} &#x2103, a odczuwalna to ${(
      data.main.feels_like - 273.15
    ).toFixed(1)} &#x2103`;
  });
export const wxWro = fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Wroclaw&appid=af4cddf8ba6d2ac99ba304abc62d2cc7"
)
  .then((resp) => resp.json())
  .then(function (data) {
    document.getElementById(
      "showWxWro"
    ).innerHTML = `Aktualna temperatura wynosi : ${(
      data.main.temp - 273.15
    ).toFixed(1)} &#x2103, a odczuwalna to ${(
      data.main.feels_like - 273.15
    ).toFixed(1)} &#x2103`;
  });
