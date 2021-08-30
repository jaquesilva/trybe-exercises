// A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9 - OK
// Teste se o retorno de sum(0, 0) é 0 - OK
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
};

// assert.strictEqual(sum(4, 6), 9, "A soma de 4 + 5 = 9"); // teste com erro
// assert.strictEqual(sum(4, 5), 9, "A soma de 4 + 5 = 9"); // teste que passou
// =============================================================================
// assert.strictEqual(sum(0, 1), 0, "A soma de 0 + 0 = 0"); // teste com erro
// assert.strictEqual(sum(0, 10, 0, "A soma de 0 + 0 = 0"); // teste que passou
// =============================================================================
// assert.throws(() => { // teste com erro
//   sum(4, 5);
// })

// assert.throws(() => { //teste que passou
//   sum(4, "5");
// })
// ==============================================================================
assert.throws(() => { //teste que passou
  sum("4", "5"), "parameters must be numbers";
})





