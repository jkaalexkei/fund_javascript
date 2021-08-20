let variable = 10

listado = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

for(i=1;i<=listado.length;i++)
{
  
  if ((i % 3) === 0 && (i % 5) === 0)
  {
      console.log(i+' fizzbuzz')
  }
  
  if (i % 3 === 0)
    {
      console.log(i+' fizz')
    }
 
  if (i % 5 === 0)
  {
    console.log(i+ ' buzz')
  }
  
}

//SALIDA
/*
"3 fizz"
"5 buzz"
"6 fizz"
"9 fizz"
"10 buzz"
"12 fizz"
"15 fizzbuzz"
"15 fizz"
"15 buzz"

*/

// console.log(variable)

// if (variable==''){
//   variable = 'cadena'
//   console.log(variable)
// }else if(variable == 'cadena'){
//   variable = 20
//   console.log(variable)
// }else if (variable <=20){
//   variable = 'variable es menor a 20'
//   console.log(variable)
// }else{
//   variable = ''
//   console.log(variable)
// }

