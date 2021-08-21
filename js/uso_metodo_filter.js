//quita elementos de un arreglo aplicando una condicion

//ejemplo
//retornar numeros pares

let arreglo = [1,2,3,4,5,6,7,8,9,10]

let nuevoarreglo = arreglo.filter(function(valores){
  return (valores % 2 === 0)
})


console.log(nuevoarreglo)


//ejemplo
//eliminar elementos usando filter


let arreglo = ['a','b','c']

let nuevoarreglo = arreglo.filter(function(valores){
  return valores !== 'a'
})

console.log(nuevoarreglo)

//devuelve solo numeros impares

let arreglo = [1,2,3,4,5,6,7,8,9,10]

let nuevoarreglo = arreglo.filter(function(valores){
  return valores % 2
})

console.log(nuevoarreglo)
