//--------------------------------------------------------------------------


let promesa = new Promise((resolve,reject)=>{
    setTimeout(resolve,400,5)
});

promesa.then((resultado) => { console.log(resultado)});

console.log(promesa)
/*
await-> espera que una promesa sea Resuelta. Evitando uso de then o funciones anonimas

la sintaxis es mas clara y legible

se debe colocar la palabra await ante de la instancia de la promesa

se debe usar la palabra async antes de la palabra function

para poder usar await debe hacerse dentro de una funcion asincrona

no se puede usar await en cualquier lugar

await transforma el resultado a un valor tradicional

no se usan funciones anonimas

await transforma el resultado a su valor correspondiente y tambien se pueden hacer cualquier tipo de operaciones

no es un objeto especial

no hace uso del metodo catch para capturas errores

usa bloques 
try{
    ...
}catch{
    ...
}
 para capturas errores
*/

//sintaxis

( async function(){ //declaracion de funcion asincrona

    let promesa = await new Promise((resolve,reject)=>{

        setTimeout(resolve,400,5)

    });
    
    //promesa.then((resultado) => { console.log(resultado)});
    
    console.log(promesa)

})();//los parentesis al final indican que se ejecutara de manera automatica

//output---> 5

//EJEMPLO 2 --- SUMAR DOS VALORES

( async function(){ //declaracion de funcion asincrona

    let promesa1 = await new Promise((resolve,reject)=>{

        setTimeout(resolve,400,5)//resuelve 5

    });
    let promesa2 = await new Promise((resolve,reject)=>{

        setTimeout(resolve,400,10) //resuelve 10

    });
    
    //promesa.then((resultado) => { console.log(resultado)});
    
    console.log(promesa1 + promesa2)

})(); //output---> 15


//EJEMPLO 3

async function showGitHub(){

    let response = await fetch('https://api.github.com/users/urielhdz/repos');//PETICION FETCH DEVUELVE UNA PROMESA
    let repos = await response.json();//SE CONVIERTE LA RESPUESTA A UN FORMATO JSON
    console.log(repos);//SE IMPRIME EL RESULTADO
}

showGitHub();

//MANEJO DE ERRORES EN PROMESAS

(async function(){
    //bloque try catch para captura de errores
    try{
        //dentro de este bloque try pueden haber N cantidad de promesas
        let promesa = await Promise.reject('error')
    }catch(error){
        //todas las promesas que fqllen son capturas en este bloque catch
        console.log(error)
    }
})();
