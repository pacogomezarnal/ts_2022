import {Plato} from './plato';

/*
* Clase Bebida de un menu
*
*/

class BebidaMenu implements Plato{
    nombre: string;
    imagen: string;
    descripcion?: string;
    
    calcularKcal: () => number;
}
