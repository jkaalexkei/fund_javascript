/*

FUNCIONES

CONJUNTO DE INSTRUCCIONES QUE RECIBEN UN CONJUNTO DE DATOS QUE SON PROCEDOS Y RETORNAN UNA SALIDA CUANDO SE LLAMA A LA FUNCION

RECIBEN ARGUMENTOS COMO ENTRADA DE DATOS Y RETORNA UN RESULTADO COMO SALIDA

PERMITEN ENCAPSULAR PARTES DE LA FUNCIONALIDAD DEL PROGRAMA DE MANERA INDEPENDIENTE CON LA FINALIDAD DE SUBDIVIDIR UN PROBLEMA EN SUBPROBLEMAS


SE PUEDE USAR UNA DECLARACION DE FUNCION O EXPRESION DE FUNCION


SINTAXIS

.- declaracion de una funcion
function nombredefuncion(zona de argumentos){
    bloque de codigo
}

las funciones se pueden llamar antes o despues de su declaracion

.-expresion de funcion: no empieza con la palabra reservada function

let funcion = function saludar()

la expresion de funcion solo la puedes llamar despues de haberla declarado

en una expresion de funcion el nombre es opcional

para llamar a una funcion se utiliza el nombre de la funcion


para retornar resultados de una funcion se usa la palabra reservada return resultado


las funciones se agregan al principio del alcance

los argumentos de las funciones no tienen un tipo de dato definido

los argumentos que tengan o vayan a tener un valor por defecto deben ir despues del resto de argumentos que no lo tienen


la palabra reservada arguments permite capturar los argumentos de la funcion que no son declarados en la zona de argumentos
ejemplo:
function mensaje(){
    let valores = arguments
    return valores
}

console.log(mensaje(1,2,3,4,5))

salida:
    [object Arguments] {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5
    }


*/ 

saludar()
console.log(cuadrado(4))
function saludar(){
  console.log('hola')
}

saludar()//llamada a la funcion

//declaracion de funcion
function mensaje(mensaje){
  return mensaje
}

console.log(mensaje('estoy saludando'))


function cuadrado(numero){
  return numero * numero //aca termina la ejecucion de la funcion
}

console.log(cuadrado(4))


//expresion de funcion
let funcion = function suma(a,b){
    return a + b
}

console.log(funcion(2,3))
//salida es 5




