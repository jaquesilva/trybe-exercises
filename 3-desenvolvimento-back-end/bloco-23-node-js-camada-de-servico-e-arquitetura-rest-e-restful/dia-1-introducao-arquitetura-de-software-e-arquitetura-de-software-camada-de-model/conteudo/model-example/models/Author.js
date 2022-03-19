const connection = require('./connection');

// OBS: NÃO CONSEGUI ENTENDER ESSA FUNÇÃO

// Função que cria uma string 'fullName' com o nome completo do autor
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

// A função getNewAuthor recebe os dados brutos e transforma na informação que queremos, o nome completo da pessoa autora! Com isso não modificamos em nada nosso getAll , assim desacoplando a necessidade dela conhecer outras funções além da serialize

// OBS: MAS DENTRO DA FUNÇÃO getAll TAMBÉM TEM A FUNÇÃO getNewAuthor...COMO ASSIM É DESACOPLADO DA FUNÇÃO getAll A função getNewAuthor?

// ==================================

// OBS: NÃO CONSEGUI ENTENDER ESSA FUNÇÃO, DE ONDE VEM O PARÂMETRO 'authorData'?

// Função que converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

// ===================================

// Função que retorna todas as pessoas autoras cadastradas no banco de dados.
// const getAll = async () => {
//     const [authors] = await connection.execute( 
//         'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
//     );
//     return authors;
// };

// OR

// Função que retorna todas as pessoas autoras cadastradas no banco de dados.
const getAll = async () => {
  const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors;';
  const [authors] = await connection.execute(query); // COMO EU SEI QUE É [authors]?

  return authors.map(serialize).map(getNewAuthor); //NÃO ENTENDI ESSA LINHA
}

// Método .execute(): faz uma query mysql. Esse método retorna uma Promise que quando resolvida, nos fornece um array com 2 campos: [rows, fields] . O primeiro index é onde está a resposta que desejamos (no caso o Authors) e no segundo vêm algumas informações extras sobre a query que não iremos utilizar.

// ====================================

// Esse método é muito semelhante a getAll . A grande diferença é que usamos o where na nossa query para limitar o escopo da busca à pessoa autora procurada. No entanto, em vez de passar valores diretamente na string, fazendo interpolação, é uma boa prática separar os valores da query. Fazemos isso usando ? como parâmetros na string e usando, como segundo argumento, um array que contém os valores que devem substituir todos os ? utilizados, na ordem.

const getById = async (id) => {
  // Repare que substituímos o id por `?` na query.
  // Depois, ao executá-la, informamos um array com o id para o método `execute`.
  // O `mysql2` vai realizar, de forma segura, a substituição do `?` pelo id informado.
  const query = 'SELECT first_name, middle_name, last_name FROM model_example.authors WHERE id = ?'
  const [ authorData ] = await connection.execute(query, [id]);

  if (authorData.length === 0) return null;

  // Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID.
  const { firstName, middleName, lastName } = authorData.map(serialize)[0]; // NÃO ENTENDI ESSA LINA

  return getNewAuthor({ // NÃO ENTENDI ESSE return
      id,
      firstName,
      middleName,
      lastName,
  });
};

// ====================================

// Função que retorna um boolean indicando se os dados são válidos, checando se firstName e lastName são strings não vazias, e se middleName , caso seja informado, é uma string.

const isValid = (firstName, middleName, lastName) => { // COMO ESSES PARÂMETROS VÃO ENTRAR NESSA FUNÇÃO?
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

// =====================================

// Função que recebe firstName, middleName e lastName e salva uma pessoa autora no banco.
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