
/* 
el contexto:
    se refiere al valor que tiene la palabra reservada this
    cuando el interprete evalua esta palabra dependiendo del sitio en el que se encuentre puede adoptar un valor diferente.
    this<-->
*/

// console.log(this)

function demo(){
    console.log(this)
  }
  
  //demo()
  
  window.demo()//es lo mismo que la linea anterior
  
  //una funcion que este en el alcance global es mandada a llamar a traves del objeto global
  
  //el valor del contexto comienza a cambiar cuando definimos una funcion dentro de un objeto
  
  
// let objeto = {
//   caminar: function(){
//     console.log(this)
//   }
// }

// objeto.caminar()
//en este caso this no hace referencia al objeto global
//el valor del contexto es el objeto que ejecuta la funcion
//el valor del contexto depende de donde se ejecuta y no de donde se declara
//en el momento de la ejecucion es donde se le da el valor de this
//cuando enviamos una funcion o metodo como argumento este pierde su referencia original

//ejemplo para entender el contexto

function demo(){
    console.log(this);
  }
  
  let objeto = {
    funcion : demo
  }
  
  objeto.funcion()
  
  let objeto = {
    func : function(){
    console.log(this)
  }
}


let segundoObjeto = {
  func:null,
  ejecutor: function(f){
    this.func = f;//asignamos la funcion
    this.func();//ejecutamos la funcion
  }
}

segundoObjeto.ejecutor(objeto.func)


let estudiante = {
    nombre:'alex',
    saludar: function(){
        console.log('hola soy ' + this.nombre)
    }
}

estudiante.saludar()

//------------------------------------------------

let estudiante = {
    nombre:'alex',
    saludar: function(){
        console.log('hola soy ' + this.nombre)
    }
}

estudiante.saludar()

let otra = estudiante.saludar;

otra()
