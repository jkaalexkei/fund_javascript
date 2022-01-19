/*
MANEJO DE MODULOS

SON ARCHIVOS QUE PERMITEN COMPARTIR PARTES DEL CODIGO CON OTROS MODULOS

SE PUEDEN COMPARTIR VARIABLES, FUNCIONES, CLASES, ENTRE OTROS. TODO ESTO ENTRE ARCHIVOS DE JS

SON UN ESTRATEGIA PARA DIVIDIR CODIGO

REEMPLAZABLE, REMOVIBLE Y FACIL DE ADAPTAR E INTEGRAR CON EL PROYECTO

EXPORTAR E IMPORTAR 

MANERA EXPLICITA DE MANEJAR ARCHIVOS

SE PUEDE VER QUE ´PARTE DEL CODIGO SE AFECTA EN EL CASO DE ALGUNA MODIFICACION


MEJORA LA RELACION ENTRE ARCHIVOS

SON UN ESTANDAR EN JS

 extension mjs para modulos 

AUNQUE LOS MODULOS NO ESTAN LIGADOS AL FRONTEND TAMBIEN SE PUEDEN USAR EN OTROS LADOS

NO TODAS LAS PLATAFORMAS SOPORTAN EL MANEJO DE MODULOS

MANEJADOR WEBPACK ---> INDAGAR SOBRE ESTO!!

LA MANERA EN QUE INTERPRETA UN MODULO EL NAVEGADOR ES DISTINTA A COMO LO HACE CON ARCHIVO DE JS TRADICIONAL

SE PUEDE USAR UNA DEPENDENCIA PARA UN SERVIDOR DE ARCHIVOS ESTATICOS CON NODE.JS

EN LA TERMINAL EJECUTAR

npm install -g node-static
--> seguido ruta del directorio donde se encuentra el archivo
--> ejecutar el comando static en la carpeta donde esta el proyecto (usar la terminal)
--> luego se inicia el servidor local

AL EXPORTAR LOS VALORES DE UN MODULO ESTAMOS ASIGNANDO UN IDENTIFICADOR QUE SE USARA AL MOMENTO DE IMPORTAR A CADA UNO DE ESTOS VALORES DEL MODULO

SE PUEDE ASIGNAR UN VALOR POR DEFECTO AL MODULO
UN MIMSO MODULO PUEDE EXPORTAR MULTIPLES VALORES POR NOMBRE

SOLO PUEDE EXPORTAR UNO POR DEFAULT

UN MODULO PUEDE TENER MUCHOS EXPORTS CON NOMBRE PERO SOLO UN VALOR POR DEFAULT


*/

//dentro de las llaves se pueden colocar mas de un elemento del modulo que se va a importar
//contiene el especificador de modulo que conlleva una url donde esta ubicado el modulo o elemento a importar
//para que el modulo funcione necesita un punto de entrada donde se leeran los modulos

/*archivo 1 */import { nombre } from 'modulodos.mjs'


/*archivo 2*/ export const nombre = 'alex';

//la variable nombre se convierte en el identicador del valor de la variable nombre


//sintaxis para exportar un modulo por default es:

//  export default { expresion (variable,funcion,clase,otro)) }

/*archivo 2*/ let valorpordefecto = 20;
/*archivo 2*/ export default valorpordefecto;


//sintaxis para importar un modulo por default es:

/*archivo 1 */ import def from 'modulodos.mjs'
//TAMBIEN SE PUEDE IMPORTAR DE LA SIGUIENTE MANERA
// import valorpordefecto,variables_funciones_clases from 'modulodos.mjs'

/*archivo 1 */ import def,{nombre,edad,} from 'modulodos.mjs'


//def hace referencia al valor que se esta importando y puede ser cualquier nombre
//el identificador para el valor exportado por defecto se asigna al importarlo
//una modificacion en el orden hace la expresion invalida

/*archivo 1 */ console.log(def)

/* CARACTERISTICA READONLY 

es una caracteristica de los elementos que no pueden modificar su valor

solo podemos leer su información pero no cambiarla

cuando se importa un valor de un modulo externo, se recibe un valor readonly de dicho valor

no se pueden modificar los valores que se estan importando

una variable exportada puede cambiar su valor dentro del modulo pero no fuera

se recomienda usar const para declarar variables que vayan a ser exportadas



*/
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Document</title>
</head>
<body>
    indica al navegador que es un archivo de tipo modulo
    <script src="modulobase.js" type="module"></script>
    
</body>
</html>

*/
