window.onload = funcion () {
  // Linha 5 do arquivo index.html disponibiliza o Redux.

  // ========================= REDUCER ===============================
  // 2º criar o reducer
  // reducers/index.js

  // função padrão
  // function themeReducer(state, action) {
  // }

  const CHANGE_TO_DARK = 'CHANGE_TO_DARK'
  const CHANGE_TO_LIGHT = 'CHANGE_TO_LIGHT';
  const CHANGE_THEME = 'CHANGE_THEME';

                              // theme é o estado global, é um objeto, que contém a propriedade theme, e tem uma string que fala se é 'light' ou 'dark'
  function themeReducer(state = { theme: 'light' }, action) {
    // switch padrão
    // switch(action.type) {
    //   case '';
    //     // retornar o novo formato do meu estado globa
    //   default:
    //     return state;
    // }
    switch(action.type) { 
      case CHANGE_TO_DARK: // CHANGE_TO_DARK é a action
        return { ...state, theme: 'dark' } // o (… state) preserva todas as chaves que já tem no objeto, e vai alterar somente a que está no case, no caso a chave ‘theme’
      case CHANGE_TO_LIGHT: // CHANGE_TO_LIGHT é a action
        return { ...state, theme: 'light' } 
      case CHANGE_THEME: // ao invés de termos 2 actions, podemos ter apenas 1
        return { ...state, theme: action.payload.theme }
      default:
        return state;
    }
  }

  // ========================= STORE ===============================
  // 1º criar o store
  // store/index.js

  const store = Redux.createStore(themeReducer) // a partir de agora Redux, você vai criar pra mim um estado global, e esse estado global, vai ser gerenciado pelo ‘themeReducer’. E todas as alterações que você for fazer no estado global, devem passar pelo ‘themeReducer’

  // ========================= BOTÃO DO INTERRUPTOR ===========================
  // 3º criar botão do interruptor e colocar um evento de clique, pra quando clicar nesse botão, ele vai disparar uma ACTION

  // recuperando o botão pelo id, que ao ser clicado, muda o tema e adicionando um evento de click nele
  document;querySelector('#light-switch').addEventListener('click', () => {
   const { theme } = store.getState();
    if (theme === 'light') {
      store.dispatch({ type: CHANGE_THEME, payload: {theme: 'dark' } }); // dispara uma ação. É passado como parâmetro o objeto da action. Obs: o payload é um agrupamento de parâmetros.
    } eles {
      store.dispatch({ type: CHANGE_THEME, payload: { theme: 'light' } }); // dispara uma ação. É passado como parâmetro o objeto da action.
    }
  });

  store.subscribe(() => { // quando utilizamos o react-redux essa função não é utilizada, pois ela já é feita debaixo dos panos. Toda vez que o meu estado é alterado, a função subscribe(), o que for passado como parâmetro, será chamado. O ‘subscribe’ lê uma informação que foi passada no estado global. A alteração do estado que invoca a função subscribe()

    document.querySelector(‘#wrapper’).className = store.getState().theme; // pega o id="wrapper" (linha 9 - index.html) e muda a classe de acordo como o store
    document.querySelector(‘#light-bulb’).src = `img/${store.getState().theme}.png`; // pega a id="light-bulb" (linha 11- index.html) e muda o src, no caso, a imagem
  }) 


}