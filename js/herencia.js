
class Padre{
    nombre = 'alex'
}

class Hija extends Padre{

}

let obj = new Hija()


console.log(obj.nombre)

//------------------------------------------------------------------------
class Padre{
    //nombre = 'alex'
    saludar(){
        console.log('estoy saludando desde la clase padre')
    }
}

class Hija extends Padre{
    //esta manera o caracteristicas permite extender metodos del padre o sobreescribir sin duplicar la funcionalidad que hay en padre.
    saludar(){
        super.saludar()
        console.log('estoy saludando desde la clase hija')
    }
}



let obj = new Hija()


//herencia uso de la funcion super

class User{
    constructor(nombre){
        this.nombre = nombre
    }
    saludar(){
        console.log('hola usuario')
    }
}

class Admin extends User{
    constructor(nombre){
        super(nombre) //uso de la funcion super para hacer el llamado al constructor de la clase padre que donde se asigna el valor de la propiedad nombre
    }

    saludar(){
        super.saludar();// uso de la funcion super para hacer el llamado del metodo saludar de la clase padre
        console.log('hola soy admin')
    }
}

let admin = new Admin('Alex')
console.log(admin.nombre)


obj.saludar()


// herencia uso de la encapsulacion y metodos accesores
class User{
    get nombre(){ //metodo getter
        return this._nombre
    }

    set nombre(nombre){ //metodo setters
        this._nombre = nombre
    }
}


let obj = new User();

obj._nombre = 'Alex' //llamado al metodo setters

console.log(obj._nombre) //llamado al metodo getters


