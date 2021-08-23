
// el operador spread(...) puede utilizarse sobre cualquier objeto iterable

// este operador lo que  hace es extender una estructura que combina varios elementos en sus elementos de manera separada. para el caso de los objetos esto nos permite duplicar o combinar los objetos.

//sintaxis

/* 

    let copia = { ...usuario } //se crea una copia del objeto en la variable


*/

//Duplicar o combinar objetos

let usuario = {
    edad:20,
    nombre:'alex',
    
  }
  
  let admin = {
    clave:1234,
    tipo:'admin',
    permisos:true,
  };
  
  
  let copia = {...usuario,...admin}//se crea una copia del objeto y se le pueden añadir mas propiedades o metodos, o tambien se puede duplicar o se combinan las propiedas
  //en caso de haber propiedades duplicadas se conserva el valor de la ultima creada o definido


  
  console.log(copia)

  //Duplicar o combinar objetos

let usuario = {
    edad:20,
    nombre:'alex',
    
  }
  
  let admin = {
    clave:1234,
    tipo:'admin',
    permisos:true,
  };
  
  //otra forma mediante el uso de objects.asig
  
  let copia = Object.assign(usuario,admin,{objeto1},{objeto2},{objetoN})
  //los argumentos significan (fuente,de donde vienen los datos)
  console.log(copia)
  
  
  let nuevacopia = Object.assign(usuario,{saludo:'hola'})
  console.log(nuevacopia)

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  