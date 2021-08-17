// App.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import App from './App';

it('alterando o valor dos campos e testando o valor guardado', () => {
  const { getByTestId } = render(<App />);
  const inputNome = getByTestId('input-nome');
  expect(inputNome).toHaveValue('');
  fireEvent.change(inputNome, { target: { value: 'Estudante da Trybe' } });
  expect(inputNome).toHaveValue('Estudante da Trybe');

  const inputEmail = getByTestId('input-email');
  expect(inputEmail).toHaveValue('');
  fireEvent.change(inputEmail, { target: { value: 'estudante@trybe.com' } });
  expect(inputEmail).toHaveValue('estudante@trybe.com');
});

// No código, vemos como utilizar o fireEvent . Para isso, temos que passar para ele o que queremos escrever dentro do input durante o teste. A sintaxe parece estranha, mas é simplesmente porque nós temos um item (que estamos selecionando com o data-testid ) e a propriedade dele que guarda o valor digitado no input fica dentro da propriedade target. Dá para fazer um paralelo bem interessante aqui com o eventListener que aprendemos no começo de JavaScript , onde utilizávamos o valor de event.target.value . Por conta disso que a sintaxe é de objeto dentro de objeto.

// Uma coisa que pode ajudar a entender o que está acontecendo é O console.log na função handleInput do arquivo App.js exibindo a variável value . Fazendo isso, o console.log aparece no teste, o que lhe dará a certeza de que a RTL está realmente renderizando sua página e inserindo nos campos os valores, da mesma forma que o usuário faria.
