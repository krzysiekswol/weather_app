/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/index.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.scss */ \"./src/css/index.scss\");\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_scss__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n // =========== problem this with arrow function resolved ======\n\nvar Weather = /*#__PURE__*/function () {\n  function Weather(city, code) {\n    _classCallCheck(this, Weather);\n\n    this.city = city;\n    this.citycode = code;\n  }\n\n  _createClass(Weather, [{\n    key: \"showWeather\",\n    value: function showWeather() {\n      var _this = this;\n\n      var that = this;\n      console.log(that);\n      fetch(\"http://api.openweathermap.org/data/2.5/weather?q=\".concat(this.city, \"&appid=af4cddf8ba6d2ac99ba304abc62d2cc7&lang=pl\")).then(function (resp) {\n        return resp.json();\n      }).then(function (data) {\n        var image = document.createElement(\"img\");\n        image.src = \"http://openweathermap.org/img/wn/\".concat(data.weather[0].icon, \"@2x.png\");\n        document.getElementById(\"showWx\".concat(_this.citycode)).innerHTML = \"Aktualna temperatura wynosi : \".concat((data.main.temp - 273.15).toFixed(1), \" &#x2103, a odczuwalna to \").concat((data.main.feels_like - 273.15).toFixed(1), \" &#x2103\");\n        document.getElementById(\"icon\".concat(_this.citycode)).appendChild(image);\n        document.getElementById(\"wxDescription\".concat(_this.citycode)).innerHTML = \"\".concat(data.weather[0].description);\n      });\n    }\n  }]);\n\n  return Weather;\n}(); // ============================ problem this with that resolved=======================\n// class Weather {\n//   constructor(city, code) {\n//     this.city = city;\n//     this.citycode = code;\n//   }\n//   showWeather() {\n//     const that = this;\n//     fetch(\n//       `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=af4cddf8ba6d2ac99ba304abc62d2cc7&lang=pl`\n//     )\n//       .then((resp) => resp.json())\n//       .then(function (data) {\n//         let image = document.createElement(\"img\");\n//         image.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;\n//         document.getElementById(\n//           `showWx${that.citycode}`\n//         ).innerHTML = `Aktualna temperatura wynosi : ${(\n//           data.main.temp - 273.15\n//         ).toFixed(1)} &#x2103, a odczuwalna to ${(\n//           data.main.feels_like - 273.15\n//         ).toFixed(1)} &#x2103`;\n//         document.getElementById(`icon${that.citycode}`).appendChild(image);\n//         document.getElementById(\n//           `wxDescription${that.citycode}`\n//         ).innerHTML = `${data.weather[0].description}`;\n//       });\n//   }\n// }\n// problem this with bind() resolved =====================================\n// class Weather {\n//   constructor(city, code) {\n//     this.city = city;\n//     this.citycode = code;\n//   }\n//   showWeather() {\n//     fetch(\n//       `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=af4cddf8ba6d2ac99ba304abc62d2cc7&lang=pl`\n//     )\n//       .then((resp) => resp.json())\n//       .then(\n//         function (data) {\n//           let image = document.createElement(\"img\");\n//           image.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;\n//           document.getElementById(\n//             `showWx${this.citycode}`\n//           ).innerHTML = `Aktualna temperatura wynosi : ${(\n//             data.main.temp - 273.15\n//           ).toFixed(1)} &#x2103, a odczuwalna to ${(\n//             data.main.feels_like - 273.15\n//           ).toFixed(1)} &#x2103`;\n//           document.getElementById(`icon${this.citycode}`).appendChild(image);\n//           document.getElementById(\n//             `wxDescription${this.citycode}`\n//           ).innerHTML = `${data.weather[0].description}`;\n//         }.bind(this)\n//       );\n//   }\n// }\n\n\nvar krakow = new Weather(\"Krakow\", \"Krk\").showWeather();\nvar katowice = new Weather(\"Katowice\", \"Ktw\").showWeather();\nvar warszawa = new Weather(\"Warszawa\", \"Waw\").showWeather();\nvar poznan = new Weather(\"Poznan\", \"Poz\").showWeather();\nvar gdansk = new Weather(\"Gdansk\", \"Gdn\").showWeather();\nvar wroclaw = new Weather(\"Wroclaw\", \"Wro\").showWeather();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });