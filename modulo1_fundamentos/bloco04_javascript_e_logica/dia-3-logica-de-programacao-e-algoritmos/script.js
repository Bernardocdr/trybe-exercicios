//Exercício 1

/*
let n = 5;
let asterisco = '*';
let resultado = '';

if (n < 1) {
  console.log('Número menor que 1!')
} else{
  for (let c = 0; c < n; c+=1){
    resultado = resultado + asterisco;
  }
  for (let c = 0; c < n; c+=1){
   console.log(resultado)
  }
}
*/


//Exercício 2

/*
let n = 5;
let asterisco = '*';
let resultado = '';

if (n < 1) {
  console.log('Número menor que 1!')
} else{
  for (let c = 0; c < n; c+=1){
    resultado = resultado + asterisco;
    console.log(resultado)
  }
}
*/


//Exercício 3

/*
let n = 5;
let asterisco = '*';
let resultado = '';
let espacos = n;

if (n < 1) {
  console.log('Número menor que 1!')
} else{

  for (let i = 0; i<n; i+=1){ 
    for (let c = 0; c <= n; c+=1){
      if (c<espacos){
        resultado = resultado + ' ';
      }else{
        resultado = resultado + asterisco;
      }
    }
  console.log(resultado);
  resultado = '';
  espacos -= 1;
  }
}
*/
