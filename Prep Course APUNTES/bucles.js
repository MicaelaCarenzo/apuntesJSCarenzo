/*/

//SIN BUCLE

var suma = 0;
suma = suma +1;
suma = suma +2;
suma = suma +3;
suma = suma +4;

console.log (suma)

//Ahora intentaremos sumar una cantidad N de números, consecutivamente, pero esta vez con 
//la ayuda de un bucle FOR.
//primero utilizamos la palabra reservada FOR. y luego abrimos paréntesis. 
//Lo primero que escribimos será la variable de iteración. Nos permitirá justamente 
//tener una variable de iteración en cada bucle para poder ejecutar acciones. "i=0"
//Lo segundo es una condición de cumplimiento: Mientras esta condición sea verdad, el bucle
//seguirá ejecutandose. En este caso "i<5". O sea, que la variable i sea menor a 5.
//Por ultimo le decimos al bucle QUÉ debe suceder con la variable de iteración, CADA vez que termina de 
//ejecutarse CADA ciclo. Ahora le pedimos que se incremente una sola vez en cada iteración. (i++)
 //Dentro de las llaves del bucle, escribimos el bloque de código que queremos que se repita.

 var suma = 0;

for (var i=0 ; i<5 ; i++){
    suma = suma + i;
    console.log("variable de iteracion", i);
}

console.log ("Variable suma: ", suma)

El resultado de suma será 10. Porque fuimos acumulando el valor de la variable de iteración.
/*/

var suma = 0;

while(suma <3){
    suma = suma +1;
    console.log (suma);
}





