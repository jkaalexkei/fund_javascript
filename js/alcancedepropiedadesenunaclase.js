class Cursos{
    #titulo = 'hola mundo' //declaracion de variables privadas

    constructor(){
        this.#metodo2()
    }

    metodo(){ //este metodo es accesible desde fue de la clase
        console.log('bienvenido ' + this.#titulo)
    }

    #metodo2(){ //este metodo solo es accesible desde dentro de la clase
        console.log('bienvenido ' + this.#titulo)
    }
}

let obj = new Cursos()

//console.log(obj.#titulo)


