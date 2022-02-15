const connection = require('./connection');

//  // Cria uma string com o nome completo do autor
//  const getNewAuthor = ({id, firstName, middleName, lastName}) => {
//   // Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
//   // nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
//   const fullName = [firstName, middleName, lastName]
//     .filter(Boolean)
//     .join(' ');

//   return {
//   id,
//   firstName,
//   middleName,
//   lastName,
//   fullName,
//  };
// };

// Outra maneira de fazer a função "getNewAuthor":
const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  // Essa const fullName vai juntar os 3 valores (firstName, middleName e o lastName), no caso colocamos .filter pq tem alguns casos que o autor não tem middleName. O método join transforma o array em string separado por espaço
  const fullName = [firstName, middleName, lastName].filter((name) => name).join(" ");
  
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};


// ===========================================

// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => { // de onde vem o "authorData" ?
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  }
};

// ========================================

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