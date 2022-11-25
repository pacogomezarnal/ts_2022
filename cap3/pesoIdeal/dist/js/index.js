/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

//Definicion de las variables
let sexo;
let edad;
let peso;
let altura;
let actividad;
//Definicion de variables del DOM
const sexoSelect = document.getElementById("sexo");
const edadInput = document.getElementById("edad");
const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const actividadSelect = document.getElementById("actividad");
//Capturamos los valores por defecto
sexo = sexoSelect.options[sexoSelect.selectedIndex].text;
actividad = actividadSelect.options[actividadSelect.selectedIndex].text;
edad = parseInt(edadInput.value);
peso = parseInt(pesoInput.value);
altura = parseInt(alturaInput.value);
//Log
console.log(sexo);
console.log(actividad);
console.log(edad);
console.log(peso);
console.log(altura);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Blc29pZGVhbC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuLy9EZWZpbmljaW9uIGRlIGxhcyB2YXJpYWJsZXNcclxubGV0IHNleG87XHJcbmxldCBlZGFkO1xyXG5sZXQgcGVzbztcclxubGV0IGFsdHVyYTtcclxubGV0IGFjdGl2aWRhZDtcclxuLy9EZWZpbmljaW9uIGRlIHZhcmlhYmxlcyBkZWwgRE9NXHJcbmNvbnN0IHNleG9TZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNleG9cIik7XHJcbmNvbnN0IGVkYWRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRhZFwiKTtcclxuY29uc3QgcGVzb0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXNvXCIpO1xyXG5jb25zdCBhbHR1cmFJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWx0dXJhXCIpO1xyXG5jb25zdCBhY3RpdmlkYWRTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGl2aWRhZFwiKTtcclxuLy9DYXB0dXJhbW9zIGxvcyB2YWxvcmVzIHBvciBkZWZlY3RvXHJcbnNleG8gPSBzZXhvU2VsZWN0Lm9wdGlvbnNbc2V4b1NlbGVjdC5zZWxlY3RlZEluZGV4XS50ZXh0O1xyXG5hY3RpdmlkYWQgPSBhY3RpdmlkYWRTZWxlY3Qub3B0aW9uc1thY3RpdmlkYWRTZWxlY3Quc2VsZWN0ZWRJbmRleF0udGV4dDtcclxuZWRhZCA9IHBhcnNlSW50KGVkYWRJbnB1dC52YWx1ZSk7XHJcbnBlc28gPSBwYXJzZUludChwZXNvSW5wdXQudmFsdWUpO1xyXG5hbHR1cmEgPSBwYXJzZUludChhbHR1cmFJbnB1dC52YWx1ZSk7XHJcbi8vTG9nXHJcbmNvbnNvbGUubG9nKHNleG8pO1xyXG5jb25zb2xlLmxvZyhhY3RpdmlkYWQpO1xyXG5jb25zb2xlLmxvZyhlZGFkKTtcclxuY29uc29sZS5sb2cocGVzbyk7XHJcbmNvbnNvbGUubG9nKGFsdHVyYSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==