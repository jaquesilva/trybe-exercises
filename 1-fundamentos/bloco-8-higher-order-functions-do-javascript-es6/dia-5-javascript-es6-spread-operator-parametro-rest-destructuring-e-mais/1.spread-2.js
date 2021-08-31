const assert = require('assert');

// PROBLEMA: JUNTE 2 ARRAYS EM APENAS 1

const horrorBooks = ['It', 'The Shinig'];
const scifiBooks = ['I, RObot', 'Caves of Steel', 'The End of Eternity'];

// UTILIZANDO O FOR
let awesomeBooks = [];

for (let i = 0; i < horrorBooks.length; i++) {
  awesomeBooks.push(horrorBooks[i]);
}

for (let i = 0; i < scifiBooks.length; i++) {
  awesomeBooks.push(scifiBooks[i]);
}

console.log(awesomeBooks);

// ================================================

// UTILIZANDO SPREAD OPERATOR
const books = [...horrorBooks, ...scifiBooks]; //SPREAD sendo usado ao declarar uma const

console.log(books);

//TESTES
const expectedValue = ['It', 'The Shinig', 'I, RObot', 'Caves of Steel', 'The End of Eternity']
assert.deepStrictEqual(books, expectedValue);

//