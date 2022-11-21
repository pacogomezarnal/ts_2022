/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const util = __webpack_require__(/*! ./util.js */ "./src/util.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDSkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7O0FDdEJBLGFBQWEsbUJBQU8sQ0FBQyxnQ0FBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3QkFBd0I7QUFDeEM7QUFDQSxDOzs7Ozs7OztBQ25CQSxhQUFhLG1CQUFPLENBQUMsZ0NBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FwMi8uL3NyYy91dGlsLmpzIiwid2VicGFjazovL2NhcDIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2FwMi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jYXAyLy4vc3JjL3BlcmZpbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9e1xyXG4gICAgbG9nOih0ZXh0bykgPT57XHJcbiAgICAgICAgY29uc29sZS5sb2codGV4dG8pO1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImNvbnN0IHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xyXG5cclxuY29uc3QgcGVkaWRvPVtdO1xyXG5jb25zdCBjYXJyaXRvPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJyaXRvJyk7XHJcbnZhciBzdXNoaV9pdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdXNoaV9pdGVtXCIpO1xyXG5cclxuZnVuY3Rpb24gbnVldm9FbG0oZSl7XHJcbiAgICBjYXJyaXRvLmlubmVySFRNTD1jYXJyaXRvLmlubmVySFRNTCtcIjxwPlwiK2UuY3VycmVudFRhcmdldC5pbm5lckhUTUwrXCI8L3A+XCJcclxuICAgIHBlZGlkby5wdXNoKGUuY3VycmVudFRhcmdldCk7XHJcbiAgICB1dGlsLmxvZyhcIltOVUVWT10gXCIrZS5jdXJyZW50VGFyZ2V0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBib3JyYXJFbG0oaW5kKXtcclxuICAgIHBlZGlkby5zcGxpY2UoaW5kLDEpO1xyXG4gICAgdXRpbC5sb2dsb2coXCJbQk9SUkFET10gXCIraW5kKVxyXG59XHJcblxyXG5mb3IgKHZhciBpID0gMDsgaSA8IHN1c2hpX2l0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBzdXNoaV9pdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG51ZXZvRWxtLCBmYWxzZSk7XHJcbn0iLCJjb25zdCB1dGlsID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKTtcclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdHJvUGVyZmlsKGVtYWlsKXtcclxuICAgIHV0aWwubG9nKFwiW1JFR0lTVFJPXSBcIitlbWFpbCk7XHJcbn1cclxuXHJcbnJlZ2lzdHJvUGVyZmlsKFwicGFjb0BtYXN0ZXJtaW5kLmVzXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9