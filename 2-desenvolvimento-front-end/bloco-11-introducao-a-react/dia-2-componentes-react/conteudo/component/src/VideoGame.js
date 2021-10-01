// VideoGame -> Componente filho do App.js

import React from 'react'

class VideoGame extends React.Component {
  render() {
    const { title, developer, sales } = this.props.game // o que significa o {} logo depois da const? Desestruturação. Retirar dentro da this.props, que é um objeto, algumas informações, e o que queremos tirar de informações desse objeto? title, developer, sales. 
    return (
      <div>
        Game: {title} -
        Developer: {developer} -
        Sales: {sales}
      </div>
    )
  }
}

export default VideoGame; // esse nome VideoGame poderia ser um outro qualquer? A resposta é não! Deve ser obrigatoriamente o nome da class

// Quando usamos as props (propriedades)?
// Quando queremos passar alguma informação que está em um componente para outro

// props -> são importantes quando queremos passar dados, informações, do componente pai 'App.js', para o componente filho 'VideoGame.js'

// this.props = objeto -> já é embutida dentro de um componente de classe, através do React.Component por isso não precisa ser importado, exportado e nem declarado.

// Pq this.props? This pq eu quero acessar nesse contexto, nessa classe, um objeto chamado props

// Se o arquivo 'data.js' está sendo importado pelo componente 'App.js', pq estamos fazendo isso no arquivo 'VideoGame'? Pq as informações serão enviadas para o 'VideoGame' através do arquivo 'App.js'

// O que será enviado como props? os dados que vem de 'Games'