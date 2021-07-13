// Fazendo uma requisição consumindo uma API

// endpoint: onde iremos consultar

// JSON - JavaScript Object Notation

// Como faz uma requisição? Como pega algo?

// fazARequisicaoPraMim, passamos a URL e, quando essa requisição retornar, aí vem uma callback com a resposta (response), funciona de forma assíncrona
// const fetchPokemon = () => {
//   fazARequisicaoPraMim(url, (response) => { 
//     colocaAImagemNaTela(response.imagem);
//   });
// }

const fetchPokemon = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then((response) => {
      console.log(response)
  });
}

window.onload = () => {
  fetchPokemon();
}