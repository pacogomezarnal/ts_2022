import {entrantes,primerosPlatos,segundosPlatos,postres} from './data/platos';
import {PlatoMenu} from './platomenu';
import {Alimento} from './alimento';

//Funcion de lista de compra
function anyadirLista(plato:PlatoMenu):void{
    //Elemento para añadir alimentos
    const listaCompra:HTMLElement=document.getElementById("listacompra");
    plato.alimentos.forEach((alimento)=>{
        listaCompra.innerHTML=listaCompra.innerHTML+`<li>${alimento.nombre}</li>`
    });
}

//Funcion de control del frontal
function anyadirMenu(event:any):void{
    const plato:HTMLElement=event.target;
    const tipo:number=parseInt(plato.dataset.tipo);
    const pos:number=parseInt(plato.dataset.pos);
    //Pintamoms los datos del plato seleccionado en la tarjeta adecuada
    let platoElegido;
    let liElegido:HTMLElement;
    switch(tipo) { 
        case PlatoMenu.TIPO_ENTRANTE: { 
            platoElegido=entrantes[pos];
            liElegido=document.getElementById("menuEntrante");
            break; 
        } 
        case PlatoMenu.TIPO_PRIMERO: { 
            platoElegido=primerosPlatos[pos];
            liElegido=document.getElementById("menuPrimero");
            break; 
        } 
        case PlatoMenu.TIPO_SEGUNDO: { 
            platoElegido=segundosPlatos[pos]; 
            liElegido=document.getElementById("menuSegundo");
            break; 
        } 
        case PlatoMenu.TIPO_POSTRE: { 
            platoElegido=postres[pos]; 
            console.log(platoElegido);
            liElegido=document.getElementById("menuPostre");
            break; 
        } 
        default: { 
           //statements; 
           break; 
        } 
     }
     liElegido.innerHTML=`<img src="${platoElegido.imagen}" alt="" width="100"><p>${platoElegido.nombre}</p><p class="kcal">Kcal: ${platoElegido.calcularKcal()}</p>`  
     //Sumamos las kcalTotales
     const kcalInPutTotal:HTMLInputElement=<HTMLInputElement>document.getElementById("kcalTotal");
     kcalInPutTotal.value=(parseInt(kcalInPutTotal.value)+platoElegido.calcularKcal()).toString();
     //Anyadimos la lista de la compra
     anyadirLista(platoElegido);
}


//Módulo de creación de platos en frontal HTML
let textoHTMLPlatos:string="";
let contador:number=0;
//HTML de entrantes
const entrantesUL:HTMLElement=document.getElementById("entrantes");
entrantes.forEach(plato => {
    textoHTMLPlatos=textoHTMLPlatos+`<li><img src="${plato.imagen}" alt="" width="50" class="imgPlato" data-pos="${contador}" data-tipo="${plato.tipo}"><p>${plato.nombre}</p></li>`
    contador++;
});
entrantesUL.innerHTML=textoHTMLPlatos;
//HTML de primeros
const primerosUL:HTMLElement=document.getElementById("primeros");
textoHTMLPlatos="";
contador=0;
primerosPlatos.forEach(plato => {
    textoHTMLPlatos=textoHTMLPlatos+`<li><img src="${plato.imagen}" alt="" width="50" class="imgPlato" data-pos="${contador}" data-tipo="${plato.tipo}"><p>${plato.nombre}</p></li>`
    contador++;
});
primerosUL.innerHTML=textoHTMLPlatos;
//HTML de segundos
const segundosUL:HTMLElement=document.getElementById("segundos");
textoHTMLPlatos="";
contador=0;
segundosPlatos.forEach(plato => {
    textoHTMLPlatos=textoHTMLPlatos+`<li><img src="${plato.imagen}" alt="" width="50" class="imgPlato" data-pos="${contador}" data-tipo="${plato.tipo}"><p>${plato.nombre}</p></li>`
    contador++;
});
segundosUL.innerHTML=textoHTMLPlatos;
//HTML de postres
const postresUL:HTMLElement=document.getElementById("postres");
textoHTMLPlatos="";
contador=0;
postres.forEach(plato => {
    textoHTMLPlatos=textoHTMLPlatos+`<li><img src="${plato.imagen}" alt="" width="50" class="imgPlato" data-pos="${contador}" data-tipo="${plato.tipo}"><p>${plato.nombre}</p></li>`
    contador++;
});
postresUL.innerHTML=textoHTMLPlatos;

//Asignamos eventos a todos los platos
const todosPlatos = document.getElementsByClassName("imgPlato");
for(let plato of todosPlatos){
    plato.addEventListener("click", anyadirMenu);
}
