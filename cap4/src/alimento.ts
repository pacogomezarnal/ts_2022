/*
* Clase alimento
*
*/

export class Alimento{
    private _nombre:string;
    private _kcal:number;
    private _cantidad:number;

      // Normal signature with defaults
    constructor(nombre:string, kcal:number) {
        this._nombre = nombre;
        this._kcal = kcal;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre:string) {
        this._nombre = nombre.toUpperCase();
    }

    get kcal() {
        return this._kcal;
    }
    set kcal(kcal:number) {
        if(kcal<0) this._kcal=0;
        else this._kcal=kcal;
    }

    get cantidad() {
        return this._cantidad;
    }
    set cantidad(cant:number) {
        if(cant<0) this._cantidad=0;
        else this._cantidad=cant;
    }
}