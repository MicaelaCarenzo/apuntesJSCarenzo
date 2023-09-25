/*/ PROTOTIPOS

Array.prototype.mayoresQueTres = function (){
    var arrayModificado = [];
    for (let i=0 ; i<this.length; i++){
        if(this[i]>3){
            arrayModificado.push(false)
        } else {
            arrayModificado.push(this[i]);
        }
    }
    return arrayModificado;
}

var array = [1, 2, 3, 4, 5];
var nuevoArray = array.mayoresQueTres();

console.log(nuevoArray);

/*/

//Otro ejemplo:
//Mediante el protitpo de esta clase, crearemos un método
// que nos permita agregar el nombre
//de un país, dentro de la propiedad llamada:"Pais"
//Por ende, la propiedad paises será un array de strings.

class Latinoamerica {
constructor(){
    this.paises = [];
}
}


//invocamos a la clase, llamamos al método prototype, y le ponemos nombre.
//(Esto será igual a una función que recibe por parametro un pais)
//Finalmente accede a la propiedad paises utilizando la palabra THIS
//Por medio del método PUSH, pusheamos a esta propiedad paises el valor recibido 
//En este caso "paises"
//Acabamos de crear el método:

Latinoamerica.prototype.agregarPais = function(pais) {
    this.paises.push(pais);
}

//Ahora solo nos falta probarlo:
//Para esto creamos una variable que será igual a una nueva
// instancia de la clase "Latinoamerica" " = new Lationamerica"

var continente = new Latinoamerica ();
//accedemos al método que creamos previamente "agregarPais" y le pasamos por parametro
//la palabra "Mexico"
continente.agregarPais("México");
//Luego apra verificar que todo salio bien hacemos un console log de la propiedad paises
// de nuestra instancia CONTINENTE
console.log(continente.paises);






