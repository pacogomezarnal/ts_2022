/*
* Interface de plato general
*/

interface Plato {
    nombre: string;
    imagen: string;
    descripcion?: string;
    alimentos?: string[];

    calcularKcal: () => number;
}