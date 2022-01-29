/*Strings o cadenas
Como has visto a lo largo del curso, en JavaScript, el texto se representa a través de strings o cadenas, es probable que identifiques este tipo de valor porque aparecen entre comillas simples o dobles.

En términos técnicos, las cadenas según la definición del lenguaje, son secuencias ordenadas de 0 más valores unsigned int de 16bits, usados principalmente para representar texto. En un programa de Ecmascript cada uno de estos elementos se guardan en unidades de código UTF-16.

Históricamente, en ciencias de la computación nos hemos referido a las representaciones de texto como cadenas o strings, porque estas son una colección de elementos o caracteres, en un orden específico.

En JavaScript, a diferencia de otros lenguajes, no existe un tipo de dato para los caracteres que conforman una cadena, por lo que, sin importar si tu cadena está compuesta de 1 o varios elementos siempre serán una cadena.

El texto de una cadena se encuentra en formato UTF-16 lo que significa que podemos usar los 1,112,064 de puntos unicode existentes. En términos prácticos esto significa que podrás usar caracteres especiales y emojis, de hecho, más adelante en el bloque hablaremos más a fondo de emojis.

Otra característica importante de las cadenas es que son inmutables, esto significa que todas las operaciones que realices sobre una cadena, generarán nuevas cadenas, en lugar de modificar la original.

A lo largo de este bloque continuarás conociendo a fondo las propiedades de una string, cómo ejecutar operaciones comunes, partir cadenas, buscar en cadenas, entre otras cosas.


puede ser un objeo o dato primitivo

primitivo se identifica con comillas simples o dobles

objeto  se identifica 
*/

//dato primitivo
let nombre1 = 'Alex'
let nombre = "Alex"

nombre.length //crea un objeto en base al dato primitivo y luego se deshace del objeto

//objeto 
let nombre2 = new String('alex')//este metodo retorna un objeto

console.log(nombre1) //retorna string
console.log(nombre2) //retorna object

/*coarsion de tipos
para que los primitivos del lenguaje incluidas las cadenas puedan responden al llamado y usar propiedades javascript crea un objeto a partir del dato primitivo para responder a la accion y luego desecha este objeto

este proceso de coarsion tambien se puede hacer a la inversa cuando se quiere tratar un objeto string como un primitivo. JS creara un primitivo temporal y luego se deshace de el.

el lenguaje se ocupa de diferenciar si se esta usando un objeto o primitivo

no existe diferencia entre "" y ''

->CARACTERES ESPECIALES O SCAPING

da una instruccion especial a la pc

permite agregar caracteres que alteren la cadena

se usa la "\caracter" para escapar un caracter. Despues de la barra invertida se agregar el caracter que se considera especial*/

console.log('hola \'mundo'\' ');

/*
despues de cada barra invertida va un caracter especial o que escapara

\\ doble barra invertida permite escapar la misma barra diagonal

se usa para expresar tabulaciones y saltos de linea

ejemplo

console.log('\n \r\n \t')
saltos de linea
unix \n
windows \r\n
tabulacion \t

*/

/*CONCATENACION O INTERPOLACION*/

/*
UNE DOS CADENAS

OPERADOR MAS + PARA CONCATENAR

USO DEL METODO CONCAT cadena1.concat(cadena2) esto rretorna una nueva cadena

INTERPOLACION
  UNIR UNA CADENA EN CUALQUIER PUNTO DE OTRA
  TEMPLATE LITERAL  `` COMILLAS INVERTIDAS*/

let nombre = 'Alex';

let template = `Hola $(nombre), mundo`;

//ejemplos
let mes = prompt('Ingresa tu mes de nacimiento');

if (mes.length<2) {
    console.log(`Tu mes de nacimiento es: 0${mes}`);
}else if(mes<=12 && mes>=1){
    console.log(`Tu mes de nacimiento es ${mes}`);
}else{
    console.log(`Debes colocar un valor entre 1 y 12`);
}

//ejercicio
//1-9 => 0N
//11 o 12 => 11,12

let mes = "6";

console.log(mes.padStart(2,"0")); //primer arg indica la longitud que espero
console.log(mes.padEnd(2,"0")); // agrega la cadena al final en la longitud deseada


//comparacion de cadenas

// <, >, <=,>=,==

console.log("a" > "b")

//cuando se comparan dos cadenas se hace utilizando el valor numerico de ambas
console.log("a">"b")
//api de internacionalizacion de cadenas

//metodo localcompare, retorna un enetero 1,-1,0
//si la cadena base aparece antes que la cadena de comparacion en orden alfabetico retornara -1 en caso contrario retornara 1
// 0 -> iguales
// 1 -> no iguales
//-1 ->  
// ejemplo

//uso del metodo localeCompare -> metodo del objeto String

console.log("a".localeCompare("b"));


//las comparaciones son sensibles a mayusculas y minusculas
//las operaciones con las cadenas son inmutables
//la modificacion se entregara en una nueva cadena

