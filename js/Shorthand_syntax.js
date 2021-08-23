
// Shorthand syntax
//     cuando asignamos una variable a una propiedad con el mismo nombre

//     el valor de la variable se adopta como valor de la propiedad


let nombre = 'alex'

let usuario = {nombre : nombre}

let nombre = 'alex'

let usuario = {nombre:nombre}//shorthand propertys
nombre = 'varela'
console.log(usuario.nombre)
console.log(nombre)

let objeto = {
  edad:38,
  residencia:'venezuela',
  //dos maneras de asignar funciones a los objetos
  caminar:function(){ console.log('estoy caminando');},
  //forma que recomienda shorthand syntax
  saludar(){console.log('estoy saludando');}
}

objeto.saludar()
objeto.caminar()