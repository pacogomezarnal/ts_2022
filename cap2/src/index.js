const pedido=[];
const carrito=document.getElementById('carrito');

function log(texto){
    console.log(texto);
}

function nuevoElm(elm){
    carrito.innerHTML=carrito.innerHTML+"<p>"+"Nigiri salmon"+"</p>"
    pedido.push(elm);
    log("[NUEVO] "+elm)
}

function borrarElm(ind){
    pedido.splice(ind,1);
    log("[BORRADO] "+ind)
}

nuevoElm("Nigiri salmon");