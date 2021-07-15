// Exercício 1

const uppercase = require('./uppercase');

describe('Letra Maiuscula', () => {
  it('transforma as letras de uma palavra em letras maiúsculas', (done) => {
    uppercase('queijo', (callback) => {
      expect(callback).toBe('QUEIJO');
      done();
    });
  });
}); 