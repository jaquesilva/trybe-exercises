import React, { Component } from 'react'

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
    return (
      <div>
        { conteudos.map((conteudo) => (
          <div key={conteudo.conteudo}>
            <h4>{ `O conteúdo é: ${conteudo.conteudo}` }</h4>
            <p>{ `status: ${conteudo.status}` }</p>
            <p>{ `bloco: ${conteudo.bloco}`}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Content;