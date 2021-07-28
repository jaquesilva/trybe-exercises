// App.js -> componente filho do index.js
// componente principal da aplicação

import React from 'react';
import ListaGames from './data' // já temos dentro da "variável" Games todas as informações contidas no arquivo data.js
import VideoGameList from './VideoGameList';

class App extends React.Component {
  render() {
    return ( // O que está dentro do return que será enviado para o index.js renderizar 
        <VideoGameList games={ListaGames}/> // Componente filho do App / 'games' é o nome da props, poderia ser qualquer outro nome
    );
  }
}

export default App;

// Como passar informações do componente pai 'App.js', para o componente filho 'VideoGame.js'?

// 1º Passo - Importar o arquivo 'data.js' para o componente 'App.js'. Ele será fonte de informação para montar o componente
// OBS: O nome que colocamos ao exportar um arquivo pode ser o que quisermos, o importante é o caminho que está o arquivo.

// 2º Passo - Como passar os arquivos que foram importados de 'data.js' para o componente 'VideoGame'?
// Utilizando as props
// 
// Uma props é declarada no corpo do componente