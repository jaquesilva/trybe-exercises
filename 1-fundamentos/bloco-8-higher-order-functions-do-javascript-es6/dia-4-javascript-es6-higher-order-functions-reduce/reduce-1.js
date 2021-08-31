const assert = require('assert');

const numbers = [2, 3, 4, 6, 8, 12, 24];

// Somando os números do array com for
let sumWithFor = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
  sumWithFor = sumWithFor + numbers[index];
}

// como funciona o contador do for
// sumWithFor = sumWithFor + numbers[index]; // não entendi como funciona o contador
//     1      =     1      +      2 
//     3      =     3      +      2
//     5      =     5      +      4
//     9      =     9      +      6
//     15     =     15     +      8
//     23     =     23     +      12
//     35     =     35     +      24


console.log(`Valor com for: ${sumWithFor}`); // Valor com for: 59

// Somando os números do array com reduce
const sumWithReduce = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(`Valor com reduce: ${sumWithReduce}`);

// Testes
// const expectedValue = 59;
// assert.strictEqual(sumWithFor, expectedValue);
// assert.strictEqual(sumWithReduce, expectedValue);

// Somando os números pares
const sumEvenNumbers = numbers.reduce((previousValue, currentValue) => {
  if (currentValue % 2 === 0) {
return previousValue + currentValue;
  }
  return previousValue;
}, 0);

console.log(sumEvenNumbers);

// Somando os números pares utilizando o filter() e o reduce()
// const sumEvenWithFilter = numbers
//   .filter((number) => number % 2 === 0) // número 0 para calcular os números pares
//   .reduce((accumulator, currentValue) => accumulator + currentValue);

// console.log(sumEvenWithFilter);

//Somando os números ímpares utulizando o filter() e o reduce()
const sumEvenWithFilter = numbers
  .filter((number) => number % 2 === 1) // número 1 para calcular os números ímpares
  .reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sumEvenWithFilter);

