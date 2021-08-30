//metodos Bind,call,apply
//permiten asignar el valor de this

 /* se ejecutan de manaera inmediata*/

function demo(){
    this.nombre='alex';
    this.saludar = function(){
      console.log(this,arguments)
    };
  }
  
  
  let obj = new demo();
  
  obj.saludar();//en este punto el valor del objeto this es igual al objeto generado
  
  /* ejecutan de manaera inmediata la funcion
    call y apply estos asignan un valor para this
    
    
    ejemplo:
    Lazy: bind
  */
  
  obj.saludar.call({},'1','2')//los argumentos que estan despues del objeto vacio son los que se reciben en la funcion saludar y se asignan al objeto this 
  
  
  
 

  function demo(){
    this.nombre='alex';
    this.saludar = function(){
      console.log(this,arguments)
    };
  }
  
  
  let obj = new demo();
  
  obj.saludar();

 obj.saludar.apply({},['1','2'])
 
 //apply
 
 //para el caso de apply es muy similar a call, la diferencia radica en la manera en como se envian los argumentos
 //para la funcion
 //los argumentos se envian en solo segundo argumento
 // estos se envian en un arreglo
 //se pueden pasar n cantidad de valores
 //

 //ACA ABAJO SE TRABAJA CON bind

function demo(){
    this.nombre='alex';
    this.saludar = function(){
      console.log(this,arguments)
    };
  
    this.saludar = this.saludar.bind(this);//aca se le esta diciendo que en cualquier punto de la ejecutacion conserve el objeto con el que se este trabajando
    //la linea anterior indica que el contexto siempre siempre consevara su valor
  
}
  
  
  let obj = new demo();
  
 let f = obj.saludar;
f();
setTimeout(obj.saludar,100)
  
// obj.saludar();

//  obj.saludar.bind({},'1','2')
 
 //bind
 
 //nos permite asignar el valor de this sin que la funcion se ejecute
 //retorna una nueva funcion para el que fue definido
 
 let nuevafuncion = obj.saludar.bind({},'1','2')
 nuevafuncion()