/*
* Clase plato de un menu
*
*/

class PlatoMenu implements Plato{
    public static readonly TIPO_ENTRANTE = 0;
    public static readonly TIPO_PRIMERO = 1;
    public static readonly TIPO_SEGUNDO = 2;
    public static readonly TIPO_POSTRE = 2;
    
    nombre: string;
    imagen: string;
    descripcion?: string;
    alimentos: string[];
    tipo:number;

    calcularKcal: () => number;
    
}