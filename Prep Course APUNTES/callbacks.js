
var devuelvoUsuario = function (){
    return "Camilo";
};
//Creo una función, declarando una nueva variable, 
//y luego convirtiendola en una función.

var devuelvoSalud = function(){
    return "Hola";
}

//Ahora creo una función saludar. 
//que recibirá dos funciones o callbacks por parámetro: (cb1, cb2)

var saludar = function (cb1, cb2){
    return cb1() + " " + cb2(); 
}

//Cuando hablamos acerca de la definición de una función, nos referimos a 
//la función sin ser invocada o ejecutada.
//Al utilizarse los paréntesis para invocar una función, obtenemos el resultado de su invocación.
//Con lo cual hablamos en términos de: El resultado de la función es: (En el caso de las funciones de callback)
//Siempre enviaremos por parámetro la definición de la función. No el resultado de la invocación.

var resultado = saludar(devuelvoSalud, devuelvoUsuario);
console.log (resultado);



////////////
/*/
¿Qué es un callback?
basicamente es una función, que le puedes pasar a otra como argumento. Y que se ejecuta 
después de que se haya completado cualquier operación.

/*/


////////////

var devuelvoFrase = function(comida){
    return "Hoy quiero comer " + comida;
}

var hablar = function (comida, cb){
    return cb(comida);
}

var fraseFinal = hablar("Pizza", devuelvoFrase);
console.log(fraseFinal);


//En este ejemplo, la función "Hablar" que ejecuta el cb (Callback) recibió por parámetro una variable
// llamada "Comida" y además la función callback llamada CB.
//A su vez, a esta variable comida, se le pasó como argumento al CB
//Por lo que la variable comida fue utilizada como argumento en ambas funciones,
//para obtener el resultado esperado.



