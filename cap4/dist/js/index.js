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
const entrantes = [];
exports.entrantes = entrantes;
entrantes.push(new platomenu_1.PlatoMenu("pan con tomate", "./img/entrante01.png", 0));
entrantes[0].setAlimento(new alimento_1.Alimento("tomate", 18, 2));
entrantes[0].setAlimento(new alimento_1.Alimento("pan", 270, 1));
entrantes.push(new platomenu_1.PlatoMenu("tabla quesos", "./img/entrante04.png", 0));
entrantes[1].setAlimento(new alimento_1.Alimento("queso", 403, 2));
//Primeros platos
const primerosPlatos = [];
exports.primerosPlatos = primerosPlatos;
primerosPlatos.push(new platomenu_1.PlatoMenu("sopa de ajo", "./img/primero01.png", 1));
primerosPlatos[0].setAlimento(new alimento_1.Alimento("ajo", 149, 0.1));
primerosPlatos[0].setAlimento(new alimento_1.Alimento("pan", 270, 0.25));
primerosPlatos.push(new platomenu_1.PlatoMenu("sushi salmón", "./img/sushi01.png", 1));
primerosPlatos[1].setAlimento(new alimento_1.Alimento("arroz", 130, 1.5));
primerosPlatos[1].setAlimento(new alimento_1.Alimento("salmon", 208, 0.25));
//Segundos platos
const segundosPlatos = [];
exports.segundosPlatos = segundosPlatos;
segundosPlatos.push(new platomenu_1.PlatoMenu("pizza margarita", "./img/segundo01.png", 2));
segundosPlatos[0].setAlimento(new alimento_1.Alimento("ajo", 149, 0.1));
segundosPlatos[0].setAlimento(new alimento_1.Alimento("pan", 270, 0.25));
segundosPlatos[0].setAlimento(new alimento_1.Alimento("tomate", 25, 0.2));
segundosPlatos.push(new platomenu_1.PlatoMenu("lasaña", "./img/segundo02.png", 2));
segundosPlatos[0].setAlimento(new alimento_1.Alimento("placa lasaña", 224, 1));
segundosPlatos[0].setAlimento(new alimento_1.Alimento("carne picada", 240, 1));
segundosPlatos[0].setAlimento(new alimento_1.Alimento("tomate", 25, 2));
//Postres
const postres = [];
exports.postres = postres;
postres.push(new platomenu_1.PlatoMenu("tarta chocolate", "./img/postre01.png", 3));
postres[0].setAlimento(new alimento_1.Alimento("chocolate", 546, 2));
postres[0].setAlimento(new alimento_1.Alimento("azucar", 386, 3));
postres[0].setAlimento(new alimento_1.Alimento("bizcocho", 340, 5));


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
    get alimentos() {
        return this._alimentos;
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
PlatoMenu.TIPO_POSTRE = 3;


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
const platomenu_1 = __webpack_require__(/*! ./platomenu */ "./src/platomenu.ts");
//Funcion de lista de compra
function anyadirLista(plato) {
    //Elemento para añadir alimentos
    const listaCompra = document.getElementById("listacompra");
    plato.alimentos.forEach((alimento) => {
        listaCompra.innerHTML = listaCompra.innerHTML + `<li>${alimento.nombre}</li>`;
    });
}
//Funcion de control del frontal
function anyadirMenu(event) {
    const plato = event.target;
    const tipo = parseInt(plato.dataset.tipo);
    const pos = parseInt(plato.dataset.pos);
    //Pintamoms los datos del plato seleccionado en la tarjeta adecuada
    let platoElegido;
    let liElegido;
    switch (tipo) {
        case platomenu_1.PlatoMenu.TIPO_ENTRANTE: {
            platoElegido = platos_1.entrantes[pos];
            liElegido = document.getElementById("menuEntrante");
            break;
        }
        case platomenu_1.PlatoMenu.TIPO_PRIMERO: {
            platoElegido = platos_1.primerosPlatos[pos];
            liElegido = document.getElementById("menuPrimero");
            break;
        }
        case platomenu_1.PlatoMenu.TIPO_SEGUNDO: {
            platoElegido = platos_1.segundosPlatos[pos];
            liElegido = document.getElementById("menuSegundo");
            break;
        }
        case platomenu_1.PlatoMenu.TIPO_POSTRE: {
            platoElegido = platos_1.postres[pos];
            console.log(platoElegido);
            liElegido = document.getElementById("menuPostre");
            break;
        }
        default: {
            //statements; 
            break;
        }
    }
    liElegido.innerHTML = `<img src="${platoElegido.imagen}" alt="" width="100"><p>${platoElegido.nombre}</p><p class="kcal">Kcal: ${platoElegido.calcularKcal()}</p>`;
    //Sumamos las kcalTotales
    const kcalInPutTotal = document.getElementById("kcalTotal");
    kcalInPutTotal.value = (parseInt(kcalInPutTotal.value) + platoElegido.calcularKcal()).toString();
    //Anyadimos la lista de la compra
    anyadirLista(platoElegido);
}
//Módulo de creación de platos en frontal HTML
let textoHTMLPlatos = "";
let contador = 0;
//HTML de entrantes
const entrantesUL = document.getElementById("entrantes");
platos_1.entrantes.forEach(plato => {
    textoHTMLPlatos = textoHTMLPlatos + `<li><img src="${plato.imagen}" alt="" width="50" class="imgPlato" data-pos="${contador}" data-tipo="${plato.tipo}"><p>${plato.nombre}</p></li>`;
    contador++;
});
entrantesUL.innerHTML = textoHTMLPlatos;
//HTML de primeros
const primerosUL = document.getElementById("primeros");
textoHTMLPlatos = "";
contador = 0;
platos_1.primerosPlatos.forEach(plato => {
    textoHTMLPlatos = textoHTMLPlatos + `<li><img src="${plato.imagen}" alt="" width="50" class="imgPlato" data-pos="${contador}" data-tipo="${plato.tipo}"><p>${plato.nombre}</p></li>`;
    contador++;
});
primerosUL.innerHTML = textoHTMLPlatos;
//HTML de segundos
const segundosUL = document.getElementById("segundos");
textoHTMLPlatos = "";
contador = 0;
platos_1.segundosPlatos.forEach(plato => {
    textoHTMLPlatos = textoHTMLPlatos + `<li><img src="${plato.imagen}" alt="" width="50" class="imgPlato" data-pos="${contador}" data-tipo="${plato.tipo}"><p>${plato.nombre}</p></li>`;
    contador++;
});
segundosUL.innerHTML = textoHTMLPlatos;
//HTML de postres
const postresUL = document.getElementById("postres");
textoHTMLPlatos = "";
contador = 0;
platos_1.postres.forEach(plato => {
    textoHTMLPlatos = textoHTMLPlatos + `<li><img src="${plato.imagen}" alt="" width="50" class="imgPlato" data-pos="${contador}" data-tipo="${plato.tipo}"><p>${plato.nombre}</p></li>`;
    contador++;
});
postresUL.innerHTML = textoHTMLPlatos;
//Asignamos eventos a todos los platos
const todosPlatos = document.getElementsByClassName("imgPlato");
for (let plato of todosPlatos) {
    plato.addEventListener("click", anyadirMenu);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vd29uZGVyZm9vZC8uL3NyYy9hbGltZW50by50cyIsIndlYnBhY2s6Ly93b25kZXJmb29kLy4vc3JjL2RhdGEvcGxhdG9zLnRzIiwid2VicGFjazovL3dvbmRlcmZvb2QvLi9zcmMvcGxhdG9tZW51LnRzIiwid2VicGFjazovL3dvbmRlcmZvb2Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd29uZGVyZm9vZC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuLypcclxuKiBDbGFzZSBhbGltZW50b1xyXG4qXHJcbiovXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BbGltZW50byA9IHZvaWQgMDtcclxuY2xhc3MgQWxpbWVudG8ge1xyXG4gICAgLy8gTm9ybWFsIHNpZ25hdHVyZSB3aXRoIGRlZmF1bHRzXHJcbiAgICBjb25zdHJ1Y3Rvcihub21icmUsIGtjYWwsIGNhbnQpIHtcclxuICAgICAgICB0aGlzLl9ub21icmUgPSBub21icmU7XHJcbiAgICAgICAgdGhpcy5fa2NhbCA9IGtjYWw7XHJcbiAgICAgICAgdGhpcy5fY2FudGlkYWQgPSBjYW50O1xyXG4gICAgfVxyXG4gICAgZ2V0IG5vbWJyZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbm9tYnJlO1xyXG4gICAgfVxyXG4gICAgc2V0IG5vbWJyZShub21icmUpIHtcclxuICAgICAgICB0aGlzLl9ub21icmUgPSBub21icmUudG9VcHBlckNhc2UoKTtcclxuICAgIH1cclxuICAgIGdldCBrY2FsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9rY2FsO1xyXG4gICAgfVxyXG4gICAgc2V0IGtjYWwoa2NhbCkge1xyXG4gICAgICAgIGlmIChrY2FsIDwgMClcclxuICAgICAgICAgICAgdGhpcy5fa2NhbCA9IDA7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9rY2FsID0ga2NhbDtcclxuICAgIH1cclxuICAgIGdldCBjYW50aWRhZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2FudGlkYWQ7XHJcbiAgICB9XHJcbiAgICBzZXQgY2FudGlkYWQoY2FudCkge1xyXG4gICAgICAgIGlmIChjYW50IDwgMClcclxuICAgICAgICAgICAgdGhpcy5fY2FudGlkYWQgPSAwO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5fY2FudGlkYWQgPSBjYW50O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQWxpbWVudG8gPSBBbGltZW50bztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5wb3N0cmVzID0gZXhwb3J0cy5zZWd1bmRvc1BsYXRvcyA9IGV4cG9ydHMucHJpbWVyb3NQbGF0b3MgPSBleHBvcnRzLmVudHJhbnRlcyA9IHZvaWQgMDtcclxuY29uc3QgYWxpbWVudG9fMSA9IHJlcXVpcmUoXCIuLi9hbGltZW50b1wiKTtcclxuY29uc3QgcGxhdG9tZW51XzEgPSByZXF1aXJlKFwiLi4vcGxhdG9tZW51XCIpO1xyXG4vL0VudHJhbnRlc1xyXG5jb25zdCBlbnRyYW50ZXMgPSBbXTtcclxuZXhwb3J0cy5lbnRyYW50ZXMgPSBlbnRyYW50ZXM7XHJcbmVudHJhbnRlcy5wdXNoKG5ldyBwbGF0b21lbnVfMS5QbGF0b01lbnUoXCJwYW4gY29uIHRvbWF0ZVwiLCBcIi4vaW1nL2VudHJhbnRlMDEucG5nXCIsIDApKTtcclxuZW50cmFudGVzWzBdLnNldEFsaW1lbnRvKG5ldyBhbGltZW50b18xLkFsaW1lbnRvKFwidG9tYXRlXCIsIDE4LCAyKSk7XHJcbmVudHJhbnRlc1swXS5zZXRBbGltZW50byhuZXcgYWxpbWVudG9fMS5BbGltZW50byhcInBhblwiLCAyNzAsIDEpKTtcclxuZW50cmFudGVzLnB1c2gobmV3IHBsYXRvbWVudV8xLlBsYXRvTWVudShcInRhYmxhIHF1ZXNvc1wiLCBcIi4vaW1nL2VudHJhbnRlMDQucG5nXCIsIDApKTtcclxuZW50cmFudGVzWzFdLnNldEFsaW1lbnRvKG5ldyBhbGltZW50b18xLkFsaW1lbnRvKFwicXVlc29cIiwgNDAzLCAyKSk7XHJcbi8vUHJpbWVyb3MgcGxhdG9zXHJcbmNvbnN0IHByaW1lcm9zUGxhdG9zID0gW107XHJcbmV4cG9ydHMucHJpbWVyb3NQbGF0b3MgPSBwcmltZXJvc1BsYXRvcztcclxucHJpbWVyb3NQbGF0b3MucHVzaChuZXcgcGxhdG9tZW51XzEuUGxhdG9NZW51KFwic29wYSBkZSBham9cIiwgXCIuL2ltZy9wcmltZXJvMDEucG5nXCIsIDEpKTtcclxucHJpbWVyb3NQbGF0b3NbMF0uc2V0QWxpbWVudG8obmV3IGFsaW1lbnRvXzEuQWxpbWVudG8oXCJham9cIiwgMTQ5LCAwLjEpKTtcclxucHJpbWVyb3NQbGF0b3NbMF0uc2V0QWxpbWVudG8obmV3IGFsaW1lbnRvXzEuQWxpbWVudG8oXCJwYW5cIiwgMjcwLCAwLjI1KSk7XHJcbnByaW1lcm9zUGxhdG9zLnB1c2gobmV3IHBsYXRvbWVudV8xLlBsYXRvTWVudShcInN1c2hpIHNhbG3Ds25cIiwgXCIuL2ltZy9zdXNoaTAxLnBuZ1wiLCAxKSk7XHJcbnByaW1lcm9zUGxhdG9zWzFdLnNldEFsaW1lbnRvKG5ldyBhbGltZW50b18xLkFsaW1lbnRvKFwiYXJyb3pcIiwgMTMwLCAxLjUpKTtcclxucHJpbWVyb3NQbGF0b3NbMV0uc2V0QWxpbWVudG8obmV3IGFsaW1lbnRvXzEuQWxpbWVudG8oXCJzYWxtb25cIiwgMjA4LCAwLjI1KSk7XHJcbi8vU2VndW5kb3MgcGxhdG9zXHJcbmNvbnN0IHNlZ3VuZG9zUGxhdG9zID0gW107XHJcbmV4cG9ydHMuc2VndW5kb3NQbGF0b3MgPSBzZWd1bmRvc1BsYXRvcztcclxuc2VndW5kb3NQbGF0b3MucHVzaChuZXcgcGxhdG9tZW51XzEuUGxhdG9NZW51KFwicGl6emEgbWFyZ2FyaXRhXCIsIFwiLi9pbWcvc2VndW5kbzAxLnBuZ1wiLCAyKSk7XHJcbnNlZ3VuZG9zUGxhdG9zWzBdLnNldEFsaW1lbnRvKG5ldyBhbGltZW50b18xLkFsaW1lbnRvKFwiYWpvXCIsIDE0OSwgMC4xKSk7XHJcbnNlZ3VuZG9zUGxhdG9zWzBdLnNldEFsaW1lbnRvKG5ldyBhbGltZW50b18xLkFsaW1lbnRvKFwicGFuXCIsIDI3MCwgMC4yNSkpO1xyXG5zZWd1bmRvc1BsYXRvc1swXS5zZXRBbGltZW50byhuZXcgYWxpbWVudG9fMS5BbGltZW50byhcInRvbWF0ZVwiLCAyNSwgMC4yKSk7XHJcbnNlZ3VuZG9zUGxhdG9zLnB1c2gobmV3IHBsYXRvbWVudV8xLlBsYXRvTWVudShcImxhc2HDsWFcIiwgXCIuL2ltZy9zZWd1bmRvMDIucG5nXCIsIDIpKTtcclxuc2VndW5kb3NQbGF0b3NbMF0uc2V0QWxpbWVudG8obmV3IGFsaW1lbnRvXzEuQWxpbWVudG8oXCJwbGFjYSBsYXNhw7FhXCIsIDIyNCwgMSkpO1xyXG5zZWd1bmRvc1BsYXRvc1swXS5zZXRBbGltZW50byhuZXcgYWxpbWVudG9fMS5BbGltZW50byhcImNhcm5lIHBpY2FkYVwiLCAyNDAsIDEpKTtcclxuc2VndW5kb3NQbGF0b3NbMF0uc2V0QWxpbWVudG8obmV3IGFsaW1lbnRvXzEuQWxpbWVudG8oXCJ0b21hdGVcIiwgMjUsIDIpKTtcclxuLy9Qb3N0cmVzXHJcbmNvbnN0IHBvc3RyZXMgPSBbXTtcclxuZXhwb3J0cy5wb3N0cmVzID0gcG9zdHJlcztcclxucG9zdHJlcy5wdXNoKG5ldyBwbGF0b21lbnVfMS5QbGF0b01lbnUoXCJ0YXJ0YSBjaG9jb2xhdGVcIiwgXCIuL2ltZy9wb3N0cmUwMS5wbmdcIiwgMykpO1xyXG5wb3N0cmVzWzBdLnNldEFsaW1lbnRvKG5ldyBhbGltZW50b18xLkFsaW1lbnRvKFwiY2hvY29sYXRlXCIsIDU0NiwgMikpO1xyXG5wb3N0cmVzWzBdLnNldEFsaW1lbnRvKG5ldyBhbGltZW50b18xLkFsaW1lbnRvKFwiYXp1Y2FyXCIsIDM4NiwgMykpO1xyXG5wb3N0cmVzWzBdLnNldEFsaW1lbnRvKG5ldyBhbGltZW50b18xLkFsaW1lbnRvKFwiYml6Y29jaG9cIiwgMzQwLCA1KSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUGxhdG9NZW51ID0gdm9pZCAwO1xyXG4vKlxyXG4qIENsYXNlIHBsYXRvIGRlIHVuIG1lbnVcclxuKlxyXG4qL1xyXG5jbGFzcyBQbGF0b01lbnUge1xyXG4gICAgY29uc3RydWN0b3Iobm9tYnJlLCBpbWFnZW4sIHRpcG8pIHtcclxuICAgICAgICB0aGlzLm5vbWJyZSA9IG5vbWJyZTtcclxuICAgICAgICB0aGlzLmltYWdlbiA9IGltYWdlbjtcclxuICAgICAgICB0aGlzLnRpcG8gPSB0aXBvO1xyXG4gICAgICAgIHRoaXMuX2FsaW1lbnRvcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgc2V0QWxpbWVudG8oYWxpbWVudG8pIHtcclxuICAgICAgICB0aGlzLl9hbGltZW50b3MucHVzaChhbGltZW50byk7XHJcbiAgICB9XHJcbiAgICBnZXQgYWxpbWVudG9zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbGltZW50b3M7XHJcbiAgICB9XHJcbiAgICBjYWxjdWxhcktjYWwoKSB7XHJcbiAgICAgICAgbGV0IGtjYWwgPSAwO1xyXG4gICAgICAgIHRoaXMuX2FsaW1lbnRvcy5mb3JFYWNoKChzKSA9PiBrY2FsID0ga2NhbCArIChzLmtjYWwgKiBzLmNhbnRpZGFkKSk7XHJcbiAgICAgICAgcmV0dXJuIGtjYWw7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5QbGF0b01lbnUgPSBQbGF0b01lbnU7XHJcblBsYXRvTWVudS5USVBPX0VOVFJBTlRFID0gMDtcclxuUGxhdG9NZW51LlRJUE9fUFJJTUVSTyA9IDE7XHJcblBsYXRvTWVudS5USVBPX1NFR1VORE8gPSAyO1xyXG5QbGF0b01lbnUuVElQT19QT1NUUkUgPSAzO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcGxhdG9zXzEgPSByZXF1aXJlKFwiLi9kYXRhL3BsYXRvc1wiKTtcclxuY29uc3QgcGxhdG9tZW51XzEgPSByZXF1aXJlKFwiLi9wbGF0b21lbnVcIik7XHJcbi8vRnVuY2lvbiBkZSBsaXN0YSBkZSBjb21wcmFcclxuZnVuY3Rpb24gYW55YWRpckxpc3RhKHBsYXRvKSB7XHJcbiAgICAvL0VsZW1lbnRvIHBhcmEgYcOxYWRpciBhbGltZW50b3NcclxuICAgIGNvbnN0IGxpc3RhQ29tcHJhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0YWNvbXByYVwiKTtcclxuICAgIHBsYXRvLmFsaW1lbnRvcy5mb3JFYWNoKChhbGltZW50bykgPT4ge1xyXG4gICAgICAgIGxpc3RhQ29tcHJhLmlubmVySFRNTCA9IGxpc3RhQ29tcHJhLmlubmVySFRNTCArIGA8bGk+JHthbGltZW50by5ub21icmV9PC9saT5gO1xyXG4gICAgfSk7XHJcbn1cclxuLy9GdW5jaW9uIGRlIGNvbnRyb2wgZGVsIGZyb250YWxcclxuZnVuY3Rpb24gYW55YWRpck1lbnUoZXZlbnQpIHtcclxuICAgIGNvbnN0IHBsYXRvID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgY29uc3QgdGlwbyA9IHBhcnNlSW50KHBsYXRvLmRhdGFzZXQudGlwbyk7XHJcbiAgICBjb25zdCBwb3MgPSBwYXJzZUludChwbGF0by5kYXRhc2V0LnBvcyk7XHJcbiAgICAvL1BpbnRhbW9tcyBsb3MgZGF0b3MgZGVsIHBsYXRvIHNlbGVjY2lvbmFkbyBlbiBsYSB0YXJqZXRhIGFkZWN1YWRhXHJcbiAgICBsZXQgcGxhdG9FbGVnaWRvO1xyXG4gICAgbGV0IGxpRWxlZ2lkbztcclxuICAgIHN3aXRjaCAodGlwbykge1xyXG4gICAgICAgIGNhc2UgcGxhdG9tZW51XzEuUGxhdG9NZW51LlRJUE9fRU5UUkFOVEU6IHtcclxuICAgICAgICAgICAgcGxhdG9FbGVnaWRvID0gcGxhdG9zXzEuZW50cmFudGVzW3Bvc107XHJcbiAgICAgICAgICAgIGxpRWxlZ2lkbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudUVudHJhbnRlXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBwbGF0b21lbnVfMS5QbGF0b01lbnUuVElQT19QUklNRVJPOiB7XHJcbiAgICAgICAgICAgIHBsYXRvRWxlZ2lkbyA9IHBsYXRvc18xLnByaW1lcm9zUGxhdG9zW3Bvc107XHJcbiAgICAgICAgICAgIGxpRWxlZ2lkbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVByaW1lcm9cIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIHBsYXRvbWVudV8xLlBsYXRvTWVudS5USVBPX1NFR1VORE86IHtcclxuICAgICAgICAgICAgcGxhdG9FbGVnaWRvID0gcGxhdG9zXzEuc2VndW5kb3NQbGF0b3NbcG9zXTtcclxuICAgICAgICAgICAgbGlFbGVnaWRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51U2VndW5kb1wiKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgcGxhdG9tZW51XzEuUGxhdG9NZW51LlRJUE9fUE9TVFJFOiB7XHJcbiAgICAgICAgICAgIHBsYXRvRWxlZ2lkbyA9IHBsYXRvc18xLnBvc3RyZXNbcG9zXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocGxhdG9FbGVnaWRvKTtcclxuICAgICAgICAgICAgbGlFbGVnaWRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51UG9zdHJlXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAvL3N0YXRlbWVudHM7IFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaUVsZWdpZG8uaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtwbGF0b0VsZWdpZG8uaW1hZ2VufVwiIGFsdD1cIlwiIHdpZHRoPVwiMTAwXCI+PHA+JHtwbGF0b0VsZWdpZG8ubm9tYnJlfTwvcD48cCBjbGFzcz1cImtjYWxcIj5LY2FsOiAke3BsYXRvRWxlZ2lkby5jYWxjdWxhcktjYWwoKX08L3A+YDtcclxuICAgIC8vU3VtYW1vcyBsYXMga2NhbFRvdGFsZXNcclxuICAgIGNvbnN0IGtjYWxJblB1dFRvdGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrY2FsVG90YWxcIik7XHJcbiAgICBrY2FsSW5QdXRUb3RhbC52YWx1ZSA9IChwYXJzZUludChrY2FsSW5QdXRUb3RhbC52YWx1ZSkgKyBwbGF0b0VsZWdpZG8uY2FsY3VsYXJLY2FsKCkpLnRvU3RyaW5nKCk7XHJcbiAgICAvL0FueWFkaW1vcyBsYSBsaXN0YSBkZSBsYSBjb21wcmFcclxuICAgIGFueWFkaXJMaXN0YShwbGF0b0VsZWdpZG8pO1xyXG59XHJcbi8vTcOzZHVsbyBkZSBjcmVhY2nDs24gZGUgcGxhdG9zIGVuIGZyb250YWwgSFRNTFxyXG5sZXQgdGV4dG9IVE1MUGxhdG9zID0gXCJcIjtcclxubGV0IGNvbnRhZG9yID0gMDtcclxuLy9IVE1MIGRlIGVudHJhbnRlc1xyXG5jb25zdCBlbnRyYW50ZXNVTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW50cmFudGVzXCIpO1xyXG5wbGF0b3NfMS5lbnRyYW50ZXMuZm9yRWFjaChwbGF0byA9PiB7XHJcbiAgICB0ZXh0b0hUTUxQbGF0b3MgPSB0ZXh0b0hUTUxQbGF0b3MgKyBgPGxpPjxpbWcgc3JjPVwiJHtwbGF0by5pbWFnZW59XCIgYWx0PVwiXCIgd2lkdGg9XCI1MFwiIGNsYXNzPVwiaW1nUGxhdG9cIiBkYXRhLXBvcz1cIiR7Y29udGFkb3J9XCIgZGF0YS10aXBvPVwiJHtwbGF0by50aXBvfVwiPjxwPiR7cGxhdG8ubm9tYnJlfTwvcD48L2xpPmA7XHJcbiAgICBjb250YWRvcisrO1xyXG59KTtcclxuZW50cmFudGVzVUwuaW5uZXJIVE1MID0gdGV4dG9IVE1MUGxhdG9zO1xyXG4vL0hUTUwgZGUgcHJpbWVyb3NcclxuY29uc3QgcHJpbWVyb3NVTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpbWVyb3NcIik7XHJcbnRleHRvSFRNTFBsYXRvcyA9IFwiXCI7XHJcbmNvbnRhZG9yID0gMDtcclxucGxhdG9zXzEucHJpbWVyb3NQbGF0b3MuZm9yRWFjaChwbGF0byA9PiB7XHJcbiAgICB0ZXh0b0hUTUxQbGF0b3MgPSB0ZXh0b0hUTUxQbGF0b3MgKyBgPGxpPjxpbWcgc3JjPVwiJHtwbGF0by5pbWFnZW59XCIgYWx0PVwiXCIgd2lkdGg9XCI1MFwiIGNsYXNzPVwiaW1nUGxhdG9cIiBkYXRhLXBvcz1cIiR7Y29udGFkb3J9XCIgZGF0YS10aXBvPVwiJHtwbGF0by50aXBvfVwiPjxwPiR7cGxhdG8ubm9tYnJlfTwvcD48L2xpPmA7XHJcbiAgICBjb250YWRvcisrO1xyXG59KTtcclxucHJpbWVyb3NVTC5pbm5lckhUTUwgPSB0ZXh0b0hUTUxQbGF0b3M7XHJcbi8vSFRNTCBkZSBzZWd1bmRvc1xyXG5jb25zdCBzZWd1bmRvc1VMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWd1bmRvc1wiKTtcclxudGV4dG9IVE1MUGxhdG9zID0gXCJcIjtcclxuY29udGFkb3IgPSAwO1xyXG5wbGF0b3NfMS5zZWd1bmRvc1BsYXRvcy5mb3JFYWNoKHBsYXRvID0+IHtcclxuICAgIHRleHRvSFRNTFBsYXRvcyA9IHRleHRvSFRNTFBsYXRvcyArIGA8bGk+PGltZyBzcmM9XCIke3BsYXRvLmltYWdlbn1cIiBhbHQ9XCJcIiB3aWR0aD1cIjUwXCIgY2xhc3M9XCJpbWdQbGF0b1wiIGRhdGEtcG9zPVwiJHtjb250YWRvcn1cIiBkYXRhLXRpcG89XCIke3BsYXRvLnRpcG99XCI+PHA+JHtwbGF0by5ub21icmV9PC9wPjwvbGk+YDtcclxuICAgIGNvbnRhZG9yKys7XHJcbn0pO1xyXG5zZWd1bmRvc1VMLmlubmVySFRNTCA9IHRleHRvSFRNTFBsYXRvcztcclxuLy9IVE1MIGRlIHBvc3RyZXNcclxuY29uc3QgcG9zdHJlc1VMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3N0cmVzXCIpO1xyXG50ZXh0b0hUTUxQbGF0b3MgPSBcIlwiO1xyXG5jb250YWRvciA9IDA7XHJcbnBsYXRvc18xLnBvc3RyZXMuZm9yRWFjaChwbGF0byA9PiB7XHJcbiAgICB0ZXh0b0hUTUxQbGF0b3MgPSB0ZXh0b0hUTUxQbGF0b3MgKyBgPGxpPjxpbWcgc3JjPVwiJHtwbGF0by5pbWFnZW59XCIgYWx0PVwiXCIgd2lkdGg9XCI1MFwiIGNsYXNzPVwiaW1nUGxhdG9cIiBkYXRhLXBvcz1cIiR7Y29udGFkb3J9XCIgZGF0YS10aXBvPVwiJHtwbGF0by50aXBvfVwiPjxwPiR7cGxhdG8ubm9tYnJlfTwvcD48L2xpPmA7XHJcbiAgICBjb250YWRvcisrO1xyXG59KTtcclxucG9zdHJlc1VMLmlubmVySFRNTCA9IHRleHRvSFRNTFBsYXRvcztcclxuLy9Bc2lnbmFtb3MgZXZlbnRvcyBhIHRvZG9zIGxvcyBwbGF0b3NcclxuY29uc3QgdG9kb3NQbGF0b3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaW1nUGxhdG9cIik7XHJcbmZvciAobGV0IHBsYXRvIG9mIHRvZG9zUGxhdG9zKSB7XHJcbiAgICBwbGF0by5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYW55YWRpck1lbnUpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==