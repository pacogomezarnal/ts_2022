/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/estilos.css":
/*!*****************************!*\
  !*** ./src/css/estilos.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

module.exports ={
    log:(texto) =>{
        console.log(texto);
    }
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const util = __webpack_require__(/*! ./util.js */ "./src/util.js");
__webpack_require__(/*! ./css/reset.css */ "./src/css/reset.css");
__webpack_require__(/*! ./css/estilos.css */ "./src/css/estilos.css");

const pedido=[];
const carrito=document.getElementById('carrito');
var sushi_items = document.getElementsByClassName("sushi_item");

function nuevoElm(e){
    carrito.innerHTML=carrito.innerHTML+"<p>"+e.currentTarget.innerHTML+"</p>"
    pedido.push(e.currentTarget);
    util.log("[NUEVO] "+e.currentTarget)
}

function borrarElm(ind){
    pedido.splice(ind,1);
    util.loglog("[BORRADO] "+ind)
}

for (var i = 0; i < sushi_items.length; i++) {
    sushi_items[i].addEventListener('click', nuevoElm, false);
}
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!***********************!*\
  !*** ./src/perfil.js ***!
  \***********************/
const util = __webpack_require__(/*! ./util.js */ "./src/util.js");

function registroPerfil(email){
    util.log("[REGISTRO] "+email);
}

registroPerfil("paco@mastermind.es")
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ0pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7OztBQ05BLGFBQWEsbUJBQU8sQ0FBQyxnQ0FBVztBQUNoQyxtQkFBTyxDQUFDLDRDQUFpQjtBQUN6QixtQkFBTyxDQUFDLGdEQUFtQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3QkFBd0I7QUFDeEM7QUFDQSxDOzs7Ozs7OztBQ3JCQSxhQUFhLG1CQUFPLENBQUMsZ0NBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FwMi8uL3NyYy9jc3MvZXN0aWxvcy5jc3M/YzRkYyIsIndlYnBhY2s6Ly9jYXAyLy4vc3JjL2Nzcy9yZXNldC5jc3M/NTkzNiIsIndlYnBhY2s6Ly9jYXAyLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vY2FwMi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYXAyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2FwMi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jYXAyLy4vc3JjL3BlcmZpbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9e1xyXG4gICAgbG9nOih0ZXh0bykgPT57XHJcbiAgICAgICAgY29uc29sZS5sb2codGV4dG8pO1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xyXG5yZXF1aXJlKFwiLi9jc3MvcmVzZXQuY3NzXCIpO1xyXG5yZXF1aXJlKFwiLi9jc3MvZXN0aWxvcy5jc3NcIik7XHJcblxyXG5jb25zdCBwZWRpZG89W107XHJcbmNvbnN0IGNhcnJpdG89ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnJpdG8nKTtcclxudmFyIHN1c2hpX2l0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInN1c2hpX2l0ZW1cIik7XHJcblxyXG5mdW5jdGlvbiBudWV2b0VsbShlKXtcclxuICAgIGNhcnJpdG8uaW5uZXJIVE1MPWNhcnJpdG8uaW5uZXJIVE1MK1wiPHA+XCIrZS5jdXJyZW50VGFyZ2V0LmlubmVySFRNTCtcIjwvcD5cIlxyXG4gICAgcGVkaWRvLnB1c2goZS5jdXJyZW50VGFyZ2V0KTtcclxuICAgIHV0aWwubG9nKFwiW05VRVZPXSBcIitlLmN1cnJlbnRUYXJnZXQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJvcnJhckVsbShpbmQpe1xyXG4gICAgcGVkaWRvLnNwbGljZShpbmQsMSk7XHJcbiAgICB1dGlsLmxvZ2xvZyhcIltCT1JSQURPXSBcIitpbmQpXHJcbn1cclxuXHJcbmZvciAodmFyIGkgPSAwOyBpIDwgc3VzaGlfaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgIHN1c2hpX2l0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbnVldm9FbG0sIGZhbHNlKTtcclxufSIsImNvbnN0IHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xyXG5cclxuZnVuY3Rpb24gcmVnaXN0cm9QZXJmaWwoZW1haWwpe1xyXG4gICAgdXRpbC5sb2coXCJbUkVHSVNUUk9dIFwiK2VtYWlsKTtcclxufVxyXG5cclxucmVnaXN0cm9QZXJmaWwoXCJwYWNvQG1hc3Rlcm1pbmQuZXNcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=