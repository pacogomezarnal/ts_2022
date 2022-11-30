/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/alimento.ts":
/*!*************************!*\
  !*** ./src/alimento.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


/*
* Clase alimento
*
*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Alimento = void 0;
class Alimento {
    // Normal signature with defaults
    constructor(nombre, kcal, cant) {
        this._nombre = nombre;
        this._kcal = kcal;
        this._cantidad = cant;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre.toUpperCase();
    }
    get kcal() {
        return this._kcal;
    }
    set kcal(kcal) {
        if (kcal < 0)
            this._kcal = 0;
        else
            this._kcal = kcal;
    }
    get cantidad() {
        return this._cantidad;
    }
    set cantidad(cant) {
        if (cant < 0)
            this._cantidad = 0;
        else
            this._cantidad = cant;
    }
}
exports.Alimento = Alimento;


/***/ }),

/***/ "./src/data/platos.ts":
/*!****************************!*\
  !*** ./src/data/platos.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.postres = exports.segundosPlatos = exports.primerosPlatos = exports.entrantes = void 0;
const alimento_1 = __webpack_require__(/*! ../alimento */ "./src/alimento.ts");
const platomenu_1 = __webpack_require__(/*! ../platomenu */ "./src/platomenu.ts");
//Entrantes
const entrante01 = new platomenu_1.PlatoMenu("pan con tomate", "./img/entrante01", 0);
entrante01.setAlimento(new alimento_1.Alimento("tomate", 18, 2));
entrante01.setAlimento(new alimento_1.Alimento("pan", 270, 1));
const entrantes = [entrante01];
exports.entrantes = entrantes;
//Primeros platos
const primerPlato01 = new platomenu_1.PlatoMenu("sopa de ajo", "./img/primero01", 1);
primerPlato01.setAlimento(new alimento_1.Alimento("ajo", 149, 0.1));
primerPlato01.setAlimento(new alimento_1.Alimento("pan", 270, 0.25));
const primerosPlatos = [primerPlato01];
exports.primerosPlatos = primerosPlatos;
//Segundos platos
const segundoPlato01 = new platomenu_1.PlatoMenu("pizza margarita", "./img/segundo01", 2);
segundoPlato01.setAlimento(new alimento_1.Alimento("tomate", 29, 0.25));
segundoPlato01.setAlimento(new alimento_1.Alimento("masa pizza", 150, 2.5));
segundoPlato01.setAlimento(new alimento_1.Alimento("mozzarella", 280, 1.5));
const segundosPlatos = [primerPlato01];
exports.segundosPlatos = segundosPlatos;
//Postres
const postre01 = new platomenu_1.PlatoMenu("tarta chocolate", "./img/postre01.png", 3);
postre01.setAlimento(new alimento_1.Alimento("chocolate", 546, 2));
postre01.setAlimento(new alimento_1.Alimento("azucar", 386, 3));
postre01.setAlimento(new alimento_1.Alimento("bizcocho", 340, 5));
const postres = [postre01];
exports.postres = postres;


