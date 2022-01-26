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


//COMPARACION DE CADENAS

/*
se pueden usar operadores de comparacion > < >= <= ==

api de internacionalizacion localeCompare retorn 1,-1,0 
si la cadena es igual retorna 0
si la cadena base aparece antes de la cadena de comparacion


*/








  
  











