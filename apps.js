/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/function.js */ \"./src/js/modules/function.js\");\n\r\n\r\n_modules_function_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();\r\n\r\n// import Swiper, { Navigation, Pagination } from 'swiper';\r\n\r\n// const swiper = new Swiper();\r\nlet slider = document.getElementById('slider');\r\nlet selector = document.getElementById('selector');\r\nlet selectValue = document.getElementById('select__value');\r\nlet progress = document.getElementById('progress');\r\n\r\n\r\nselectValue.innerHTML = slider.value;\r\n\r\nslider.oninput = function(){\r\n  progress.style.width = (this.value / 1000) + '%';\r\n  selectValue.innerHTML = this.value + '₽'\r\n  selector.style.left = (this.value / 1000) + '%';\r\n}\r\n\r\nlet sliderT = document.getElementById('slider__two');\r\nlet selectorT = document.getElementById('selector__two');\r\nlet selectValueT = document.getElementById('select__value__two');\r\nlet progressT = document.getElementById('progress__two');\r\n\r\n\r\nselectValueT.innerHTML = sliderT.value;\r\n\r\nfunction calc(){\r\n  let VALUE = sliderT.value;\r\n  let x = (VALUE * 100) / 30;\r\n  // console.log(x);\r\n  return x;\r\n}\r\n// console.log(calc());\r\n\r\ncalc();\r\nsliderT.oninput = function(){\r\n  // calc();\r\n  let result = calc();\r\n  // console.log(result);\r\n  progressT.style.width = result + '%';\r\n  // progressT.style.width = calc(x) + '%';\r\n  selectValueT.innerHTML = this.value + ' дней'\r\n  selectorT.style.left = result + '%';\r\n}\r\n\r\n\r\n// var f = function qwe(){\r\n//   var x = 10; \r\n//   return x;\r\n// }\r\n// console.log(f);\n\n//# sourceURL=webpack://gulp/./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/function.js":
/*!************************************!*\
  !*** ./src/js/modules/function.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isWebp\": () => (/* binding */ isWebp)\n/* harmony export */ });\nfunction isWebp() {\r\n  function testWebP(callback) {\r\n\r\n    var webP = new Image();\r\n    webP.onload = webP.onerror = function () {\r\n    callback(webP.height == 2);\r\n    };\r\n    webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\r\n    }\r\n    \r\n    testWebP(function (support) {\r\n    \r\n    if (support == true) {\r\n    document.querySelector('body').classList.add('webp');\r\n    }else{\r\n    document.querySelector('body').classList.add('no-webp');\r\n    }\r\n    });\r\n}\n\n//# sourceURL=webpack://gulp/./src/js/modules/function.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;