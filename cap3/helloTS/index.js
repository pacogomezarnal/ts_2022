//Este es Paquito
var edad = 47;
var nombre = "Paco";
var aficiones = ["cocina", "musica", "tecnología", "deporte"];
var aficionesTxt = "";
//Introducimos datos
var contenedor = document.getElementById('cardPerfil');
contenedor.innerHTML = "<li>>>> Nombre: " + nombre + "</li>";
contenedor.innerHTML = contenedor.innerHTML + "<li>>>> Edad: " + edad + "</li>";
aficiones.forEach(function (value) {
    aficionesTxt = aficionesTxt + value + ", ";
});
contenedor.innerHTML = contenedor.innerHTML + "<li>>>> Aficiones: " + aficionesTxt + "</li>";
