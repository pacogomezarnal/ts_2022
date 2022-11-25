//Definicion de las variables
let sexo:string;
let edad:number;
let peso:number;
let altura:number;
let actividad:string;
//Definicion de variables del DOM
const sexoSelect:HTMLSelectElement=document.getElementById("sexo") as HTMLSelectElement;
const edadInput:HTMLInputElement=document.getElementById("edad") as HTMLInputElement;
const pesoInput:HTMLInputElement=document.getElementById("peso") as HTMLInputElement;
const alturaInput:HTMLInputElement=document.getElementById("altura") as HTMLInputElement;
const actividadSelect:HTMLSelectElement=document.getElementById("actividad") as HTMLSelectElement;


//Capturamos los valores por defecto
sexo=sexoSelect.options[sexoSelect.selectedIndex].text;
actividad=actividadSelect.options[actividadSelect.selectedIndex].text;
edad=parseInt(edadInput.value);
peso=parseInt(pesoInput.value);
altura=parseInt(alturaInput.value);

//Log
console.log(sexo);
console.log(actividad);
console.log(edad);
console.log(peso);
console.log(altura);
