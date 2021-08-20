
/*

-->argumento por valor

    cuando se envia una copia del argumento original, esta en una direccion distinta y cualquier modificacion al parametro no afecta el argumento original



ejemplo de paso de argumento por valor

let numero = 20

function modificador(numero){
  numero = 25
  console.log('valor dentro de la funcion '+numero)
}


console.log(numero)
modificador(numero)
console.log(numero)






-->argumento por referencia

    cuando el parametro apunta a la misma direccion que el argumento original, cuando se modifica este valor tambien se afecta el valor original


ejemplo de paso de argumentos por referencia



let numero = [20]

function modificador(numero){
  
  numero[0] = 25 //esto modifica el valor original
  
  console.log('valor dentro de la funcion '+numero)
  
}


console.log(numero)
modificador(numero)
console.log(numero)

-------------------------------------------------------------
cualquier valor que no sea un objeto o un arreglo sera pasado como valor (numedros,cadenas,otros)





*/