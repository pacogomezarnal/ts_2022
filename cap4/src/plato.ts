/*
* Interface de plato general
*/

interface Plato {
    nombre: string;
    imagen: string;
    descripcion?: string;

    calcularKcal: () => number;
}

export {Plato};