/***/ }),

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
    constructor(nombre, imagen, tipo) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.tipo = tipo;
        this._alimentos = [];
    }
    setAlimento(alimento) {
        this._alimentos.push(alimento);
    }
    calcularKcal() {
        let kcal = 0;
        this._alimentos.forEach((s) => kcal = kcal + (s.kcal * s.cantidad));
        return kcal;
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
const platos_1 = __webpack_require__(/*! ./data/platos */ "./src/data/platos.ts");
//Módulo de creación de platos en frontal HTML
let textoHTMLPlatos = "";
//HTML de entrantes
const entrantesUL = document.getElementById("entrantes");
platos_1.entrantes.forEach(plato => {
    textoHTMLPlatos = textoHTMLPlatos + `<li><img src="${plato.imagen}" alt="" width="50"><p>${plato.nombre}</p></li>`;
});
entrantesUL.innerHTML = textoHTMLPlatos;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7Ozs7Ozs7Ozs7QUN2Q0g7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZUFBZSxHQUFHLHNCQUFzQixHQUFHLHNCQUFzQixHQUFHLGlCQUFpQjtBQUNyRixtQkFBbUIsbUJBQU8sQ0FBQyxzQ0FBYTtBQUN4QyxvQkFBb0IsbUJBQU8sQ0FBQyx3Q0FBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7Ozs7Ozs7Ozs7O0FDOUJGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDM0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCLG1CQUFPLENBQUMsMkNBQWU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxhQUFhLHlCQUF5QixhQUFhO0FBQzVHLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dvbmRlcmZvb2QvLi9zcmMvYWxpbWVudG8udHMiLCJ3ZWJwYWNrOi8vd29uZGVyZm9vZC8uL3NyYy9kYXRhL3BsYXRvcy50cyIsIndlYnBhY2s6Ly93b25kZXJmb29kLy4vc3JjL3BsYXRvbWVudS50cyIsIndlYnBhY2s6Ly93b25kZXJmb29kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dvbmRlcmZvb2QvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8qXHJcbiogQ2xhc2UgYWxpbWVudG9cclxuKlxyXG4qL1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWxpbWVudG8gPSB2b2lkIDA7XHJcbmNsYXNzIEFsaW1lbnRvIHtcclxuICAgIC8vIE5vcm1hbCBzaWduYXR1cmUgd2l0aCBkZWZhdWx0c1xyXG4gICAgY29uc3RydWN0b3Iobm9tYnJlLCBrY2FsLCBjYW50KSB7XHJcbiAgICAgICAgdGhpcy5fbm9tYnJlID0gbm9tYnJlO1xyXG4gICAgICAgIHRoaXMuX2tjYWwgPSBrY2FsO1xyXG4gICAgICAgIHRoaXMuX2NhbnRpZGFkID0gY2FudDtcclxuICAgIH1cclxuICAgIGdldCBub21icmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25vbWJyZTtcclxuICAgIH1cclxuICAgIHNldCBub21icmUobm9tYnJlKSB7XHJcbiAgICAgICAgdGhpcy5fbm9tYnJlID0gbm9tYnJlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9XHJcbiAgICBnZXQga2NhbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fa2NhbDtcclxuICAgIH1cclxuICAgIHNldCBrY2FsKGtjYWwpIHtcclxuICAgICAgICBpZiAoa2NhbCA8IDApXHJcbiAgICAgICAgICAgIHRoaXMuX2tjYWwgPSAwO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5fa2NhbCA9IGtjYWw7XHJcbiAgICB9XHJcbiAgICBnZXQgY2FudGlkYWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbnRpZGFkO1xyXG4gICAgfVxyXG4gICAgc2V0IGNhbnRpZGFkKGNhbnQpIHtcclxuICAgICAgICBpZiAoY2FudCA8IDApXHJcbiAgICAgICAgICAgIHRoaXMuX2NhbnRpZGFkID0gMDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX2NhbnRpZGFkID0gY2FudDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFsaW1lbnRvID0gQWxpbWVudG87XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMucG9zdHJlcyA9IGV4cG9ydHMuc2VndW5kb3NQbGF0b3MgPSBleHBvcnRzLnByaW1lcm9zUGxhdG9zID0gZXhwb3J0cy5lbnRyYW50ZXMgPSB2b2lkIDA7XHJcbmNvbnN0IGFsaW1lbnRvXzEgPSByZXF1aXJlKFwiLi4vYWxpbWVudG9cIik7XHJcbmNvbnN0IHBsYXRvbWVudV8xID0gcmVxdWlyZShcIi4uL3BsYXRvbWVudVwiKTtcclxuLy9FbnRyYW50ZXNcclxuY29uc3QgZW50cmFudGUwMSA9IG5ldyBwbGF0b21lbnVfMS5QbGF0b01lbnUoXCJwYW4gY29uIHRvbWF0ZVwiLCBcIi4vaW1nL2VudHJhbnRlMDFcIiwgMCk7XHJcbmVudHJhbnRlMDEuc2V0QWxpbWVudG8obmV3IGFsaW1lbnRvXzEuQWxpbWVudG8oXCJ0b21hdGVcIiwgMTgsIDIpKTtcclxuZW50cmFudGUwMS5zZXRBbGltZW50byhuZXcgYWxpbWVudG9fMS5BbGltZW50byhcInBhblwiLCAyNzAsIDEpKTtcclxuY29uc3QgZW50cmFudGVzID0gW2VudHJhbnRlMDFdO1xyXG5leHBvcnRzLmVudHJhbnRlcyA9IGVudHJhbnRlcztcclxuLy9QcmltZXJvcyBwbGF0b3NcclxuY29uc3QgcHJpbWVyUGxhdG8wMSA9IG5ldyBwbGF0b21lbnVfMS5QbGF0b01lbnUoXCJzb3BhIGRlIGFqb1wiLCBcIi4vaW1nL3ByaW1lcm8wMVwiLCAxKTtcclxucHJpbWVyUGxhdG8wMS5zZXRBbGltZW50byhuZXcgYWxpbWVudG9fMS5BbGltZW50byhcImFqb1wiLCAxNDksIDAuMSkpO1xyXG5wcmltZXJQbGF0bzAxLnNldEFsaW1lbnRvKG5ldyBhbGltZW50b18xLkFsaW1lbnRvKFwicGFuXCIsIDI3MCwgMC4yNSkpO1xyXG5jb25zdCBwcmltZXJvc1BsYXRvcyA9IFtwcmltZXJQbGF0bzAxXTtcclxuZXhwb3J0cy5wcmltZXJvc1BsYXRvcyA9IHByaW1lcm9zUGxhdG9zO1xyXG4vL1NlZ3VuZG9zIHBsYXRvc1xyXG5jb25zdCBzZWd1bmRvUGxhdG8wMSA9IG5ldyBwbGF0b21lbnVfMS5QbGF0b01lbnUoXCJwaXp6YSBtYXJnYXJpdGFcIiwgXCIuL2ltZy9zZWd1bmRvMDFcIiwgMik7XHJcbnNlZ3VuZG9QbGF0bzAxLnNldEFsaW1lbnRvKG5ldyBhbGltZW50b18xLkFsaW1lbnRvKFwidG9tYXRlXCIsIDI5LCAwLjI1KSk7XHJcbnNlZ3VuZG9QbGF0bzAxLnNldEFsaW1lbnRvKG5ldyBhbGltZW50b18xLkFsaW1lbnRvKFwibWFzYSBwaXp6YVwiLCAxNTAsIDIuNSkpO1xyXG5zZWd1bmRvUGxhdG8wMS5zZXRBbGltZW50byhuZXcgYWxpbWVudG9fMS5BbGltZW50byhcIm1venphcmVsbGFcIiwgMjgwLCAxLjUpKTtcclxuY29uc3Qgc2VndW5kb3NQbGF0b3MgPSBbcHJpbWVyUGxhdG8wMV07XHJcbmV4cG9ydHMuc2VndW5kb3NQbGF0b3MgPSBzZWd1bmRvc1BsYXRvcztcclxuLy9Qb3N0cmVzXHJcbmNvbnN0IHBvc3RyZTAxID0gbmV3IHBsYXRvbWVudV8xLlBsYXRvTWVudShcInRhcnRhIGNob2NvbGF0ZVwiLCBcIi4vaW1nL3Bvc3RyZTAxLnBuZ1wiLCAzKTtcclxucG9zdHJlMDEuc2V0QWxpbWVudG8obmV3IGFsaW1lbnRvXzEuQWxpbWVudG8oXCJjaG9jb2xhdGVcIiwgNTQ2LCAyKSk7XHJcbnBvc3RyZTAxLnNldEFsaW1lbnRvKG5ldyBhbGltZW50b18xLkFsaW1lbnRvKFwiYXp1Y2FyXCIsIDM4NiwgMykpO1xyXG5wb3N0cmUwMS5zZXRBbGltZW50byhuZXcgYWxpbWVudG9fMS5BbGltZW50byhcImJpemNvY2hvXCIsIDM0MCwgNSkpO1xyXG5jb25zdCBwb3N0cmVzID0gW3Bvc3RyZTAxXTtcclxuZXhwb3J0cy5wb3N0cmVzID0gcG9zdHJlcztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5QbGF0b01lbnUgPSB2b2lkIDA7XHJcbi8qXHJcbiogQ2xhc2UgcGxhdG8gZGUgdW4gbWVudVxyXG4qXHJcbiovXHJcbmNsYXNzIFBsYXRvTWVudSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihub21icmUsIGltYWdlbiwgdGlwbykge1xyXG4gICAgICAgIHRoaXMubm9tYnJlID0gbm9tYnJlO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VuID0gaW1hZ2VuO1xyXG4gICAgICAgIHRoaXMudGlwbyA9IHRpcG87XHJcbiAgICAgICAgdGhpcy5fYWxpbWVudG9zID0gW107XHJcbiAgICB9XHJcbiAgICBzZXRBbGltZW50byhhbGltZW50bykge1xyXG4gICAgICAgIHRoaXMuX2FsaW1lbnRvcy5wdXNoKGFsaW1lbnRvKTtcclxuICAgIH1cclxuICAgIGNhbGN1bGFyS2NhbCgpIHtcclxuICAgICAgICBsZXQga2NhbCA9IDA7XHJcbiAgICAgICAgdGhpcy5fYWxpbWVudG9zLmZvckVhY2goKHMpID0+IGtjYWwgPSBrY2FsICsgKHMua2NhbCAqIHMuY2FudGlkYWQpKTtcclxuICAgICAgICByZXR1cm4ga2NhbDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBsYXRvTWVudSA9IFBsYXRvTWVudTtcclxuUGxhdG9NZW51LlRJUE9fRU5UUkFOVEUgPSAwO1xyXG5QbGF0b01lbnUuVElQT19QUklNRVJPID0gMTtcclxuUGxhdG9NZW51LlRJUE9fU0VHVU5ETyA9IDI7XHJcblBsYXRvTWVudS5USVBPX1BPU1RSRSA9IDI7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBwbGF0b3NfMSA9IHJlcXVpcmUoXCIuL2RhdGEvcGxhdG9zXCIpO1xyXG4vL03Ds2R1bG8gZGUgY3JlYWNpw7NuIGRlIHBsYXRvcyBlbiBmcm9udGFsIEhUTUxcclxubGV0IHRleHRvSFRNTFBsYXRvcyA9IFwiXCI7XHJcbi8vSFRNTCBkZSBlbnRyYW50ZXNcclxuY29uc3QgZW50cmFudGVzVUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVudHJhbnRlc1wiKTtcclxucGxhdG9zXzEuZW50cmFudGVzLmZvckVhY2gocGxhdG8gPT4ge1xyXG4gICAgdGV4dG9IVE1MUGxhdG9zID0gdGV4dG9IVE1MUGxhdG9zICsgYDxsaT48aW1nIHNyYz1cIiR7cGxhdG8uaW1hZ2VufVwiIGFsdD1cIlwiIHdpZHRoPVwiNTBcIj48cD4ke3BsYXRvLm5vbWJyZX08L3A+PC9saT5gO1xyXG59KTtcclxuZW50cmFudGVzVUwuaW5uZXJIVE1MID0gdGV4dG9IVE1MUGxhdG9zO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=