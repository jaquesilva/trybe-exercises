// 1 - Dada uma matriz, transforme em um array.

const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr), []); 
}

// const flatten = arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);

console.log(flatten(['1', '2', '3'], [true], [4, 5, 6],));

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);