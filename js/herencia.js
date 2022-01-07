
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
    saludar(){
        super.saludar()
        console.log('estoy saludando desde la clase hija')
    }
}



let obj = new Hija()


obj.saludar()
