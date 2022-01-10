// console.log('Hello, world!');

// Pacote importado: readline-sync
// Disponível em: https://www.npmjs.com/package/readline-sync

const readline = require('readline-sync');

const name = readline.question('Qual seu nome?');
const age = readline.questionInt('Qual sua idade?');

console.log(`Hello, ${name}! You are ${age} years old!`);