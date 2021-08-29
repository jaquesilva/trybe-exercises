// =================== REDUCER ====================

// const reducer = (state) => { // 2º Passo - criando o reducer
//   return state;
//   };
  
  // Inicialmente o state vem como undefined , e não queremos isto. Então iremos atribuir a ele um valor padrão.

  // const reducer = (state = { login: false, email: "" }) => {
  //   return state;
  //   };

  // Agora sim, nosso reducer está pronto! Mas o que acontece se nosso valor inicial (que podemos chamar de estado inicial) ficar muito grande? Nosso código vai ficar "bagunçado" né?! Então podemos reescrevê-lo.

  // const ESTADO_INICIAL = {
  //   login: false,
  //   email: "",
  //   };
    
  //   const reducer = (state = ESTADO_INICIAL) => {
  //   return state;
  //   };

// Mas e se precisarmos alterar o dado que está no estado? A peça que tem esta função é a action ! Uma action é um objeto JavaScript que tem pelo menos uma propriedade type e é responsável por comunicar ao reducer uma mudança a ser feita na store . Em Redux nós utilizamos o actionCreator , que nada mais do que uma função que retorna uma action . Para o nosso exemplo, iremos usar uma actionCreator chamada fazerLogin . Esta função irá enviar uma action ao nosso reducer , com a intenção de alterar para verdadeiro a chave login da nossa store .

const fazerLogin = (email) => ({ // 4º Passo - criando uma actionCreator
  type: "LOGIN",
  email});

const ESTADO_INICIAL = {
  login: false,
  email: "",
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin("alguem@email.com")); // 5º Passo - Conseguimos mudar o estado da store utilizando o dispatch . Ele despacha nossa action para dentro do reducer , para que nosso estado seja alterado. Note, também, que o reducer retorna todo o estado , e não somente o que será modificado. Retornamos, então, um objeto que contém todos os dados atuais do estado { ...state } mais as chaves que serão modificadas pela action! Mas e se tivermos mais de um reducer ?

console.log(store.getState());

// { login: true, email: 'alguem@email.com' }

// ================= STORE ===========================
  // const store = Redux.createStore(reducer);

  // console.log(store.getState()); // 3º Passo - verificando o output quando acessamos a store com a função getState() .

// const store = Redux.createStore(); // 1º Passo - criando e retornando a store

// Uma store só funciona se passarmos uma função que será responsável por alterar os dados dela: o reducer (na linha 48 já temos a store com a função reducer passada como parâmetro, o reducer foi criado a partir da linha 3) . O reducer recebe como primeiro parâmetro um state, sendo que seu retorno substituirá o state da store. (Ir pra linha 3)
