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