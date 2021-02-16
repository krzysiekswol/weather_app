require("dotenv").config();
import style from "./css/index.scss";

// =========== problem this with arrow function resolved ======
class Weather {
  constructor(city, code) {
    this.city = city;
    this.citycode = code;
  }
  showWeather() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${process.env.WEATHER_API_KEY}&lang=en`
    )
      .then((resp) => resp.json())
      .then((data) => {
        let image = document.createElement("img");
        image.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById(
          `showWx${this.citycode}`
        ).innerHTML = `Current temperature : ${(
          data.main.temp - 273.15
        ).toFixed(1)} &#x2103, perceived temperature ${(
          data.main.feels_like - 273.15
        ).toFixed(1)} &#x2103`;
        document.getElementById(`icon${this.citycode}`).appendChild(image);
        document.getElementById(
          `wxDescription${this.citycode}`
        ).innerHTML = `${data.weather[0].description}`;
      });
  }
}

// ============================ problem this with that resolved=======================
// class Weather {
//   constructor(city, code) {
//     this.city = city;
//     this.citycode = code;
//   }
//   showWeather() {
//     const that = this;
//     fetch(
//       `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${process.env.WEATHER_API_KEY}&lang=en`
//     )
//       .then((resp) => resp.json())
//       .then(function (data) {
//         let image = document.createElement("img");
//         image.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//         document.getElementById(
//           `showWx${that.citycode}`
//         ).innerHTML = `Aktualna temperatura wynosi : ${(
//           data.main.temp - 273.15
//         ).toFixed(1)} &#x2103, a odczuwalna to ${(
//           data.main.feels_like - 273.15
//         ).toFixed(1)} &#x2103`;
//         document.getElementById(`icon${that.citycode}`).appendChild(image);
//         document.getElementById(
//           `wxDescription${that.citycode}`
//         ).innerHTML = `${data.weather[0].description}`;
//       });
//   }
// }

// problem this with bind() resolved =====================================
// class Weather {
//   constructor(city, code) {
//     this.city = city;
//     this.citycode = code;
//   }
//   showWeather() {
//     fetch(
//       `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${process.env.WEATHER_API_KEY}&lang=en`
//     )
//       .then((resp) => resp.json())
//       .then(
//         function (data) {
//           let image = document.createElement("img");
//           image.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//           document.getElementById(
//             `showWx${this.citycode}`
//           ).innerHTML = `Aktualna temperatura wynosi : ${(
//             data.main.temp - 273.15
//           ).toFixed(1)} &#x2103, a odczuwalna to ${(
//             data.main.feels_like - 273.15
//           ).toFixed(1)} &#x2103`;
//           document.getElementById(`icon${this.citycode}`).appendChild(image);
//           document.getElementById(
//             `wxDescription${this.citycode}`
//           ).innerHTML = `${data.weather[0].description}`;
//         }.bind(this)
//       );
//   }
// }

const krakow = new Weather("Krakow", "Krk").showWeather();
const katowice = new Weather("Katowice", "Ktw").showWeather();
const warszawa = new Weather("Warszawa", "Waw").showWeather();
const poznan = new Weather("Poznan", "Poz").showWeather();
const gdansk = new Weather("Gdansk", "Gdn").showWeather();
const wroclaw = new Weather("Wroclaw", "Wro").showWeather();

//================================================METARs===================================
fetch(
  `https://avwx.rest/api/metar/EPKK?airport=true&format=json&token=${process.env.METAR_API_KEY}`
)
  .then((resp) => resp.json())
  .then(function (data) {
    console.log(data);
    document.getElementById("metar").innerHTML = `${data.raw}`;
  });
