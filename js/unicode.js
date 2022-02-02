
/*
permite representar una cadena como punto de codigo, que son traducidos por la computadora a unidades de codigo en BITS

los caracteres se convierten a bits 

manera uniforme y estandarizada 
version 13.0
cada caracteres de texto se representa en un rango de U+0000 a U+10FFFF


*/

//https://stackoverflow.com/a/48010068
function toCodePoint(char){
  
  var hex = char.charCodeAt(0).toString(16);//convierte el caracter a hexadecimal
  
  return "\\u" + "0000".toString(0,4-hex.length) + hex; //agrega los 0's faltantes al inicio
  
}
