/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/platomenu.ts":
/*!**************************!*\
  !*** ./src/platomenu.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlatoMenu = void 0;
/*
* Clase plato de un menu
*
*/
class PlatoMenu {
    calcularKcal() {
        return 100;
    }
}
exports.PlatoMenu = PlatoMenu;
PlatoMenu.TIPO_ENTRANTE = 0;
PlatoMenu.TIPO_PRIMERO = 1;
PlatoMenu.TIPO_SEGUNDO = 2;
PlatoMenu.TIPO_POSTRE = 2;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const platomenu_1 = __webpack_require__(/*! ./platomenu */ "./src/platomenu.ts");
//Definicion de variables del DOM
//Lista de entrantes
const entrante01 = new platomenu_1.PlatoMenu();
entrante01.tipo = platomenu_1.PlatoMenu.TIPO_ENTRANTE;
entrante01.nombre = "entrante01";
entrante01.imagen = "./img/entrante01.png";

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQixtQkFBTyxDQUFDLHVDQUFhO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dvbmRlcmZvb2QvLi9zcmMvcGxhdG9tZW51LnRzIiwid2VicGFjazovL3dvbmRlcmZvb2Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd29uZGVyZm9vZC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlBsYXRvTWVudSA9IHZvaWQgMDtcclxuLypcclxuKiBDbGFzZSBwbGF0byBkZSB1biBtZW51XHJcbipcclxuKi9cclxuY2xhc3MgUGxhdG9NZW51IHtcclxuICAgIGNhbGN1bGFyS2NhbCgpIHtcclxuICAgICAgICByZXR1cm4gMTAwO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUGxhdG9NZW51ID0gUGxhdG9NZW51O1xyXG5QbGF0b01lbnUuVElQT19FTlRSQU5URSA9IDA7XHJcblBsYXRvTWVudS5USVBPX1BSSU1FUk8gPSAxO1xyXG5QbGF0b01lbnUuVElQT19TRUdVTkRPID0gMjtcclxuUGxhdG9NZW51LlRJUE9fUE9TVFJFID0gMjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHBsYXRvbWVudV8xID0gcmVxdWlyZShcIi4vcGxhdG9tZW51XCIpO1xyXG4vL0RlZmluaWNpb24gZGUgdmFyaWFibGVzIGRlbCBET01cclxuLy9MaXN0YSBkZSBlbnRyYW50ZXNcclxuY29uc3QgZW50cmFudGUwMSA9IG5ldyBwbGF0b21lbnVfMS5QbGF0b01lbnUoKTtcclxuZW50cmFudGUwMS50aXBvID0gcGxhdG9tZW51XzEuUGxhdG9NZW51LlRJUE9fRU5UUkFOVEU7XHJcbmVudHJhbnRlMDEubm9tYnJlID0gXCJlbnRyYW50ZTAxXCI7XHJcbmVudHJhbnRlMDEuaW1hZ2VuID0gXCIuL2ltZy9lbnRyYW50ZTAxLnBuZ1wiO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=