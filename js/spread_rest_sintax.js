
/*

iterable
    sintaxis de expansion

    cualquier objeto de javascript que se pueda separar en elementos es un iterable

    operador
    Spread Syntax (...)

    let arreglo = [1,2,3,4]

    console.log(arreglo)
    console.log(...arreglo)

        salida:
            1
            2
            3
            4
    
    let nombre = 'alex'
    console.log(...nombre)    

    Rest Parameters
        Unifica los elementos en un arreglo
        esto consiste en crear una funcion y en la zona de parametros colocar (...) antes de la variable o argumento

            
function demo(...argumento){
  console.log(argumento)
  
}

demo(1,2,3,4)

function valores(nombre,...numeros){
  console.log(nombre)
  console.log(numeros)
}

valores('alex',1,2,3,4,5)

Salida:

"alex"
[1,2,3,4] 


arguments es un objeto
*/