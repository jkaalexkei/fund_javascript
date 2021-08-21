//foreach

let arreglo = ['a','b','c','d','e']

//permite recorrer elementos usando la nomeclartura del punto
//sintanxis

//nombredelarreglo.forEach(funcionanonima(variable){
//   codigo a ejecutar
// })

//la funcion anonima puede recibir tres parametros
//variable, indice,nombredelarreglo

//1.- variable que guarda los elementos a recorres
//2.- contiene los indices del arreglo
//3.- contiene el arreglo completo

arreglo.forEach(function(variable, indice, arreglo){
  console.log(variable,indice,arreglo)
})