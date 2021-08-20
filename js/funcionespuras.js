/*

los cambios sobre la referencia original se les llama tambien mutaciones debido a que se esta modificando un valor

funcion pura
     no producen efectos secundarios
     son mas sencillas de leer, razonar
     son mas faciles de sustituir
     son mas faciles de modularizar
     si se recibe como argumento un arreglo o un objeto no se debe modificar su valor dentro de la funcion




let numero = [10]

function modificador(numero){
  let copia = [...numero]//crea una copia del valor original
  console.log(copia)
  copia[0]=30//modifico la copia del valor original
  return copia //retorno la copia
}

console.log(numero)
modificador(numero)
console.log(numero)




*/