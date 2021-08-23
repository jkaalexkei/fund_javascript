//Destructuring assignment
//asignacion por desestructuracion
// se necesita colocar del lado izquierdo del operador de asignacion las llaves y dentro las variables en las que se va a separar el objeto
//Destructuring assignment

let usuario = {nombre:'alex',edad:20}

let {nombre,edad} = usuario


let {nombre: minombre } = usuario;//aca estamos obtiendo la propiedad nombre del objeto usuario y lo asignamos a la variable mi nombre


console.log(nombre,edad)

console.log(minombre)



//-----------------------------------------------
//combinar el operador spread operator con desestructuracion

let carro = {
    color:'verde',
    marca:'toyota',
    ruedas:4
    
  }
  
  let {ruedas,...resto} = carro; //aca asignamos lo que tiene la propiedad ruedas del objeto carro a la variable ruedas
  // el resto de propiedades fueron asignadas a un nuevo objeto llamado resto 
  
  console.log(ruedas)
  console.log(resto)

  
//-----------------------------------------------
//combinar el operador spread operator con desestructuracion

let carro = {
    color:'verde',
    marca:'toyota',
    ruedas:4
    
  }
  
  //a esta funcion se le pasa como argumento
  //la propiedad ruedas del objeto 
  //de esta manera se puede usar las sintaxis anteriores
  //se puede asignar a otras variables
  // se puede asignar valores por defecto a variables
  function ruedas({ ruedas }){
    
    console.log(ruedas)//aca se imprime en pantalla
  }
  
  ruedas(carro)//aqui a la funcion se le pasa el objeto ruedas
  
  //esto tambien es aplicable a los arreglos


  let arreglo = [1,2,3,5,6,7,8,9,10]

  let [uno,dos,tres,...resto] = arreglo

  console.log(uno,dos,tres,resto)

  //en la variable resto se crea un nuevo arreglo con los elementos del arreglo que no fueron asignados

//---------------------------------------------------
  let arreglo = [10,20]

//aca tambien en la funcion se separan los valores en variables independientes
function suma([v1,v2]){
//cuando la funcion recibe parametros
  return v1 + v2
}

console.log(suma([10,20]))

let arreglo = [10,20]
//------------------------------------------------------
function retornaValores(){
  //cuando la funcion retorna valores
  return [1,2,3]
}

let [uno,dos,...resto] = retornaValores();

console.log(resto)


//CONSIDERACIONES FINALES:

/*

1.- Asignar varias propiedades de un objeto a distintas variables en la misma linea de codigo

2.- Obtener algunas propiedades del objeto y excluir otras

3.- Separar las propiedades de un objeto que se reciba como argumento de una funcion en distintas variables, separar el retorno de una funcion en distintas variables 

4.- Todo lo anterior tambien aplica para los arreglos





*/