//una cadena esta conformada por una secuencia ordenada de caracteres
//se pueden acceder a los valores de la cadena segun su posicion empezando por el 0
//para iterar una cadena se puede utlizar el ciclo for of

ejemplo:
let cadena =  "HOLA"

for (const caracters of cadena){
    console.log(caracteres)
}

//se puede usar los metodos toLowerCase / toUpperCase
console.log("A".toLowerCase().localeCompare("a".tolowerCase()))
//las cadenas son inmutables o no pueden cambiar su valor
//la modificacion de una cadena se entrega en una nueva cadena
let prueba = "Hola"
let segundaCadena = prueba.toUpperCase();

console.log(prueba)
console.log(segundaCadena)
//se debe conservar la cadena Base
/*

//Subcadenas y caracteres
//secuencia ordenada de caracteres
//puede usar la posicion del caracter ejemplo
*/

console.log("saludo"[0])
//salida "s"

//para iterar cadenas se recomienda bucle
//for of

//ejemplo: 
let cadena = "hola"
for (const caracter of cadena){
  console.log(caracter)
}

//en JS las cadenas siempre son representadas con el mismo tipo string
//asi tengan uno o mas caracteres

//los substring son cadenas que vienen de otras cadenas

//para trabajar con subcadenas se emplea el metodo subString(posicioninicial,posicionfinal)
console.log(cadena.substring(0,3))
//el argumento que indica donde debe terminar la cadena no es incluyente

//si el argumento de incio es mayor al argumento final, la cadena se intercambia
//los valores negativos son reemplazados por el 0
console.log(cadena.slice(6,4))//esta forma el metodo slice no la ejecuta
//el metodo slice con valores negativos cuenta de atras hacia adelante


//metodo substr para trabajar con cadenas
//https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring

//BUSQUEDA DE ELEMENTOS EN UNA CADENA
//SABER SI EXISTE UNA CADENA DENTRO DE 

//indexOf() permite saber si existe una cadena dentro de otra y retorna la posicion o indice donde fue encontrada, si la cadena no fue encontrada retorna -1
//utiliza un algoritmo de comparacion de igualdades estricta
//retorna la primera instancia encontrada o cadena encontrada
//validar si una cadena existe
let cadena = 'hola mundo'
if((cadena.indexOf('hola') > 0 ){
   console.log('encontrado')
}else{
  console.log('no encontrado')
}

//metodo includes retorna True o False si la cadena existe en la cadena donde se esta buscando
//utiliza un algoritmo de nombres sin value 0 que soluciona el caso de buscar un falso como NaN.
//es mas estable y legible

let cadena = 'hola mundo'
if((cadena.includes('hola')){
   console.log('encontrado')
}else{
  console.log('no encontrado')
}

//en algunas casos una cadena buscada aparecera multiples veces en la cadena de busqueda
//en caso de querer obtener la ultima instancia en la cadena de busqueda se utliza el metodo lasIndexOf()
//tener cuidado con ese metodo porque la ejecucion es mas lenta
//recorre toda la cadena para estar seguro que no hay otra instancia al final de la misma

console.log(cadena.lastIndexOf('hola')
            
//para saber si existe una cadena al inicio de otra se utiliza startwidth
//para saber si existe una cadena al final de otra se utiliza endwidth
            
//ejemplo:
            
let link = "https://github.com/jkaalexkei
let imagen = 'imagen.jpg'
            
 if (link.startwidth('https')){console.log('el link es seguro')}else{console.log('no es seguro')}
if (link.endwidth('jpg')){console.log('es una imagen')}else{console.log('no es seguro')}



 //CADENAS Y ARREGLOS

//SOLO GUARDAN ELEMENTOS DE TEXTOS
//TRATAR CADENAS COMO ARREGLOS

//METODO split("separador") convierte una cadena en un arreglo y utiliza un delimitador para separar

let cadena = 'hola mundo'
console.log(cadena.split()) //['hola','mundo']
let nuevacadena = cadena.split(" ")
console.log(nuevacadena.length)//devuelve el numero de elementos del arreglo

//metodo join() inverso para unir arreglos en una sola cadea
console.log(nuevacadena.join(" ")
            
//filtro de palabras
let texto = "estoy aprendiendo js con el curso de codigofacilito"
            
console.log(filtradodemarca(texto));

function filtradodemarca(str){
  let marca = ['codigofacilito']
  let palabrasfiltradas = str.split(' ').map(
      palabra => {
          return marca.includes(palabra) ? 'XXXX' : palabra
      }
  );
  //console.log(palabrasfiltradas); esto imprime la cadena separada
  return palabrasfiltradas.join(' ')
}

//con los metodos del arreglo se dar mas utilidad al manejo de cadenas

//trim() limpia los espacios en blanco de la cadena
//cadena.trimstart()
//cadena.trimend()
//cadena.length()
//cadena.repeat()
//cadena.replace('cadenaoriginal','cadenaconlaquesevaareemplazar')
//




           







  
  











