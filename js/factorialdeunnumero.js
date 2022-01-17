/*El factorial de un número entero n es
una operación matemática
que consiste en multiplicar 
todos los factores n x (n-1) x (n-2) x ... x 1. 
Así, el factorial de 5 (escrito como 5!) 
es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120*/

var arreglo = []
function factorial(numero){
  for(i=0;i<=numero;i++){
    arreglo[i] = numero * (numero-i)
    console.log(numero * (numero-i))
    
  }
}

factorial(5);

console.log(arreglo)
