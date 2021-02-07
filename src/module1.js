// let images = document.createElement("img");
// images.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
// const arrPng = [
//   "01n",
//   "01d",
//   "02d",
//   "02n",
//   "03d",
//   "03n",
//   "04d",
//   "04n",
//   "09d",
//   "09n",
//   "10d",
//   "10n",
//   "11d",
//   "11n",
//   "13d",
//   "13n",
//   "50d",
//   "50n",
// ];

// export const wxKrk = fetch(
//   "http://api.openweathermap.org/data/2.5/weather?q=Krakow&appid=af4cddf8ba6d2ac99ba304abc62d2cc7"
// )
//   .then((resp) => resp.json())
//   .then(function (data) {
//     console.log(data.weather[0].icon);
//     let imageKrk = document.createElement("img");
//     imageKrk.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//     document.getElementById(
//       "showWxKrk"
//     ).innerHTML = `Aktualna temperatura wynosi : ${(
//       data.main.temp - 273.15
//     ).toFixed(1)} &#x2103, a odczuwalna to ${(
//       data.main.feels_like - 273.15
//     ).toFixed(1)} &#x2103`;
//     if (
//       data.weather[0].icon ==
//       arrPng.filter((item) => item)
//     ) {
//       document
//         .getElementById("iconKrk")
//         .appendChild(imageKrk);
//     }
//   });

// export const wxKtw = fetch(
//   "http://api.openweathermap.org/data/2.5/weather?q=Katowice&appid=af4cddf8ba6d2ac99ba304abc62d2cc7"
// )
//   .then((resp) => resp.json())
//   .then(function (data) {
//     console.log(data);
//     let imageKtw = document.createElement("img");
//     imageKtw.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//     document.getElementById(
//       "showWxKtw"
//     ).innerHTML = `Aktualna temperatura wynosi : ${(
//       data.main.temp - 273.15
//     ).toFixed(1)} &#x2103, a odczuwalna to ${(
//       data.main.feels_like - 273.15
//     ).toFixed(1)} &#x2103`;
//     if (
//       data.weather[0].icon ==
//       arrPng.filter((item) => item == data.weather[0].icon)
//     ) {
//       document
//         .getElementById("iconKtw")
//         .appendChild(imageKtw);
//     }
//   });
// export const wxWaw = fetch(
//   "http://api.openweathermap.org/data/2.5/weather?q=Warszawa&appid=af4cddf8ba6d2ac99ba304abc62d2cc7"
// )
//   .then((resp) => resp.json())
//   .then(function (data) {
//     console.log(data.weather[0].icon);
//     let imageWaw = document.createElement("img");
//     imageWaw.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//     document.getElementById(
//       "showWxWaw"
//     ).innerHTML = `Aktualna temperatura wynosi : ${(
//       data.main.temp - 273.15
//     ).toFixed(1)} &#x2103, a odczuwalna to ${(
//       data.main.feels_like - 273.15
//     ).toFixed(1)} &#x2103`;
//     if (
//       data.weather[0].icon ==
//       arrPng.filter((item) => item == data.weather[0].icon)
//     ) {
//       document
//         .getElementById("iconWaw")
//         .appendChild(imageWaw);
//     }
//   });
// export const wxPoz = fetch(
//   "http://api.openweathermap.org/data/2.5/weather?q=Poznan&appid=af4cddf8ba6d2ac99ba304abc62d2cc7"
// )
//   .then((resp) => resp.json())
//   .then(function (data) {
//     console.log(data.weather[0].icon);
//     let imagePoz = document.createElement("img");
//     imagePoz.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//     document.getElementById(
//       "showWxPoz"
//     ).innerHTML = `Aktualna temperatura wynosi : ${(
//       data.main.temp - 273.15
//     ).toFixed(1)} &#x2103, a odczuwalna to ${(
//       data.main.feels_like - 273.15
//     ).toFixed(1)} &#x2103`;
//     if (
//       data.weather[0].icon ==
//       arrPng.filter((item) => item == data.weather[0].icon)
//     ) {
//       document
//         .getElementById("iconPoz")
//         .appendChild(imagePoz);
//     }
//   });
// export const wxGdn = fetch(
//   "http://api.openweathermap.org/data/2.5/weather?q=Gdansk&appid=af4cddf8ba6d2ac99ba304abc62d2cc7"
// )
//   .then((resp) => resp.json())
//   .then(function (data) {
//     console.log(data.weather[0].icon);
//     let imageGdn = document.createElement("img");
//     imageGdn.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//     document.getElementById(
//       "showWxGdn"
//     ).innerHTML = `Aktualna temperatura wynosi : ${(
//       data.main.temp - 273.15
//     ).toFixed(1)} &#x2103, a odczuwalna to ${(
//       data.main.feels_like - 273.15
//     ).toFixed(1)} &#x2103`;
//     if (
//       data.weather[0].icon ==
//       arrPng.filter((item) => item == data.weather[0].icon)
//     ) {
//       document
//         .getElementById("iconGdn")
//         .appendChild(imageGdn);
//     }
//   });
// export const wxWro = fetch(
//   "http://api.openweathermap.org/data/2.5/weather?q=Wroclaw&appid=af4cddf8ba6d2ac99ba304abc62d2cc7"
// )
//   .then((resp) => resp.json())
//   .then(function (data) {
//     console.log(data.weather[0].icon);
//     let imageWro = document.createElement("img");
//     imageWro.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//     document.getElementById(
//       "showWxWro"
//     ).innerHTML = `Aktualna temperatura wynosi : ${(
//       data.main.temp - 273.15
//     ).toFixed(1)} &#x2103, a odczuwalna to ${(
//       data.main.feels_like - 273.15
//     ).toFixed(1)} &#x2103`;
//     if (
//       data.weather[0].icon ==
//       arrPng.filter((item) => item == data.weather[0].icon)
//     ) {
//       document
//         .getElementById("iconWro")
//         .appendChild(imageWro);
//     }
//   });
