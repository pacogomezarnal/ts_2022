import {Alimento} from '../alimento';
import {PlatoMenu} from '../platomenu';


//Entrantes
const entrantes:PlatoMenu[]=[];
entrantes.push(
    new PlatoMenu("pan con tomate","./img/entrante01.png",0)
);
entrantes[0].setAlimento(new Alimento("tomate",18,2));
entrantes[0].setAlimento(new Alimento("pan",270,1));
entrantes.push(
    new PlatoMenu("tabla quesos","./img/entrante04.png",0)
);
entrantes[1].setAlimento(new Alimento("queso",403,2));


//Primeros platos
const primerosPlatos:PlatoMenu[]=[];
primerosPlatos.push(
    new PlatoMenu("sopa de ajo","./img/primero01.png",1)
);
primerosPlatos[0].setAlimento(new Alimento("ajo",149,0.1));
primerosPlatos[0].setAlimento(new Alimento("pan",270,0.25));
primerosPlatos.push(
    new PlatoMenu("sushi salmón","./img/sushi01.png",1)
);
primerosPlatos[1].setAlimento(new Alimento("arroz",130,1.5));
primerosPlatos[1].setAlimento(new Alimento("salmon",208,0.25));

//Segundos platos
const segundosPlatos:PlatoMenu[]=[];
segundosPlatos.push(
    new PlatoMenu("pizza margarita","./img/segundo01.png",2)
);
segundosPlatos[0].setAlimento(new Alimento("ajo",149,0.1));
segundosPlatos[0].setAlimento(new Alimento("pan",270,0.25));
segundosPlatos[0].setAlimento(new Alimento("tomate",25,0.2));
segundosPlatos.push(
    new PlatoMenu("lasaña","./img/segundo02.png",2)
);
segundosPlatos[0].setAlimento(new Alimento("placa lasaña",224,1));
segundosPlatos[0].setAlimento(new Alimento("carne picada",240,1));
segundosPlatos[0].setAlimento(new Alimento("tomate",25,2));

//Postres
const postres:PlatoMenu[]=[];
postres.push(
    new PlatoMenu("tarta chocolate","./img/postre01.png",3)
);
postres[0].setAlimento(new Alimento("chocolate",546,2));
postres[0].setAlimento(new Alimento("azucar",386,3));
postres[0].setAlimento(new Alimento("bizcocho",340,5));



export {entrantes,primerosPlatos,segundosPlatos,postres};