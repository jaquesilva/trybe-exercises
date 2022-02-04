// models/Author.js

const connection = require('./connection');

// Utilizaremos essas duas funções "serialize" e "getNewAuthor" nessa aplicação em todos os momentos que precisarmos gerar um objeto com propriedades em "camelCase" a partir de um objeto em "snake_case" , e para gerar uma string contendo o fullName da pessoa autora.

 // Cria uma string com o nome completo do autor
 const getNewAuthor = ({id, firstName, middleName, lastName}) => {
  // Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
  // nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
  const fullName = [firstName, middleName, lastName]
    .filter(Boolean)
    .join(' ');

  return {
  id,
  firstName,
  middleName,
  lastName,
  fullName,
 };
};

 // Converte o nome dos campos de snake_case para camelCase
 const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

// Busca todas as pessoas autoras do banco.
const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );
  return authors.map(serialize).map(getNewAuthor);
};

module.exports = {
  getAll,
};