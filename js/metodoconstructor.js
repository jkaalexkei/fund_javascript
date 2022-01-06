class Cursos{
    
    //declaracion de constructor con valorers por defecto
    constructor(titulo,color='azul'){
       this.titulo = titulo
      this.color = color
      console.log(arguments)
    }

    
}

let obj = new Cursos('python')
