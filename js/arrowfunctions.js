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
  -tienen una sintaxis mas corta que la declaracion con function
  - heredan el valor de this del contexto en el que fueron creadas y no se reasigna
  
  
  */

  let estudiante = {
      nombre: 'alex',
      saludar:()=>function(){
          
                    console.log('hola soy '+ this.nombre);
                }
  }