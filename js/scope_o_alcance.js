/*

REGLAS QUE DEFINEN EN QUE PARTE DEL CODIGO ESTA O NO DISPONIBLE UNA VARIABLE

UNA VARIABLE QUE SEA DECLARADA SIN UN TIPO DETERMINADO (LET,VAR,CONST) ESA VARIABLE DE MANERA AUTOMATICA SE ASIGNA AL SCOPE GLOBAL


Scope global
    hacer referencia a variables o funciones que pueden ser usadas en cualquier parte del codigo

    las modificaciones sobre esas variables afectan su funcionamiento en cualquier parte del codigo

    esta disponible en todo el codigo




Scope local
    PERMITE DECLARAR VARIABLES O FUNCIONES CON UN ALCANCE MAS LIMITADO

    LAS VARIABLES DE AMBITO LOCAL SE CREAN CUANDO LA FUNCION SE EJECUTA Y FINALIZA O SE DESTRUYE CUANDO LA FUNCION TERMINA LA EJECUCION


*/

/*

PRINCIPIO DE MENOR ACCESO
    IMPORTANCIA DE LIMITAR ACCESO SOLO A QUIEN LO NECESITA Y NO A CUALQUIERA
    NOS PERMITE SABER QUIEN O COMO FUE MODIFICADO ESA INFORMACION
    PERMITE ESTABLECER LAS VARIABLES O FUNCIONES SOLO EN EL ALCANCE QUE SE NECESITAN
*/
var nombre = 'alex'

console.log(nombre)

function saludar(){
  
  nombre = '123'
  
  console.log(nombre)
  
}
saludar()

/*

ALCANCE DE FUNCION Y DE BLOQUE

ES6 ECMAScript 6
    Cuando hablamos de ECMAScript, nos referimos al estándar que ya va por la versión ES6 y determina cómo emplear el lenguaje Javascript, que permite a los fabricantes de software desarrollar las herramientas adecuada para interpretarlo correctamente


let --> las variables estaran disponibles en el bloque mas proximo
var --> las variables se pueden usar en todo el codigo dentro del bloque completo
const -> las variables estaran disponibles en el bloque mas proximo


function saludar(mensaje){
  if (mensaje){
    const saludo = mensaje + ' alex'
    console.log(saludo)
  }
  console.log(saludo)
}

saludar('hola')

function saludar(mensaje){
  if (mensaje){
    let saludo = mensaje + ' alex'
    console.log(saludo)
  }
  console.log(saludo)
}

saludar('hola')

function saludar(mensaje){
  if (mensaje){
    var saludo = mensaje + ' alex'
    console.log(saludo)
  }
  console.log(saludo)
}

saludar('hola')
-------------------------------------------------------
function variables(){
  var nombre = 'nombre'
  if (nombre){
    console.log(nombre)
  }
  console.log(nombre)
}
variables()
console.log(nombre) //esta es la linea que genera el error

salida
"nombre"
"nombre"
"error"
"ReferenceError: nombre is not defined
    at xexozuqinu.js:9:38
    at https://static.jsbin.com/js/prod/runner-4.1.8.min.js:1:13924
    at https://static.jsbin.com/js/prod/runner-4.1.8.min.js:1:10866"



























*/