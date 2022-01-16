



//------programacion asincrona

/*

Qué es la programación asíncrona

En un lenguaje de programación asíncrono como JavaScript, las tareas pueden ejecutarse secuencialmente, esto significa que podemos indicar que algunas tareas se pasen a segundo plano y esperen a su turno para ser reanudadas y ejecutadas.

Esta característica del lenguaje existe para mejorar el rendimiento del mismo, porque nos permite aprovechar al máximo las capacidades del equipo en el que se está ejecutando nuestro código.

Por lo general las tareas que se esperan sean más tardadas, o que necesiten esperar respuesta de algún otro elemento del sistema, son candidatas a ser delegadas a este proceso de espera y ejecución.

JavaScript es un lenguaje de ejecución sobre un solo hilo, esto significa que sólo puede ejecutar una tarea a la vez. Cuando una operación tarda demasiado o está esperando la respuesta de otra, decimos que bloquea las demás instrucciones, precisamente porque JavaScript no puede ejecutar dos a la vez.

Para solucionar esto, JavaScript introduce el event loop, o ciclo de eventos. El event loop se compone de dos componentes principales, una cola de mensajes y un ciclo que se encuentra iterando esta cola de mensajes. La programación asíncrona en JavaScript funciona empujando ciertas operaciones a esta cola de actividades, para que no bloqueen la ejecución de código mientras terminan, el trabajo del event loop es estar preguntando las operaciones de la cola de actividades si ya han finalizado, y cuando lo hacen, reanuda la ejecución de dicha operación, la recupera por así decirlo.

Para que todo esto funcione, necesitas una forma de delegar ciertas operaciones a esta cola, y una forma de saber cuándo estas operaciones han terminado, para hacerlo JavaScript introdujo inicialmente el concepto de callbacks, y después el de promesas, finalmente a la sintaxis se introdujeron las funciones asíncronas, todos estos conceptos están diseñados para que esta comunicación entre el event loop, la cola de actividades y tu código, suceda.

Veamos en la práctica como hacerlo.

*/

/*CALLBACKS*/
console.log('hola')

//require permite importar librerias
let respuesta = require('request')//llamado a la libreria request para trabajar con peticiones asincronas

//llamado a la pagina de google usando la libreria request
//el callback es una funcion que se pasa como argumento a una operacion asincrona y se ejecuta una vez que la operacion haya finalizado
//el metodo request recibe dos parametros la url de peticion y una funcion
//una funcion callbacks es una funcion que sera llamada eventualmente
//si la operacion asincrona se demora,se sigue ejecutando el resto del codigo

respuesta('http://www.google.com',function(){
    console.log('peticion lograda')
})

console.log('mensaje despues de la peticion')//este mensaje se ejecuta antes que la peticion asincrona finalice
 
//PROMESAS

let respuesta = require('request-promise')//uso de la libreria request-promise peticiones asincronas. No usa callbacks, trabaja con promesas .then
//retorna un objeto en la operacion asincrona


//ejemplo 1
respuesta('http://www.google.com')
    .then(function(){//permite ejecutar una funcion cuando la operacion asincrona no posee errores
        console.log('mensaje dentro la promesa')
    })

//ejemplo 2
let respuesta = require('request-promise')//uso de la libreria request-promise peticiones asincronas
respuesta('http://www.google.com')//se le pasa a la funcion un valor incorrecto para capturar el error generado
    .then(function(){//permite ejecutar una funcion cuando la operacion asincrona no posee errores
        console.log('mensaje dentro la promesa')
    })
    .catch(function(err){//permite capturar errores en operaciones asincronas
        console.log( err)
    })
    .finally(function(){
        console.log('finalizo la funcion')
    })

/*
estados de la promesa
fullfield: 0 completada, significa que la promesa se completo con éxito
rejected: 0 rechazada, significa que la promesa no se completo con exito
pending: 0 pendiente, que es el estado dde la promesa cuando la operación no ha terminado, aquí decimos que la promesa no se ha cumplido
settled: 0 Finalizada, cuando la promesa terminó ya sea con éxito o con algún error.

*/

/*
los tres metodos mas usados en las promesa son

.then->si la promesa se completa correctamente
.catch -> si la promesa genera algun error
.finally-> ejecuta codigo bien sea que todo vaya bien o si se genera un error

estos metodos retornan la misma promesa
se usan de manera encadenada como se muestra en el ejemplo anterior
*/

