

/*CALLBACKS*/
console.log('hola')

//require permite importar librerias
let respuesta = require('request')//llamado a la libreria request para trabajar con peticiones asincronas

//llamado a la pagina de google usando la libreria request
//el callback se ejecuta una vez que la 
//el metodo request recibe dos parametros la url de peticion y una funcion

respuesta('http://www.google.com',function(){
    console.log('peticion lograda')
})
 
//PROMESAS

let respuesta = require('request-promise')//uso de la libreria request-promise peticiones asincronas

//ejemplo 1
respuesta('http://www.google.com')
    .then(function(){//permite ejecutar una funcion cuando la operacion asincrona no posee errores
        console.log('mensaje dentro la promesa')
    })

//ejemplo 2
let respuesta = require('request-promise')//uso de la libreria request-promise peticiones asincronas
respuesta(2)//se le pasa a la funcion un valor incorrecto para capturar el error generado
    .then(function(){//permite ejecutar una funcion cuando la operacion asincrona no posee errores
        console.log('mensaje dentro la promesa')
    })
    .catch(function(err){//permite capturar errores en operaciones asincronas
        console.log( err)
    })

/*
estados de la promesa
fullfield: 0 completada, significa que la promesa se completo con éxito
rejected: 0 rechazada, significa que la promesa no se completo con exito
pending: 0 pendiente, que es el estado dde la promesa cuando la operación no ha terminado, aquí decimos que la promesa no se ha cumplido
settled: 0 Finalizada, cuando la promesa terminó ya sea con éxito o con algún error.

*/

// // herencia js mediante el comando Object.create

// function Curso(titulo){this.titulo= titulo;}

// let js = new Curso('curso js')

// let ruby = Object.create(js)

// console.log(ruby.titulo)

// ruby.titulo='curso de ruby'

// console.log(ruby)
// console.log(js)

// function objetoNuevo(valor){ this._valor = valor}

// let nuevoObj = new objetoNuevo('texto de prueba')

// //console.log(nuevoObj)

// let otroObj = Object.create(nuevoObj)//permite crear un objeto a partir de un objeto ya creado

// console.log(otroObj.__proto__ === nuevoObj)//esto retorna true porque la propiedad __proto__ del nuevo objeto es igual a la propiedad __proto__ del objeto que esta heredando

// function Curso(titulo){
//     this.titulo = titulo
// }

// Curso.prototype.inscribir = function (){
//     console.log('inscribir')
// }

// function Livecurso(date){
//     this.publicado = date
// }

// Livecurso.prototype = Object.create(Curso.prototype)

// let js = new Liivecurso(new Date())

// /*

// En javascript la herencia de prototipos funciona al incluir el prototype de una clase en la cadena de prototipos de un objeto.

// Un objeto puede heredar de otro si lo usamos como primer argumento de Object.create

// Una funcion constructora puede heredar de otra si usamos el prototype de la clase base como primer argumento de Object.create y asignamos ese resultado al prototype de la clase hija

// */


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
//el callback se ejecuta una vez que la 
//el metodo request recibe dos parametros la url de peticion y una funcion

respuesta('http://www.google.com',function(){
    console.log('peticion lograda')
})
 
//PROMESAS

let respuesta = require('request-promise')//uso de la libreria request-promise peticiones asincronas

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
let request = require('request')//implementamos request que usa callbacks

function leerPagina(url){ //funcion para leer una url
    return new Promise(function(resolve,reject){ //creamos una promesa que recibe como arg una funcion llamada el executor donde esta recibe 2 arg. Resolve para resolver la promesa y reject para recharla
        //hacemos request a la url que recibimos como argumento, luego recibe una funcion como argumento que es un callback
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




