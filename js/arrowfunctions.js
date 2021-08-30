//arrow functions
//en una sola linea se puede prescindir de las llaves
//no es necesario asignarle un nombre
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
  
  */

  let estudiante = {
    nombre: 'alex',
    saludar:()=> { console.log('hola soy '+ this.nombre); },
    //arrows function adopta su valor del momento en el que es definido
    saludo: function(){
        console.log('Hola soy '+ this.nombre)//aca el objeto el this adopta el valor en el momento que es ejecutado
    }
}

estudiante.saludar()//devuelve 'hola soy undefined'
estudiante.saludo()//devuelve 'hola soy alex'



  