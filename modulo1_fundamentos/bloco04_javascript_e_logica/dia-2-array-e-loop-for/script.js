let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaTotal = 0;

console.log(numbers);

for(let index = 0; index < numbers.length; index += 1){
  somaTotal += numbers[index];  
}

console.log("A soma total dos números é "+ somaTotal);

console.log("A média aritmética é "+ somaTotal/numbers.length );