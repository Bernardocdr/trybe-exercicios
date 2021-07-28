
//Exercício 1

  /*
    let a = 2;
    let b = 4;

    console.log('Soma: '+(a+b));
    console.log('Subtração: '+(a-b));
    console.log('Multiplicação: '+ (a*b));
    console.log('Divisão: '+(a/b));
    console.log('Módulo: '+(a%b));
  */


//Exercício 2
//ERRO: se os dois números apresentarem o mesmo valor, mostra a mensagem "'b' é maior que 'a'"

  /*
    let a = 10;
    let b = 11;

    if (a > b) {
      console.log("'a' é maior que 'b'");
    } 

    else if (a < b) {
      console.log("'b' é maior que 'a'");};
    
    else {
      console.log("números iguais");};
  */


//Exercício 3

  /*
    let a = 7;
    let b = 5;
    let c = 8;

    console.log('O maior número é: ')

    if (a > b && a > c) {
      console.log(a);
    } else if (b > a && b > c) {
      console.log(b);
    } else {
      console.log(c);
    };
  */

//Exercício 4
//Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. 

  /*
    let number = 1;

    if (number > 0) {
      console.log('positive');
    } else if (number < 0) {
      console.log('negative');
    } else {
      console.log('zero');
    };
  */

//Exercício 5

  /*
    let anguloA = -65;
    let anguloB = 100;
    let anguloC = 15;
    let somaAngulos = anguloA + anguloB + anguloC;

    if(anguloA > 0 && anguloB > 0 && anguloC > 0){
      if (somaAngulos === 180) {
        console.log(true);
      } else {
        console.log(false);
      };
    } else {
      console.log('Erro: ângulo inválido');
    }
  */


//Exercício 6
//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .

//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//Exemplo: bishop (bispo) -> diagonals (diagonais)




//Exercício 7

//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

//Porcentagem >= 90 -> A
//Porcentagem >= 80 -> B
//Porcentagem >= 70 -> C
//Porcentagem >= 60 -> D
//Porcentagem >= 50 -> E
//Porcentagem < 50 -> F
//O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. 



//Exercício 8

let a = 2;
let b = 1;
let c = 5;

let isEven = false;
if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  isEven = true;
};

console.log(isEven);



//Exercício 9

let a = 2;
let b = 2;
let c = 4;

let isOdd = false;
if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
  isOdd = true;
};

console.log(isOdd);




//Exercício 10




//Exercício 11
