
/* 

HOISTING

las funciones y variables pueden ser usadas antes de ser declaradas, esto se debe al proceso por el cual javascript mueve los elementos a la parte superior del scope. dicho proceso se llama hoisting

console.log(variable)

var variable


function demo(){
    console.log(x);

    var x;

}
demo()
el interprete se encarga de ubicar las declaraciones al principio del scope

se recomienda declarar las variables al principio

ejemplo de hoisting

console.log(suma(10,10))

function suma(a,b){ return a + b}

salida
    20







*/