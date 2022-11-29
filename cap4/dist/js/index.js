/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

//Definicion de variables del DOM
const sexoSelect = document.getElementById("sexo");
const edadInput = document.getElementById("edad");
const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const actividadSelect = document.getElementById("actividad");
const calMin = document.getElementById("calMin");
const botonCalculo = document.getElementById("calculobtn");
function calcularTMB(sexo, peso, altura, edad) {
    if (sexo == "Mujer") {
        return ((10 * peso) + (6.25 * altura) - (5 * edad) - 161);
    }
    else {
        return ((10 * peso) + (6.25 * altura) - (5 * edad) + 5);
    }
}
function calcularKcal(actividad, tmb, kcal = true) {
    if (actividad == "baja")
        return (tmb * 1.375) / 1000;
    else if (actividad == "moderada")
        return (tmb * 1.55) / 1000;
    else
        return (tmb * 1.725) / 1000;
}
function transformarInputNumber(elemento) {
    let valor;
    valor = parseInt(elemento.value);
    if (isNaN(valor))
        valor = 0;
    return valor;
}
function calcularDatos(event) {
    //Definicion de las variables
    let sexo;
    let edad;
    let peso;
    let altura;
    let actividad;
    //Log
    sexo = undefined;
    console.log(sexo);
    //Eliminamos la recarga por defecto del button
    event.preventDefault();
    sexo = sexoSelect.options[sexoSelect.selectedIndex].text;
    actividad = actividadSelect.options[actividadSelect.selectedIndex].text;
    edad = transformarInputNumber(edadInput);
    peso = transformarInputNumber(pesoInput);
    altura = transformarInputNumber(alturaInput);
    //Log
    console.log(sexo);
    console.log(actividad);
    console.log(edad);
    console.log(peso);
    console.log(altura);
    //Realizamos los cálculos
    let tmb = calcularTMB(sexo, peso, altura, edad);
    let kcal = calcularKcal(actividad, tmb);
    //Colocamos el cálculo
    calMin.value = kcal.toString();
}
//Asignar boton
botonCalculo.addEventListener("click", calcularDatos);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b25kZXJmb29kLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG4vL0RlZmluaWNpb24gZGUgdmFyaWFibGVzIGRlbCBET01cclxuY29uc3Qgc2V4b1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V4b1wiKTtcclxuY29uc3QgZWRhZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGFkXCIpO1xyXG5jb25zdCBwZXNvSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBlc29cIik7XHJcbmNvbnN0IGFsdHVyYUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbHR1cmFcIik7XHJcbmNvbnN0IGFjdGl2aWRhZFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZpZGFkXCIpO1xyXG5jb25zdCBjYWxNaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbE1pblwiKTtcclxuY29uc3QgYm90b25DYWxjdWxvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxjdWxvYnRuXCIpO1xyXG5mdW5jdGlvbiBjYWxjdWxhclRNQihzZXhvLCBwZXNvLCBhbHR1cmEsIGVkYWQpIHtcclxuICAgIGlmIChzZXhvID09IFwiTXVqZXJcIikge1xyXG4gICAgICAgIHJldHVybiAoKDEwICogcGVzbykgKyAoNi4yNSAqIGFsdHVyYSkgLSAoNSAqIGVkYWQpIC0gMTYxKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoKDEwICogcGVzbykgKyAoNi4yNSAqIGFsdHVyYSkgLSAoNSAqIGVkYWQpICsgNSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gY2FsY3VsYXJLY2FsKGFjdGl2aWRhZCwgdG1iLCBrY2FsID0gdHJ1ZSkge1xyXG4gICAgaWYgKGFjdGl2aWRhZCA9PSBcImJhamFcIilcclxuICAgICAgICByZXR1cm4gKHRtYiAqIDEuMzc1KSAvIDEwMDA7XHJcbiAgICBlbHNlIGlmIChhY3RpdmlkYWQgPT0gXCJtb2RlcmFkYVwiKVxyXG4gICAgICAgIHJldHVybiAodG1iICogMS41NSkgLyAxMDAwO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiAodG1iICogMS43MjUpIC8gMTAwMDtcclxufVxyXG5mdW5jdGlvbiB0cmFuc2Zvcm1hcklucHV0TnVtYmVyKGVsZW1lbnRvKSB7XHJcbiAgICBsZXQgdmFsb3I7XHJcbiAgICB2YWxvciA9IHBhcnNlSW50KGVsZW1lbnRvLnZhbHVlKTtcclxuICAgIGlmIChpc05hTih2YWxvcikpXHJcbiAgICAgICAgdmFsb3IgPSAwO1xyXG4gICAgcmV0dXJuIHZhbG9yO1xyXG59XHJcbmZ1bmN0aW9uIGNhbGN1bGFyRGF0b3MoZXZlbnQpIHtcclxuICAgIC8vRGVmaW5pY2lvbiBkZSBsYXMgdmFyaWFibGVzXHJcbiAgICBsZXQgc2V4bztcclxuICAgIGxldCBlZGFkO1xyXG4gICAgbGV0IHBlc287XHJcbiAgICBsZXQgYWx0dXJhO1xyXG4gICAgbGV0IGFjdGl2aWRhZDtcclxuICAgIC8vTG9nXHJcbiAgICBzZXhvID0gdW5kZWZpbmVkO1xyXG4gICAgY29uc29sZS5sb2coc2V4byk7XHJcbiAgICAvL0VsaW1pbmFtb3MgbGEgcmVjYXJnYSBwb3IgZGVmZWN0byBkZWwgYnV0dG9uXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V4byA9IHNleG9TZWxlY3Qub3B0aW9uc1tzZXhvU2VsZWN0LnNlbGVjdGVkSW5kZXhdLnRleHQ7XHJcbiAgICBhY3RpdmlkYWQgPSBhY3RpdmlkYWRTZWxlY3Qub3B0aW9uc1thY3RpdmlkYWRTZWxlY3Quc2VsZWN0ZWRJbmRleF0udGV4dDtcclxuICAgIGVkYWQgPSB0cmFuc2Zvcm1hcklucHV0TnVtYmVyKGVkYWRJbnB1dCk7XHJcbiAgICBwZXNvID0gdHJhbnNmb3JtYXJJbnB1dE51bWJlcihwZXNvSW5wdXQpO1xyXG4gICAgYWx0dXJhID0gdHJhbnNmb3JtYXJJbnB1dE51bWJlcihhbHR1cmFJbnB1dCk7XHJcbiAgICAvL0xvZ1xyXG4gICAgY29uc29sZS5sb2coc2V4byk7XHJcbiAgICBjb25zb2xlLmxvZyhhY3RpdmlkYWQpO1xyXG4gICAgY29uc29sZS5sb2coZWRhZCk7XHJcbiAgICBjb25zb2xlLmxvZyhwZXNvKTtcclxuICAgIGNvbnNvbGUubG9nKGFsdHVyYSk7XHJcbiAgICAvL1JlYWxpemFtb3MgbG9zIGPDoWxjdWxvc1xyXG4gICAgbGV0IHRtYiA9IGNhbGN1bGFyVE1CKHNleG8sIHBlc28sIGFsdHVyYSwgZWRhZCk7XHJcbiAgICBsZXQga2NhbCA9IGNhbGN1bGFyS2NhbChhY3RpdmlkYWQsIHRtYik7XHJcbiAgICAvL0NvbG9jYW1vcyBlbCBjw6FsY3Vsb1xyXG4gICAgY2FsTWluLnZhbHVlID0ga2NhbC50b1N0cmluZygpO1xyXG59XHJcbi8vQXNpZ25hciBib3RvblxyXG5ib3RvbkNhbGN1bG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbGN1bGFyRGF0b3MpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=