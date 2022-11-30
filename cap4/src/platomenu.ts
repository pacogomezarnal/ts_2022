import {Plato} from './plato';
import {Alimento} from './alimento';
/*
* Clase plato de un menu
*
*/

export class PlatoMenu implements Plato{
    public static readonly TIPO_ENTRANTE = 0;
    public static readonly TIPO_PRIMERO = 1;
    public static readonly TIPO_SEGUNDO = 2;
    public static readonly TIPO_POSTRE = 2;
    
    nombre: string;
    imagen: string;
    descripcion?: string;
    private _alimentos: Alimento[];
    tipo:number;

    constructor(nombre:string, imagen:string, tipo:number) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.tipo = tipo;
        this._alimentos=[];
    }

    setAlimento(alimento:Alimento):void{
        this._alimentos.push(alimento);
    }

    calcularKcal():number{
        let kcal=0;
        this._alimentos.forEach((s:Alimento) => kcal=kcal+(s.kcal*s.cantidad));
        return kcal;
    }

    
}