//para crear una nueva promesa se debe instanciar un nuevo objeto Promise
//este nuevo objeto recibe como arg una funcion o executor (funcion anonima)
//este executor recibe dos argumentos (resolve,reject->)
//resolve -> cuando la promesa se ejecuta correctamente o fullfield
//reject -> cuando la promesa fue rechazada o rejected
//cada una de esta se llama con el valor que resuelve la promesa
//se pueden combinar promesa con callbacks




//CREAR PROMESAS
let mipromesa = new Promise(function(resolve,reject){
    resolve(10)
    reject('algosaliomal')
});



let request = require('request')//implementamos request que usa callbacks


function leerPagina(url){ //funcion para leer una url
    return new Promise(function(resolve,reject){ //creamos una promesa que recibe como arg una funcion llamada el executor donde esta recibe 2 arg. Resolve para resolver la promesa y reject para rechazarla
        //hacemos request a la url que recibimos como argumento, luego recibe una funcion como argumento que es una funcion callback
        //este callback a su vez recibe dos argumentos (error-> si algo salio mal, response->respuesta)
        request(url,function(error,response){
            if(error) return reject(error); //si la funcion produce algun error se rechaza la promesa y se retorna dicho error

            resolve(response)//en caso que todo este en orden o vaya bien se usa el metodo resolve con la respuesta de la operacion

        });
    });
}


//USAR PROMESAS
let promesa = leerPagina('http://google.com')//esto retorna una promesa

promesa.then(r => console.log('termino el proceso'))//en caso que se ejecute bien   
promesa.catch(err => console.log(err));//en caso que se ejecute un error

//MULTIPLES PROMESAS


let p1 = new Promise((resolve,reject) => setTimeout(resolve,500,'hola mundo'))//el tercer parametro se almacena en la variable resolve que almacena la respuesta

let p2 = new Promise((resolve,reject) => setTimeout(resolve,600,'segundo hola mundo'))

// p1.then(function(respuesta){
//     console.log(respuesta)
// })
//para resolver una promesa usamos .then seguido de una funcion que recibe como parametro la respuesta obtenida de la promesa

function finalizado(){
    console.log('este es el mensaje de la funcion finalizado')
}

//¿Como hacer que el mensaje de la funcion ocurra luego que se ejecuten las promesas p1 y p2?

//forma 1

// p1.then(function(){
//     p2.then(function(){
//         finalizado(); 
//     })
// })

//callback hell
p1.then(function(respuesta_p1){
    console.log(respuesta_p1)
    p2.then(function(respuesta_p2){
        console.log(respuesta_p2)
        finalizado();
    })
})

//forma 2
//el metodo all recobe un arreglo de promesas. Pueden ser N promesas que se quieran resolver
Promise.all([p1,p2]).then(function(resultado){//produce una nueva promesa que es resuelta hasta que todas allan finalizado, en caso que falle una no se ejecutan las demas
    console.log(resultado)
    finalizado();
}).catch(error => console.log(error))

//se usan en aplicaciones web o mobiles

//ENCADENAR PROMESAS

//multiples operaciones asincronas
//las funciones que se encadenen deben retornar promesas
//es muy importante que las funciones asincronas retornen promesas de lo contrario no serían funciones asincronas

//ejemplo

function primeraPromesa(){
    return new Promise((resolve,reject) => setTimeout(resolve,500,'hola mundo primera promesa'))
}

function segundaPromesa(r2){//funcion que se ejecutara si la 1era promesa se ejecuto correctamente
    console.log(r2)
    return new Promise((resolve,reject) => setTimeout(resolve,600,'segundo hola mundo'))
}

function finalizado2(){
    console.log('este es el mensaje de la funcion finalizado')
}

//al ejecutar primerPromesa se crea la promesa 1
//luego ejecutamos la segundaPromesa y se crea la promesa 2
//luego imprimimos el resultado de la segunda promesa
//se pueden encadenar N numero de promesas siempre y cuando estas retornen un objeto de tipo Promise
//esto se puede usar en sitios web como redes sociales
primeraPromesa().then(segundaPromesa).then(function(resp){
    console.log(resp)
});



