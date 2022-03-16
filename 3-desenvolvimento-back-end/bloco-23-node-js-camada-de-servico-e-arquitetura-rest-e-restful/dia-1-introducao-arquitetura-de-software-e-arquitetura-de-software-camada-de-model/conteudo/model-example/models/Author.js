const connection = require('./connection');

 // Cria uma string com o nome completo do autor:
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

// Outra maneira de fazer a função "getNewAuthor":

// const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
//   // Essa const fullName vai juntar os 3 valores (firstName, middleName e o lastName), no caso colocamos .filter pq tem alguns casos que o autor não tem middleName. O método join transforma o array em string separado por espaço
//   const fullName = [firstName, middleName, lastName].filter((name) => name).join(" ");
  
//   return {
//     id,
//     firstName,
//     middleName,
//     lastName,
//     fullName,
//   };
// };


// ===========================================

// Converte o nome dos campos de snake_case para camelCase:
const serialize = (authorData) => { // de onde vem o "authorData" ?
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  }
};

// ========================================

// Função que retornará todas as pessoas autoras cadastradas no banco de dados
// Busca todas as pessoas autoras do banco.
const getAll = async () => {
const [authors] = await connection.execute( // método execute -> retorna uma Promise que quando resolvida, nos fornece um array com 2 campos: [rows, fields] . O primeiro index é onde está a resposta que desejamos (no caso o Authors) e no segundo vêm algumas informações extras sobre a query que não iremos utilizar.
  'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
);
return authors.map(serialize).map(getNewAuthor);
};

// Outra forma de fazer:

// const getAll = async () => {
//   const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
//   const [authors] = await connection.execute(query)
  
//   return authors.map(serialize).map(getNewAuthor);
// };

// =======================================

 // Busca uma pessoa autora específica, a partir do seu ID
// @param {String} id ID da pessoa autora a ser recuperado
const getById = async (id) => {
  // Repare que substituímos o id por `?` na query.
  // Depois, ao executá-la, informamos um array com o id para o método `execute`.
  // O `mysql2` vai realizar, de forma segura, a substituição do `?` pelo id informado.
  const query = 'SELECT first_name, middle_name, last_name FROM model_example.authors WHERE id = ?'
  const [ authorData ] = await connection.execute(query, [id]);

  if (authorData.length === 0) return null;

  // Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID.
  const { firstName, middleName, lastName } = authorData.map(serialize)[0];

  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName,
  })
};

// // ========================================

// Função que retorna um boolean indicando se os dados são válidos, checando se firstName e lastName são strings não vazias, e se middleName , caso seja informado, é uma string
const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

// =========================================

// Função que recebe firstName, middleName e lastName e salva uma pessoa autora no banco
const create = async (firstName, middleName, lastName) => connection.execute(
  'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
  [firstName, middleName, lastName],
);


module.exports = {
  getAll,
  getById,
  isValid,
  create,
};