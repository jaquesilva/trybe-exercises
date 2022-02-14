const connection = require('./connection');

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

// Busca todas as pessoas autoras do banco
const getAll = async () => {
  const [authors] = await connection.execute( //Utilizamos o método execute para fazer uma query mysql como já estamos acostumados. Esse método retorna uma Promise que quando resolvida, nos fornece um array com 2 campos: [rows, fields] . O primeiro index é onde está a resposta que desejamos (no caso o Authors) e no segundo vêm algumas informações extras sobre a query que não iremos utilizar.
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );
  return authors.map(serialize).map(getNewAuthor);
};

module.exports = {
  getAll,
}
