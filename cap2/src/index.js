const util = require("./util.js");
require("./css/reset.css");
require("./css/estilos.css");

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