

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
