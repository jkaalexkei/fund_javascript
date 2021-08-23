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

//----------------------------------------------------------------------

let valor = [1,2,3,4,5,6,7,8,9,10]

//caso 1
for (let i = 1; i<=valor.length;i++){
  if (i%2==0){
    console.log('el numero es par: '+i)
  }else{
    console.log('el numero es impar: '+i)
  }
}

//caso 2 usando metodo filter
let nuevoarreglo = valor.filter(function(elemento){
  return elemento % 2 //esto retorna solo los resultados que sean verdaderos o que el resultado de la operacion modulo sea 1
})

console.log(nuevoarreglo)
