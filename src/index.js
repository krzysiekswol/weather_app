import style from "./css/index.scss";

// KRK================================
const wxKrk = fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Krakow&appid=af4cddf8ba6d2ac99ba304abc62d2cc7&lang=pl"
)
  .then((resp) => resp.json())
  .then(function (data) {
    let imageKrk = document.createElement("img");
    imageKrk.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById(
      "showWxKrk"
    ).innerHTML = `Aktualna temperatura wynosi : ${(
      data.main.temp - 273.15
    ).toFixed(1)} &#x2103, a odczuwalna to ${(
      data.main.feels_like - 273.15
    ).toFixed(1)} &#x2103`;
    document.getElementById("iconKrk").appendChild(imageKrk);
    document.getElementById(
      "wxDescriptionKrk"
    ).innerHTML = `${data.weather[0].description}`;
  });
// KTW====================================
const wxKtw = fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Katowice&appid=af4cddf8ba6d2ac99ba304abc62d2cc7&lang=pl"
)
  .then((resp) => resp.json())
  .then(function (data) {
    let imageKtw = document.createElement("img");
    imageKtw.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById(
      "showWxKtw"
    ).innerHTML = `Aktualna temperatura wynosi : ${(
      data.main.temp - 273.15
    ).toFixed(1)} &#x2103, a odczuwalna to ${(
      data.main.feels_like - 273.15
    ).toFixed(1)} &#x2103`;
    document.getElementById("iconKtw").appendChild(imageKtw);
    document.getElementById(
      "wxDescriptionKtw"
    ).innerHTML = `${data.weather[0].description}`;
  });
// WAW=======================================
const wxWaw = fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Warszawa&appid=af4cddf8ba6d2ac99ba304abc62d2cc7&lang=pl"
)
  .then((resp) => resp.json())
  .then(function (data) {
    let imageWaw = document.createElement("img");
    imageWaw.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById(
      "showWxWaw"
    ).innerHTML = `Aktualna temperatura wynosi : ${(
      data.main.temp - 273.15
    ).toFixed(1)} &#x2103, a odczuwalna to ${(
      data.main.feels_like - 273.15
    ).toFixed(1)} &#x2103`;
    document.getElementById("iconWaw").appendChild(imageWaw);
    document.getElementById(
      "wxDescriptionWaw"
    ).innerHTML = `${data.weather[0].description}`;
  });
// POZ=======================================
const wxPoz = fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Poznan&appid=af4cddf8ba6d2ac99ba304abc62d2cc7&lang=pl"
)
  .then((resp) => resp.json())
  .then(function (data) {
    let imagePoz = document.createElement("img");
    imagePoz.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById(
      "showWxPoz"
    ).innerHTML = `Aktualna temperatura wynosi : ${(
      data.main.temp - 273.15
    ).toFixed(1)} &#x2103, a odczuwalna to ${(
      data.main.feels_like - 273.15
    ).toFixed(1)} &#x2103`;
    document.getElementById("iconPoz").appendChild(imagePoz);
    document.getElementById(
      "wxDescriptionPoz"
    ).innerHTML = `${data.weather[0].description}`;
  });
// GDN============================================
const wxGdn = fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Gdansk&appid=af4cddf8ba6d2ac99ba304abc62d2cc7&lang=pl"
)
  .then((resp) => resp.json())
  .then(function (data) {
    let imageGdn = document.createElement("img");
    imageGdn.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById(
      "showWxGdn"
    ).innerHTML = `Aktualna temperatura wynosi : ${(
      data.main.temp - 273.15
    ).toFixed(1)} &#x2103, a odczuwalna to ${(
      data.main.feels_like - 273.15
    ).toFixed(1)} &#x2103`;
    document.getElementById("iconGdn").appendChild(imageGdn);
    document.getElementById(
      "wxDescriptionGdn"
    ).innerHTML = `${data.weather[0].description}`;
  });
// WRO============================================
const wxWro = fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Wroclaw&appid=af4cddf8ba6d2ac99ba304abc62d2cc7&lang=pl"
)
  .then((resp) => resp.json())
  .then(function (data) {
    let imageWro = document.createElement("img");
    imageWro.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById(
      "showWxWro"
    ).innerHTML = `Aktualna temperatura wynosi : ${(
      data.main.temp - 273.15
    ).toFixed(1)} &#x2103, a odczuwalna to ${(
      data.main.feels_like - 273.15
    ).toFixed(1)} &#x2103`;
    document.getElementById("iconWro").appendChild(imageWro);
    document.getElementById(
      "wxDescriptionWro"
    ).innerHTML = `${data.weather[0].description}`;
  });

//================================================METARs===================================
