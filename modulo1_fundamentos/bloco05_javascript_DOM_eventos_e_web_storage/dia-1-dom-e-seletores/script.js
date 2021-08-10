
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

function exercicio03(cor){  
  square = document.querySelector(".main-content .center-content");
  square.style.backgroundColor = cor;
  console.log("Exercício 03: "+cor);
}

exercicio03("white");

// Crie uma função que corrija o texto da tag <h1>.

function exercicio04(texto){  
  titulo = document.querySelector("h1");
  titulo.innerText = texto;
  console.log("Exercício 04: "+texto);
}

exercicio04("Exercício 5.1 - JavaScript");

// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function exercicio05(){  
  document.querySelector("p").innerHTML = document.querySelector("p").innerHTML.toUpperCase();
  console.log("Exercício 05: Maiúsculo: "+ document.querySelector("p").innerText);
}

exercicio05();
// Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function exercicio06(){  
  const text = document.querySelectorAll("p")
  console.log("Exercício 06: ")
  for (i=0; i<text.length; i += 1){
    console.log(text[i].innerText)
  }
}
exercicio06();
