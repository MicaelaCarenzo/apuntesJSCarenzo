/*/ 
//La palabra function es una palabra reservada que debemos poner siempre al incio de una función.
//Lo que sigue, es ponerle nombre a la funcion. En este caso "SumaTres" Luego entre paréntesis ponemos el argumento o parámetro. Podemos poner
//todos los que necesitemos.
//Lo que está luego entre llaves se llama cuerpo de la función.
//Y es aquí donde indicaremos las instrucciones que ejecutará la función.


function sumaTres(x) {
    console.log(x+3)
};

sumaTres(5);


//Distintas maneras de declarar una función:

//PRIMERO:

function sumaTres(x) {
    return x+3;
}

//SEGUNDO:

var sumaTRes = function (x) {
    return x+3;
}

//TERCERO: Función de flecha. 

var sumaTRes = (x) => {
    return x+3;
}
/*/

//Las tres cumplen la misma función al fin y al cabo.


var animal = "caballo";

console.log (animal);