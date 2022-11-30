import {entrantes,primerosPlatos,segundosPlatos,postres} from './data/platos';
import {PlatoMenu} from './platomenu';


//Módulo de creación de platos en frontal HTML
let textoHTMLPlatos:string="";
//HTML de entrantes
const entrantesUL:HTMLElement=document.getElementById("entrantes");
entrantes.forEach(plato => {
    textoHTMLPlatos=textoHTMLPlatos+`<li><img src="${plato.imagen}" alt="" width="50"><p>${plato.nombre}</p></li>`
});
entrantesUL.innerHTML=textoHTMLPlatos;
//HTML de primeros
const primerosUL:HTMLElement=document.getElementById("primeros");
textoHTMLPlatos="";
primerosPlatos.forEach(plato => {
    textoHTMLPlatos=textoHTMLPlatos+`<li><img src="${plato.imagen}" alt="" width="50"><p>${plato.nombre}</p></li>`
});
primerosUL.innerHTML=textoHTMLPlatos;
//HTML de segundos
const segundosUL:HTMLElement=document.getElementById("segundos");
textoHTMLPlatos="";
segundosPlatos.forEach(plato => {
    textoHTMLPlatos=textoHTMLPlatos+`<li><img src="${plato.imagen}" alt="" width="50"><p>${plato.nombre}</p></li>`
});
segundosUL.innerHTML=textoHTMLPlatos;
//HTML de postres
const postresUL:HTMLElement=document.getElementById("postres");
textoHTMLPlatos="";
postres.forEach(plato => {
    textoHTMLPlatos=textoHTMLPlatos+`<li><img src="${plato.imagen}" alt="" width="50"><p>${plato.nombre}</p></li>`
});
postresUL.innerHTML=textoHTMLPlatos;