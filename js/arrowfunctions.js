//arrow functions
//en una sola linea se puede prescindir de las llaves
//no es necesario asignarle un nombre
//en una arrows function no es necesario colocar las llaves de apertura y cierre cuando la funcion es de una sola linea
//las arrows function genera un retorno implicito
//el nombre de la funcion proviene del nombre de la variable
//un arrow function de una sola linea retorna el resultado de dicha linea



let demo = ()=>{
  
    console.log('saludo')
  }
  
  demo()
  
  let suma = (a,b) => a + b //arrows functions
  
  console.log(suma(2,3))


/*
  Arrow function y el contexto

  */

  /*
  -tienen una sintaxis mas corta que la declaracion con function
  - heredan el valor de this del contexto en el que fueron creadas y no se reasigna
  -arrow function no reasignan this
  
  
  */

  let estudiante = {
    nombre: 'alex',
    saludar:()=> { console.log('hola soy '+ this.nombre); },
    //arrows function adopta su valor del contexto en el momento que es definido
    saludo: function(){
        console.log('Hola soy '+ this.nombre)//aca el objeto this adopta el valor en el momento que es ejecutado o ejecutada la funcion.
    }
}

estudiante.saludar()//devuelve 'hola soy undefined'
estudiante.saludo()//devuelve 'hola soy alex'


//ejemplo2

function Estudiante(){
  this.nombre = 'alex'
  this.saludar = () => console.log('hola ' + this.nombre);
  
}  

let e = new Estudiante();
e.saludar()
  
  
  
  
