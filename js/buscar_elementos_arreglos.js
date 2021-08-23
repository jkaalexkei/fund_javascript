/*

metodos para buscar elementos en un arreglo


indexOf:
    busca un valor en un arreglo y retorna la posicion en la que fue encontrado utiliza el operador ===

sintaxis:
    let arreglo = ['a','b','c']
    arreglo.indexOf(valorbuscado)

    retorna -1 si el elemento no se encuentra en el arreglo

    let arreglo = ['a','b','c']

let elemento = arreglo.indexOf('b')

console.log(elemento)

este caso retorna -1 porque el elemento no esta en el arreglo, en caso de conseguir una coincidencia devuelve la posicion del elemento
--------------------------------------------------------
includes:
    retorna verdadero si esta el elemento o false sino no lo encuentra
    tambien usa el operador ===
    permite un segundo para indicar a partir de que indice se iniciara la busqueda

    metodo includes

    let arreglo = ['a','b','c']

    let elemento = arreglo.includes('b',0)

    console.log(elemento)

--------------------------------------------------

find:
    permite pasar una funcion de prueba para ejecutar la busqueda 

    find --> funcion de prueba --> elemento 

    la funcion de prueba recibe como argumentos
    el elemento
    la posicion
    el arreglo

    esta funcion se ejecuta para cada elemento del arreglo


    metodo find


    let arreglo = ['a','b','c']

    let respuesta = arreglo.find(function(elemento,posicion,arreglo){
    
    return elemento === 'c'
    
    })

    console.log(respuesta)

    retorna el elemento encontrado en este caso 'c'

---------------------------------------------------------
    findIndex:
        retorna la posicion en la que esta el elemento
    
    let arreglo = ['a','b','c']

    let respuesta = arreglo.findIndex(function(elemento,posicion,arreglo){
    
    return elemento === 'c'
    
    })

    console.log(respuesta)

    retorna la posicion del elemento encontrado en este caso 2

------------------------------------------------------

some:
    retorna true|false dependiendo de lo que se necesite retornar el elemento o su posicion

    let arreglo = ['a','b','c']

    let respuesta = arreglo.some(function(elemento,posicion,arreglo){
    
    return elemento === 'c'
    
    })

    console.log(respuesta)


*/

