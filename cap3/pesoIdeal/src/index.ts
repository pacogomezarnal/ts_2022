//Definicion de las variables
let sexo:string;
let edad:number;
let peso:number;
let altura:number;
let actividad:string;
//Definicion de variables del DOM
const sexoSelect:HTMLSelectElement=document.getElementById("sexo") as HTMLSelectElement;
const edadInput:HTMLInputElement=<HTMLInputElement>document.getElementById("edad");
const pesoInput:HTMLInputElement=document.getElementById("peso") as HTMLInputElement;
const alturaInput:HTMLInputElement=document.getElementById("altura") as HTMLInputElement;
const actividadSelect:HTMLSelectElement=document.getElementById("actividad") as HTMLSelectElement;
const calMin:HTMLInputElement=document.getElementById("calMin") as HTMLInputElement;
const botonCalculo:HTMLButtonElement=<HTMLButtonElement>document.getElementById("calculobtn");

function calcularTMB(sexo:string,peso:number,altura:number,edad:number):number{
    if(sexo=="Mujer"){
        return ((10*peso)+(6.25*altura)-(5*edad)-161);
    }else{
        return ((10*peso)+(6.25*altura)-(5*edad)+5);
    }
}
function calcularKcal(actividad:string,tmb:number):number{
    if(actividad=="baja") return (tmb*1.375)/1000;
    else if(actividad=="moderada") return (tmb*1.55)/1000;
    else return (tmb*1.725)/1000;
}

function transformarInputNumber(elemento:HTMLInputElement):number{
    let valor:number|any;
    valor=parseInt(elemento.value);
    if(isNaN(valor)) valor=0;
    return valor;
}
function calcularDatos(event:any){
    //Eliminamos la recarga por defecto del button
    event.preventDefault();

    sexo=sexoSelect.options[sexoSelect.selectedIndex].text;
    actividad=actividadSelect.options[actividadSelect.selectedIndex].text;
    edad=transformarInputNumber(edadInput);
    peso=transformarInputNumber(pesoInput);
    altura=transformarInputNumber(alturaInput);

    //Log
    console.log(sexo);
    console.log(actividad);
    console.log(edad);
    console.log(peso);
    console.log(altura);

    //Realizamos los cálculos
    let tmb=calcularTMB(sexo,peso,altura,edad);
    let kcal=calcularKcal(actividad,tmb);

    //Colocamos el cálculo
    calMin.value=kcal.toString();
}

//Asignar boton
botonCalculo.addEventListener("click", calcularDatos);
