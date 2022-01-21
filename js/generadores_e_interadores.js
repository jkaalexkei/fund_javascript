/*
ITERADORES:

ITERAN SOBRE UN RANGO DE DATOS PERO SIN LA NECESIDAD DE UNA COLECCION

LA MEMORIA VIRTUAL TIENE UN LIMITE

ITERACION SOBRE OBJETOS PERSONALIZADOS

MEJORA EL RENDIMIENTO 
IMPLEMENTAR PROPIA LOGIA DE ITERACION


DEFINICION:
ES CUALQUIER OBJETO QUE IMPLEMENTA EL PROTOCOL ITERATOR(PROTOCOLO ITERADOR)

CUALQUIER OBJ QUE IMPLEMENTE UN METODO NEXT, QUE RETORNE UN OBJETO CON LA PROPIEDAD VALUE Y UNA PROPIEDAD DONE ES UN ITERADOR.

sintaxis:

let iterador = { //declaracion de un obj iterador
    next(){ //funcion next
        return {
            value:null , // es cualquier dato que el iterador produzca (numero,cadena,funcion, entre otros) un dato a la vez
            done: true o false // indica si ha terminado de producir valores a iterar o no, en caso de verdader significa que ha completado el proceso no produce mas informacion, en caso de ser falso continua con la iteracion
        }
    }
}

*/

//ejemplo 1

let iterador = { //definimos el iterador

    valores:1, //iniciamos los valores a iterar en 1

    next(){ //declaramos la funcion next

        let resultado = { value:null,done:false};// damos un estado inicial al iterador, estos valores son los que retorna el iterador

        if(this.valores > 0 && this.valores <=5){//validamos que el iterador vaya de 0 hasta 5
            //los valores producidos van dentro de value
            resultado = {value:this.valores,done:false} //le asignamos a la propiedad value el iterador y la done la establecemos en false indicando que el iterador a finalizado
            this.valores += 1//incrementamos la propiedad valores
        }else{//en caso contrario

            resultado = {done:true} // al objeto iterador en su propiedad done le asignamos true para indicarle que aun no ha finalizado su recorrido
        }

        return resultado

        }
    };

    /*iteracion 1*/console.log(iterador.next())//llamado al iterador y su metodo next
    /*iteracion 2*/console.log(iterador.next())
    /*iteracion 3*/console.log(iterador.next())
    /*iteracion 4*/console.log(iterador.next())
    /*iteracion 5*/console.log(iterador.next())
   

    salida
    /*
        iteracion 1
        [object Object]{
            done:false,
            value:1
        }

        iteracion 2
        [object Object]{
            done:false,
            value:2
        }

        .
        .
        .
        iteracion 5
        [object Object]{
            done:false,
            value:5
        }
*/
/*
caracteristicas de los iteradores

produce un valor a la vez en su ejecucion,
la iteracion es perezosa, se puede llamar al elemento cuando se necesite
no hay forma de reiniciarlo, solo se recorre una vez
debe retornar el valor final

*/

//RECORRIDO DE UN ITERADOR USANDO UN BLUCLE WHILE

let item = iterador.next()

while(item.done){
    console.log(item.value)
    item = iterador.next()
}

//output
//  1
//  2
//  3
//  4
//  5


/* GENERADORES 

SINTAXIS MAS CLARA

NO SE NECESITA ESTAR A CARGO DEL ESTADO DEL OBJETO

SE NECESITA DEFINIR UNA FUNCION GENERADORA LA CUAL LLEVA UN * LUEGO DE LA PALABRA FUNCTION

function * contador(){
   
    yield 1; //pausa la ejecucion de la funcion y cuando reanuda lo hace desde ese punto, el valor al lado de la palabra reservada yield es el valor que se retornara via el protocolo de iterador
    
    para ejecutar un generador se hace el llamado de la funcion generadora
    siempre retorna generadores
    no se ejecuta hasta tanto no se emplee el metodo next()
    cuando se alcanza el numero de iteraciones, yield retorna como valor undefined y done como verdadero
}



*/

function* contador(){
    console.log('saludo')
    yield 1;
    console.log('saludo2')
    yield 2;
}

function* conta(){
    
   for(var i = 1;i<=5;i++){
       yield i;
   }
}

console.log(contador.next())

//YIELD DETIENE LA EJECUCION DEL CICLO FOR PARA ENTREGAR UN VALOR
//YIELD ES SIMILAR A RETURN
//RETORNARA UN GENERADOR
//NO SE PREOCUPA POR GUARDAR UN ESTADO INTERNO
//IMPLICITAMENTE RETORNA UN GENERADOR


function* retornador(){
    return 3; //produce un valor repestanto el protocolo iterable
}

let g = retornador()

console.log(g.next())

//salida

// [object Object]{
//     done:false,
//     value:3
// }

/* llamar return o yield es similar y adicionalmente mandar a llamar el generador 
 todo lo que aparezca despues de un return no se ejecutara porque el generador habra terminado


 DELEGAR GENERADORES

 YIELD
    Se manda a llamar junto con una expresion que produce un resultado
    este resultado se asigna a la propiedad value del objeto que retorna yield
    tambien se le puede enviar una funcion generadora y delegar la continuidad de la ejecutacion del programa a otro generador. Permite encadenar otros generadores (delegacion de generadores)

*/

function* conta(){
    
   for(var i = 1;i<=5;i++){
       yield i;
   }
}

console.log(contador.next())

function* retornador(){

    yield* conta(); //aqui se delega a la funcion conta el generador
}

let g = retornador()

console.log(g.next())

/*

USO DE GENERADORES

SIMBOLOS

SON UN PRIMITIVO DEL LENGUAJE
SON UNICOS
SU PROPOSITO ES AGREGAR UNICIDAD (UNICO)

*/

//DECLARACION

let simbolo = Symbol(descriptivo)

//SE USA PARA CLAVES EN LAS PROPIEDADES DE LOS OBJETOS
//LOS SIMBOLOS NO SUSTITYEN LAS CADENAS
// UN EJEMPLO DE USO DE SIMBOLOS ES EL USO DE ITERABLES

//EJEMPLO

let simbolo = Symbol('mi-simbolo')

let obj = {};

obj[simbolo] = function(){

    console.log('Mi nombre es un Simbolo')
}

obj[simbolo]()

/*

Iterables con iteradores

*/

