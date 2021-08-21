//Modificar arreglos con Map

//genera un nuevo arreglo luego de aplicar una modificacion para cada elemento de la coleccion original


let numeros = [2,3,4,5,6]

//calculo de cuadros de los elementos del arreglo

//usando un bucle for

let cuadrados = []

for(let i = 0; i < numeros.length;i++){
  
  cuadrados[i] = numeros[i] * numeros[i]
  
}

console.log(cuadrados)


//calculo de cuadrados usando Map

/*
sintaxis

let variable = nombredearreglo.map(function(elemetos){
  return elementos * elementos
})

console.log(variable)
*/


let nuevoarray = numeros.map(function(valores){
    return valores * valores
  })
  
  console.log(nuevoarray)


//conversion de string a numero

let numerosstr = ['10','20','30']

console.log(numerosstr)

let nuevoarr = numerosstr.map(function(numerosString){
      
  return parseInt(numerosString)//aca se retorna los elementos del array convertidos a numeros enteros
  
})

console.log(nuevoarr)
