/*
Tipo de datos

Primitivos

string 
number
boolean
undefined
symbol
null

estos tipo de datos son inmutables, no se pueden cambiar

Para transformar un tipo de dato primitivo a su equivalente en Objeto se debe hacer de la siguiente manera

String()
Number()
Boolean()
Symbol()
BigInt()

si se les pasa a la funcion un tipo de dato distinto esta lo convierte, y se les puede añadir un sufijo

funciones para cambiar tipos de datos

parseInt() --> esto es una conversion de tipo explicita

let numero = 20

console.log(String(numero))

console.log(Number(numero).toString())

Type coercion hacen una conversion implicitas


variable = 10 + '5'

console.log(variable)


variable = "10" == 10; 
esto retorna True debido a que el proceso de conversion implicita arrojo un resultado similar entre ambos

variable = [] == 0

console.log(variable)

*/