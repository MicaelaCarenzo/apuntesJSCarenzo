/*/

function Auto (puertas, color, marca, año, ruedas){
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;

    this.informacion = function(){
        console.log ("Este es un " + this.marca + " de color " + this.color);
    }
}

var miPrimerAuto = new Auto(2, "Rojo", "Ferrari", "2018", "4");

miPrimerAuto.informacion();

//NUEVO METODO:

class Auto {
    constructor (puertas, color, marca, año, ruedas) {
        this.puertas = puertas;
        this.color = color;
        this.marca = marca;
        this.año = año;
        this.ruedas = ruedas;
    }
    informacion() {
        console.log ("Este es un string para demostrar que funciona bien" + ". Y el auto es un: " + this.marca);
    }
}


var miSegundoAuto = new Auto (4, "Blanco", "Fiat", 2015, 4);

miSegundoAuto.informacion();

//console.log(miSegundoAuto);
//console.log(miSegundoAuto.marca);


/*/

class football {
    constructor(jugador){
        this.jugador = jugador
    }
    obtenerNombre(){
        console.log(this.jugador);
    }
}

var argentina =new football ("Messi")
var brasil = new football ("Pele")

argentina.obtenerNombre();
brasil.obtenerNombre();


