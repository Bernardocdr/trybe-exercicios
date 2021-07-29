let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaTotal = 0;
let numeroMaior= 0;
let numeroNovo = 0;

console.log(numbers);

for(let index = 0; index < numbers.length; index += 1){
  somaTotal += numbers[index];  
}


for(let indexMaior = 0; indexMaior < numbers.length; indexMaior += 1){
  numeroNovo = numbers[indexMaior];
  if (numeroNovo>numeroMaior){
    numeroMaior = numeroNovo;
    console.log(numeroMaior)
  }
}


mediaAritmetica = somaTotal/numbers.length;

console.log("A soma total dos números é "+ somaTotal);

console.log("A média aritmética é "+ mediaAritmetica);

if (mediaAritmetica > 20) {
  console.log("Valor maior que 20 ");
}
else
{
  console.log("Valor menor ou igual a 20");
}

console.log("O maior número da lista é "+ numeroMaior);