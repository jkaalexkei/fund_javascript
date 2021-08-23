
/*

Metodo reduce

permite aplicar una operacion de reduccion a un arreglo y reducirlo a un solo valor

sintanxis:

recibe una funcion como argumento y el primer parametro es un acumulador y no el elemento que se esta iterando, este acumulador es una variable que se va pasando entre las distintas ejecuciones de la funcion que va iterando y adopta como valor el ultimo elemento o valor 

el primer valor que se imprime tiene un valor undefined

si se quiere darle un valor inicial al acumulador se lo pasamos como segundo parametro a la funcion

ejemplo: 

let numeros=[1,2,3,4,5]

numeros.reduce(function(acumulador,elemento){
  console.log(acumulador)
  return 1
},2)


ejemplo 2:

suma de numeros de un arreglo y los va acumulando en una variable
let numeros=[1,2,3,4,5]

let suma = numeros.reduce(function(acumulador,elemento){
  console.log(acumulador) esto imprime el numero del acumulador
  return acumulador + elemento
},0)

console.log(suma) retorna el ultimo valor generado


//trabajar con string
let nombres = ['alex','varela']

let html = nombres.reduce(function(acumulador,elemento){
//   console.log(acumulador)
  return acumulador +  "<li>" + elemento + "</li>"
},'')

console.log(html)



*/