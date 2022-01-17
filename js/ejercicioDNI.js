var numeroDNI = prompt('ingrese el nro DNI')

var letraDNI = prompt('ingrese la Letra del DNI')

var numeroD = []

for(var i = 0;i<numeroDNI.length;i++){
       
    numeroD[i] = numeroDNI[i]
    
}

var Nd = numeroD.length

if (Nd !== 8){
  console.log('numero invalido')
}else{
  var calculoDNI = numeroDNI % 23
  console.log(parseInt(numeroDNI))//IMPRIME EL NUMERO DNI
  console.log(calculoDNI)//IMPRIME LA LETRA DNI
}

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

for(j=0;j<letras.length;j++){
  var elemento = letras.find(function(elemento,posicion,arreglo){
    return posicion === calculoDNI
  })
}
console.log(elemento)
var letraDNIgenerada = elemento

if (letraDNI === letraDNIgenerada){
  console.log('su numero de DNI es: ',letraDNIgenerada+parseInt(numeroDNI))
}else{
  console.log('La letra DNI no coincide')
}


