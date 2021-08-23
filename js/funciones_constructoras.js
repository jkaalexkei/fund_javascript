/* 
construir objetos a partir de funciones

una funcion que se utiliza para crear objetos se llama funciones constructoras
se recomienda que el nombre de la funcion la primera letra sea mayuscula
sintaxis:

function saludo(){
    let objeto = new saludo();
}

 */

//Funciones Constructoras
//a la funcion tambien se le puede pasar argumentos
//luego al momento de hacer la instancia del nuevo objeto se le pasan los valores

function Saludar(){

      //this permite agregarle propiedades y metodos al objeto
    this.titulo = 'hola'
    this.saludo = function saludo(){}
    console.log(this)
  }
  
  let objeto = new Saludar();
  
  