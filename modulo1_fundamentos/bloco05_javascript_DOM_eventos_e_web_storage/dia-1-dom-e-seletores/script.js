
//Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

function exercicio01(texto){  
  tag = document.querySelector("p");
  tag.innerText = texto;
  console.log("Exercício 01: "+ tag.innerText);
}

exercicio01("Me vejo bem");

// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function exercicio02(cor){  
  square = document.querySelector(".main-content");
  square.style.backgroundColor = cor;
  console.log("Exercício 02: "+cor);
}

exercicio02("rgb(76,164,109)");

// Crie uma função que mude a cor do quadrado vermelho para branco.



// Crie uma função que corrija o texto da tag <h1>.


// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
/*
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
*/
// Crie uma função que exiba o conteúdo de todas as tags <p> no console.
/*
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
*/