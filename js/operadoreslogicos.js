/*

operadores logicos

&& operador AND retorna el primer valora false. Cuando no encuentra un valor false retorna el ultimo valor verdadero que encuentre
|| operador OR retorna un valor verdadero si al menos uno es verdadero y retorna false si ninguno es verdadero. en caso que ambas condiciones sean falsas retorna el ultimo false que encuentre
! operador de negacion o NOT
?? operador nullish coalescing // fusion de nulos o union nulosa

sintaxis del operador ??
condicion nula a evaluar ?? valor que retorna (fue diseñado para valores nulos)

20 && 10

"hola" && ""



*/

/*operador and &&*/
console.log( true && true) retorna true
console.log( false && true) retorna false

para que retorne verdadero ambas condiciones deben ser ciertas. Si alguna es false el resultado retornado será false

/*operador || OR*/
console.log( true || true) retorna true
console.log( false || true) retorna true
