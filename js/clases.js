//en javascript las clases no existen
//javascript es orientado a prototipos
//

class Cursos{
  propiedad = 'valor' //declaracion de propiedades
  
  constructor(){ //funcion constructora
    this.titulo = 'JS'
  }
  
  inscribir(){
    this.nombre = 'valor' //propiedad de la clase asignada mediante this
    console.log('mensaje')
  }
}

let obj = new Cursos()//creacion de instanacia de la clase Cursos

obj.propiedad //hacer uso de la propiedad
obj.metodo() // hacer uso del metodo 


//------------------------------------------------------------
class Cursos{ //declaracion de la clase
  propiedad = 'valor';
  
  funcion(valor){ 
    
    this.prop = valor;//propiedad de la clase mediante this
    
  }
}

let obj = new Cursos()

console.log(obj.propiedad)
obj.funcion('alex')
console.log(obj.prop)

//---------------formas de declarar metodos en JS----------------------------------------------
class Curso{
    title = 'Hola'
    
    constructor(){
        this.inscribir = function(nombre){
            this.nombre = nombre //se pueden definir en cualquier parte de la clase
        }
    }

    inscribir(nombre){ //se recomienda esta sintaxis para declaracion de metodos dentro de una clase
        this.nombre = nombre
    }

    //sintaxis de expresion asignandolos a una variable

    inscribir = function(nombre){
        this.nombre = nombre
    }

    //declaracion de un metodo con la sintaxis de flecha

    inscribir = (nombre)=> this.nombre = nombre

}

let c = new Curso()
c.inscribir('alex')

console.log(c.nombre)
