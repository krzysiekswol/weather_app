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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.scss */ \"./src/css/index.scss\");\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n // KRK================================\n\nvar wxKrk = fetch(\"http://api.openweathermap.org/data/2.5/weather?q=Krakow&appid=af4cddf8ba6d2ac99ba304abc62d2cc7&lang=pl\").then(function (resp) {\n  return resp.json();\n}).then(function (data) {\n  var imageKrk = document.createElement(\"img\");\n  imageKrk.src = \"http://openweathermap.org/img/wn/\".concat(data.weather[0].icon, \"@2x.png\");\n  document.getElementById(\"showWxKrk\").innerHTML = \"Aktualna temperatura wynosi : \".concat((data.main.temp - 273.15).toFixed(1), \" &#x2103, a odczuwalna to \").concat((data.main.feels_like - 273.15).toFixed(1), \" &#x2103\");\n  document.getElementById(\"iconKrk\").appendChild(imageKrk);\n  document.getElementById(\"wxDescriptionKrk\").innerHTML = \"\".concat(data.weather[0].description);\n}); // KTW====================================\n\nvar wxKtw = fetch(\"http://api.openweathermap.org/data/2.5/weather?q=Katowice&appid=af4cddf8ba6d2ac99ba304abc62d2cc7&lang=pl\").then(function (resp) {\n  return resp.json();\n}).then(function (data) {\n  var imageKtw = document.createElement(\"img\");\n  imageKtw.src = \"http://openweathermap.org/img/wn/\".concat(data.weather[0].icon, \"@2x.png\");\n  document.getElementById(\"showWxKtw\").innerHTML = \"Aktualna temperatura wynosi : \".concat((data.main.temp - 273.15).toFixed(1), \" &#x2103, a odczuwalna to \").concat((data.main.feels_like - 273.15).toFixed(1), \" &#x2103\");\n  document.getElementById(\"iconKtw\").appendChild(imageKtw);\n  document.getElementById(\"wxDescriptionKtw\").innerHTML = \"\".concat(data.weather[0].description);\n}); // WAW=======================================\n\nvar wxWaw = fetch(\"http://api.openweathermap.org/data/2.5/weather?q=Warszawa&appid=af4cddf8ba6d2ac99ba304abc62d2cc7&lang=pl\").then(function (resp) {\n  return resp.json();\n}).then(function (data) {\n  var imageWaw = document.createElement(\"img\");\n  imageWaw.src = \"http://openweathermap.org/img/wn/\".concat(data.weather[0].icon, \"@2x.png\");\n  document.getElementById(\"showWxWaw\").innerHTML = \"Aktualna temperatura wynosi : \".concat((data.main.temp - 273.15).toFixed(1), \" &#x2103, a odczuwalna to \").concat((data.main.feels_like - 273.15).toFixed(1), \" &#x2103\");\n  document.getElementById(\"iconWaw\").appendChild(imageWaw);\n  document.getElementById(\"wxDescriptionWaw\").innerHTML = \"\".concat(data.weather[0].description);\n}); // POZ=======================================\n\nvar wxPoz = fetch(\"http://api.openweathermap.org/data/2.5/weather?q=Poznan&appid=af4cddf8ba6d2ac99ba304abc62d2cc7&lang=pl\").then(function (resp) {\n  return resp.json();\n}).then(function (data) {\n  var imagePoz = document.createElement(\"img\");\n  imagePoz.src = \"http://openweathermap.org/img/wn/\".concat(data.weather[0].icon, \"@2x.png\");\n  document.getElementById(\"showWxPoz\").innerHTML = \"Aktualna temperatura wynosi : \".concat((data.main.temp - 273.15).toFixed(1), \" &#x2103, a odczuwalna to \").concat((data.main.feels_like - 273.15).toFixed(1), \" &#x2103\");\n  document.getElementById(\"iconPoz\").appendChild(imagePoz);\n  document.getElementById(\"wxDescriptionPoz\").innerHTML = \"\".concat(data.weather[0].description);\n}); // GDN============================================\n\nvar wxGdn = fetch(\"http://api.openweathermap.org/data/2.5/weather?q=Gdansk&appid=af4cddf8ba6d2ac99ba304abc62d2cc7&lang=pl\").then(function (resp) {\n  return resp.json();\n}).then(function (data) {\n  var imageGdn = document.createElement(\"img\");\n  imageGdn.src = \"http://openweathermap.org/img/wn/\".concat(data.weather[0].icon, \"@2x.png\");\n  document.getElementById(\"showWxGdn\").innerHTML = \"Aktualna temperatura wynosi : \".concat((data.main.temp - 273.15).toFixed(1), \" &#x2103, a odczuwalna to \").concat((data.main.feels_like - 273.15).toFixed(1), \" &#x2103\");\n  document.getElementById(\"iconGdn\").appendChild(imageGdn);\n  document.getElementById(\"wxDescriptionGdn\").innerHTML = \"\".concat(data.weather[0].description);\n}); // WRO============================================\n\nvar wxWro = fetch(\"http://api.openweathermap.org/data/2.5/weather?q=Wroclaw&appid=af4cddf8ba6d2ac99ba304abc62d2cc7&lang=pl\").then(function (resp) {\n  return resp.json();\n}).then(function (data) {\n  var imageWro = document.createElement(\"img\");\n  imageWro.src = \"http://openweathermap.org/img/wn/\".concat(data.weather[0].icon, \"@2x.png\");\n  document.getElementById(\"showWxWro\").innerHTML = \"Aktualna temperatura wynosi : \".concat((data.main.temp - 273.15).toFixed(1), \" &#x2103, a odczuwalna to \").concat((data.main.feels_like - 273.15).toFixed(1), \" &#x2103\");\n  document.getElementById(\"iconWro\").appendChild(imageWro);\n  document.getElementById(\"wxDescriptionWro\").innerHTML = \"\".concat(data.weather[0].description);\n}); //================================================METARs===================================\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });