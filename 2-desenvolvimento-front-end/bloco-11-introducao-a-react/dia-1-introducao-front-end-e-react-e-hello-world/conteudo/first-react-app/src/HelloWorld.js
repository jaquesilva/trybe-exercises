// A principal diferença entre o uso de componentes por classe e o uso de componentes por função reside no fato daqueles gerados por classe terem acesso a métodos e ao estado próprios de qualquer componente React gerado via classe, como o método render() , que te permite renderizar todo o conteúdo criado na tela, os quais são acessíveis somente por componentes criados por classe na maior parte das versões do React

// Criando um novo componente
// SINTAXE:

// import React from 'react';

// class HelloWorld extends React.Component {
//   render() {
//     return (
//       <h1>Hello, world!</h1>
//     )
//   }
// }

// export default HelloWorld;

// ou

import React, { Component } from 'react';

class HelloWorld extends Component {
  render() {
    return (
      <h1>Hello, world!</h1>
    )
  }
}

export default HelloWorld; // Precisamos exportar esse componente para conseguir utilizá-lo em outro lugar

// Componente filho de App.js