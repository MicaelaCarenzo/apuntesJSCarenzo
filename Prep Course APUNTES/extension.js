

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar (){
        console.log("Hola, mi nombre es " + this.nombre + " tengo " + this.edad);
    }
}

//Ahora, luego de haber hecho el ejercicio con Martin, estamos agregando la clase 
//"Programador" para poner en práctica la extensión de clase. Entonces luego de la clase
//"Porgramador", ponemos la palabra reservada extends y Persona (La clase que queremos extender)

class Programador extends Persona {
    constructor (nombre, edad, añosDeExperiencia) {
        //Ahora debemos indicar que propiedades queremos que tenga la clase programador.
        //Con la alabra Super, le permitirá a esta nueva clase no solo recibir las propiedades
        //heredadas, si no decirle a estas, que su nuevo contexto será la clase "Programador" y entre
        //parentesis, las propiedades que queremos que herede.
        //Si no lo hacemos asi, deberiamos utilizar la palabra "this" y por ende escribir muchas lineas de codigo"
    super (nombre, edad);
    //Como esta propiedad no es heredada, la tendremos que declarar como una
    // propiedad interna utilizando la palabra this.
    this.añosDeExperiencia = añosDeExperiencia;
    }
    //Agregamos un método llamado Codear.
    codear(){
       console.log("Soy "+ this.nombre + ". Codeo desde hace " + this.añosDeExperiencia + " años."
       )};
}

//Ahora para corrobar si funciona, creamos una nueva variable:

var martin = new Persona("Martin", 26);
var programador = new Programador ("María",37, 4);
 
//Ahora ejecutamos el método saludar de esta instacia:

//martin.saludar ();
//programador.codear();
programador.saludar ();

//EXTENSIÓN DE CLASE: Nos permite tener una clase general
//que le heredará propiedades y métodos a otras.
//De esta forma podemos crear distintas subentidades que puedan
// mantener sus propias caracteristicas pero que compartan algunas otras características generales.



