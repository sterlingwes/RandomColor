module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (h, s, v) {
  var hi = Math.floor(h * 6);
  var f = h * 6 - hi;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  var r = 255;
  var g = 255;
  var b = 255;

  switch (hi) {
    case 0:
      r = v;g = t;b = p;break;
    case 1:
      r = q;g = v;b = p;break;
    case 2:
      r = p;g = v;b = t;break;
    case 3:
      r = p;g = q;b = v;break;
    case 4:
      r = t;g = p;b = v;break;
    case 5:
      r = v;g = p;b = q;break;
  }
  return [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)];
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var padHex = __webpack_require__(2);

module.exports = function (rgb) {
  var parts = rgb.map(function (val) {
    return padHex(val.toString(16));
  }).join('');

  return '#' + parts;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hexWidth = 2;

module.exports = function (str) {
  if (str.length > hexWidth) return str;
  return new Array(hexWidth - str.length + 1).join('0') + str;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hsvToRgb = __webpack_require__(0);
var rgbToHex = __webpack_require__(1);
var goldenRatio = 0.618033988749895;

function getRgb() {
  var inputs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var hue = inputs.hue,
      saturation = inputs.saturation,
      value = inputs.value;

  if (!hue) hue = Math.random();
  hue += goldenRatio;
  hue %= 1;

  if (typeof saturation !== 'number') saturation = 0.5;
  if (typeof value !== 'number') value = 0.95;

  return hsvToRgb(hue, saturation, value);
}

function getHex(opts, inputs) {
  var rgb = getRgb(opts, inputs);
  return rgbToHex(rgb);
}

module.exports = getHex;

/***/ })
/******/ ]);