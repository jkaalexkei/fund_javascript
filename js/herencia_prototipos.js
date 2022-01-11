
// class Curso{
//     title = 'Hola'
    
//     constructor(){
//         this.inscribir = function(nombre){
//             this.nombre = nombre //se pueden definir en cualquier parte de la clase
//         }
//     }

//     inscribir(nombre){ //se recomienda esta sintaxis para declaracion de metodos dentro de una clase
//         this.nombre = nombre
//     }

//     //sintaxis de expresion asignandolos a una variable

//     inscribir = function(nombre){
//         this.nombre = nombre
//     }

//     //declaracion de un metodo con la sintaxis de flecha

//     inscribir = (nombre)=> this.nombre = nombre

// }

// let c = new Curso()
// c.inscribir('alex')

// console.log(c.nombre)

//----ALCANCE DE PROPIEDADES------

// class Cursos{
    
//     //declaracion de constructor con valorers por defecto
//     constructor(titulo,color='azul'){
//        this.titulo = titulo
//     }

    
// }

// let obj = new Cursos('python')




// class Padre{
//     nombre = 'alex'
// }

// class Hija extends Padre{

// }



// let obj = new Hija()


// console.log(obj.nombre)

//herencia 

// class User{
//     constructor(nombre){
//         this.nombre = nombre
//     }
//     saludar(){
//         console.log('hola usuario')
//     }
// }

// class Admin extends User{
//     constructor(nombre){
//         super(nombre) //uso de la funcion super para hacer el llamado al constructor de la clase padre que donde se asigna el valor de la propiedad nombre
//     }

//     saludar(){
//         super.saludar();// uso de la funcion super para hacer el llamado del metodo saludar de la clase padre
//         console.log('hola soy admin')
//     }
// }

// let admin = new Admin('Alex')
// console.log(admin.nombre)

//metodos getters y setters

class User{
    get nombre(){ //metodo getter
        return this._nombre
    }

    set nombre(nombre){ //metodo setters
        this._nombre = nombre
    }
}


let obj = new User();

obj._nombre = 'otro' //llamado al metodo setters

console.log(obj._nombre) //llamado al metodo getters



//propiedades y metodos estaticos

class Objeto{
    static PROPIEDAD = 'Alex' //PROPIEDAD ESTATICA, EL NOMBRE VA CON LAS LETRAS MAYUSCULAS
    
    static Metodo(){ //METODO ESTATICO
        console.log(this.PROPIEDAD)
    }
}
Objeto.Metodo()//NOMBRE DE CLASE Y EL METODO ESTATICO

console.log(Objeto.PROPIEDAD) //NOMBRE DE LA CLASE Y LA PROPIEDAD ESTATICA

//------------------------------------------------------------------------------
class Objeto{
    static PROPIEDAD = 'Alex' //PROPIEDAD ESTATICA, EL NOMBRE VA CON LAS LETRAS MAYUSCULAS
    
    static Metodo(){ //METODO ESTATICO
        return new this() //retornamos un  nuevo objeto
    }
    nombre = 'valor' //propiedad de clase
}


console.log(Objeto.Metodo()) //NOMBRE DE LA CLASE Y LA PROPIEDAD ESTATICA

//---salida
//Objeto { nombre: 'valor' }


//-------objeto que crea otros objetos--------------------------------------------------
//ejemplo de objeto que crea otros objetos
class User{
    permiso = 0
    static Admin(){
        let user = new this()
        user.permiso = 5
        return user
    }
}

console.log(User.Admin())

//---------PROGRAMACION ORIENTADA A PROTOTIPOS--------------------------------
  
function name(params) {
    
}


function Course(){}

Course.prototype.inscribir = function(){
    console.log('hola')
}

let course = new Course();
course.abandonar = function(){
    console.log('abandonar');};

course.title = 'hola2'
course.inscribir();

console.log(course)


//---------ejemplo 3----------

function Course(){}

Course.prototype.inscribir = function(){ //funcion del prototipo del objeto Course
    console.log('hola')
}

let python = new Course()
let js = new Course()

Course.prototype.inscribir = function(){//cuando se modifica el metodo inscribir perteneciente al prototipo los cambios se reflejan en todos los objetos de la cadena de prototipos
    console.log('hola2')
}


Course.prototype.otrometodo = function(){//se agrega una funcion nueva al prototipo aun despues de haber instanciado el objeto
    console.log(':(')
}


python.otrometodo()
js.inscribir()



//---------ejemplo 4----------

function Course(){}

Course.prototype.inscribir = function(){ //funcion del prototipo del objeto Course
    console.log('hola')
}

Course.prototype.conteo =0



let python = new Course()

python.__proto__.conteo += 1 //uso de la propiedad __proto__ e incremento de la variable conteo
let js = new Course()

js.__proto__.conteo += 1 

console.log(Course.prototype.conteo)

//---herencia de prototipos


function curso(titulo){ 
    this.titulo = titulo
}

let js = new curso('curso de javascript');

let ruby = Object.create(js)//Object.create se usa para crear nuevos objetos yt heredar sus metodos y propiedades

ruby.titulo = 'curso de ruby'

console.log(js)
console.log(ruby)



