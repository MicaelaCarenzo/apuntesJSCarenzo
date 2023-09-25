/*/ Concepto basico:

var deportes = {
    conBalon: ["Football", "Basketball", "Rugby"], 
    sinBalon: ["Boxeo", "Surf", "Trecking"]
};


var persona = { 
    nombre: "Lucas", edad:26, estudios: {esProgramador: True} 
};



var persona = { 
    nombre: "Lucas", edad:26, estudios: { esProgramador: true} 
};

//console.log (persona.edad);
persona.nombre = "Micaela";

persona.edad = 29;
//console.log(persona.edad);

// ELIMINAR propiedades:

var autos = {};
autos.marcas = ["Ford", "Audi", "Ferrari"]; //ASI CREAMOS UNA PROPIEDAD O LA REESCRIBIMOS SI ESTA YA EXISTE.
delete autos.marcas;

console.log(autos);




//AGREGAR FUNCIONES:


var misFunciones = {
    saludar: function () {
    console.log("Hola");
},
}

misFunciones.saludar();



var atuendos = {manos: ["Guantes", "Anillos"], pies: ["Zapatos", "Soquetes"]
};

//console.log (atuendos.manos);


//Bracket notation:
atuendos ["Piernas"] = ["Bermudas", "Pantalones"];
console.log(atuendos);


// Hasta acá, lo que veremos en la terminal será exactamente 
//igual con DOT NATOTAION Y BRACKET NOTATION. 
//La diferencia es que la propiedad la vemos entre brackets y comillas.


var comidas = {};
var diferenciaDeNotaciones = function(propUno, propDos) {
    comidas[propUno] = ["Frutas", "Vegetales"]
    comidas[propDos] =["Hamburgues", "Papas fritas"];
};

diferenciaDeNotaciones("saludables", "noSaludable");
console.log(comidas);


var libro = { autor: "Borges", gener: "Policial", año:1990};
var tienePropiedad = libro.hasOwnProperty("autor");
//console.log(tienePropiedad);

var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades);



//FOR IN


var mundo = { continentes: 7, paises:195, oceanos:5};
for(var prop in mundo){
    console.log("Esta es la propiedad: " + prop)
    console.log("Este es el valor" +mundo[prop]);
}


/*/

var mascota = { animal: "Perro", 
raza: "Ovejero Aleman", 
amistoso: true, 
dueña: "María Lopez",
info: function() {
    console. log("Mi perro es un " + this.raza);
}
};

mascota.info();
















