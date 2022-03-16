const connection = require('./connection');
const Author = require('./Author');

// =========================================

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books;',
  );

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

// ==========================================

const getByAuthorId = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id = ?;'
  const [books] = await connection.execute(query, [authorId]);

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

// ===========================================

const getById = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id = ?;'
  const [books] = await connection.execute(query, [id]);

  if (books.length === 0) return null;

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }))[0];
}

// ===========================================

// Vamos praticar
// Ainda usando a tabela books como referência crie uma rota books do tipo POST . Faça as seguintes validações:
// Título não pode ser vazio;
// Título precisa ter pelo menos três caracteres;
// O campo author_id não pode ser vazio;
// O campo author_id só é válido se existir uma pessoa autora com esse id;
// Se algum dos requisitos anteriores não for atendido, retornar um json no seguinte formato { message: 'Dados inválidos' } com status 400 . Caso contrário, insira o livro na tabela books e retorne o json { message: 'Livro criado com sucesso! '} com o status 201 .

// Função que verifica se um livro é válido. Se o título não existir ou não for uma string , retornaremos false . Se o ID do autor não for informado ou não for um número, ou se o autor em questão não existir, retornamos falso. Caso ambos os campos sejam válidos, retornamos true .
const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number' || !(await Author.getById(authorId))) return false;

  return true;
};

// Função que cria um novo livro no banco utilizando o title e author_id que são passados como parâmetros para serem substituídos na query.
const create = async (title, author_id) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, author_id],
);

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  isValid,
  create,
};
