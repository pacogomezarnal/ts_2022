//Este es Paquito
let edad: number =47;
let nombre: string ="Paco";
const aficiones: string[] = ["cocina","musica","tecnología","deporte"];
let aficionesTxt:string ="";

//Introducimos datos
const contenedor: HTMLElement = document.getElementById('cardPerfil')!;
contenedor.innerHTML="<li>>>> Nombre: "+nombre+"</li>";
contenedor.innerHTML=contenedor.innerHTML+"<li>>>> Edad: "+edad+"</li>";

aficiones.forEach(function (value) {
    aficionesTxt=aficionesTxt+value+", ";
});
contenedor.innerHTML=contenedor.innerHTML+"<li>>>> Aficiones: "+aficionesTxt+"</li>";