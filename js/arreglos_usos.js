/* 

+ pueden almacenar cualquier tipo de dato de primera clase, funciones, objetos, n{umeros, cadenas, booleanos e incluso otros arreglos

+ una de las propiedades de los arreglos es su longitud, la longitud es igual a la cantidad de elementos dentro del arreglo

+ cada elemento en el arreglo ocupa una posicion, y se accede a dicho elemento usando el nombre del arreglo mas la posicion del elemento que queremos, a dicha posicion tambien se le conoce como el index

+ las posiciones de los elementos inician a contar desde 0, de manera que el primer elemento del arreglo tiene como index 0

+ la ultima posicion del arreglo es igual a la longitud del arreglo, menos uno, ese menos uno responde al hecho de que el cuenta inicia de 0 


son colecciones que se pueden usar en 
la longitud del arreglo es igual a la cantidad de elementos que estos poseen

puede contener distintos tipos de datos


+

*/

//ejemplos

let calificacion = [10,9,8,7,9]
console.log(calificacion)
calificacion[2] = 4
console.log(calificacion)

calificacion.push(20)//el metodo push agrega un elemento al final del arreglo, retorna el total de elementos
calificacion.unshift(50) //el metodo unshift agrega un elemento al inicio del arreglo
console.log(calificacion)
calificacion.pop() //pop elimina el ultimo elemento
console.log(calificacion)
calificacion.shift()//shift elimina el primer elemento, retorna el elemento eliminado
console.log(calificacion)

valores = ['a','b']

let c = valores.shift()

console.log(c//c almacena el valor eliminado

/* 
for(let i = 0;i < arreglo.length; i++){
    let element = arreglo[i];
    console.log(element);
}

Operaciones funcionales con arreglos
En versiones modernas de javaScript, los arreglos poseen una serie de métodos que nos permiten realizar operaciones para, recorrerlos, inspeccionarlos, o modificarlos.

Estas operaciones se introducen en la revisión de 2009 del lenguaje, conocida como ES5. ES5 es una de las revisiones más importantes que se han hecho al lenguaje, en parte por la introducción de estas operaciones.

Lo que tienen en común las operaciones forEach, map, reduce, filter y find, es que son métodos que puedes usar en cualquiera arreglo, y que operan a través de funciones que enviamos como argumento para estos métodos, la sintaxis la iremos destacando en vídeos individuales para cada operación.

Este tipo de trabajo adopta prácticas del paradigma de programación funcional, en el que la mayoría del código se estructura a través del uso de funciones.

El uso de las operaciones que verás en los próximos temas normalmente reduce la complejidad y lo verboso del código, es decir, lo hace más sencillo de comprender y reduce la cantidad de líneas que debes escribir para realizar una operación.

Es importante aclarar que un bloque de código no es mejor cuando es más pequeño que otro, cuando programamos debemos buscar que el código sea comprensible, no corto. Para evaluar este aspecto veamos las siguientes operaciones, ambas realizan lo mismo utilizando diferentes enfoques:

for(let i = 0;i < arreglo.length; i++){
   let element = arreglo[i];
   console.log(element);
}

arreglo.forEach(function(element){ console.log(element) });
En este escenario, además de que usar un método del arreglo hace el código más corto, e incluso lo puede resumir en una sola línea, también es más expresivo, forEach nos da un indicio de que hace el código, para cada uno de los elementos.

Veamos en los siguientes temas más detalles de cómo funcionan estas operaciones funcionals sobre arreglos.
 */