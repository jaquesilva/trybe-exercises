// Vamos praticar
// Crie um modelo Book e defina o método getAll para retornar a lista de todos os livros.
// Crie uma rota /books para trazer a lista de todos os livros.
// Crie um método getByAuthorId no modelo Book , para retornar apenas livros associados com um determinado author_id . E altere o middleware da rota books criado no passo 2 para receber uma query string com a chave author_id , e retornar apenas os livros associados.

const connection = require('./connection');
const Author = require('./Author');

const getAll = async () => {
  const query = 'SELECT * FROM model_example.books;';
  const [books] = await connection.execute(query);

  return books;
}

// ===================================================

// OBS: NÃO CONSEGUI ENTENDER A FUNCIONALIDADE DESSA FUNÇÃO

const getByAuthorId = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;'
  const [books] = await connection.execute(query, [authorId]);

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

// ====================================================

// Vamos praticar!
// Continuando o exercício anterior faça o seguinte.
// Crie uma rota /books/:id e retorne o livro de acordo com o id passado por parâmetro. Se não existir, retorne um json no seguinte formato { message: 'Not found' } .

const getById = async (id) => {
  const query = 'SELECT title, author_id FROM model_example.books WHERE id = ?'
  const [ books ] = await connection.execute(query, [id]);

  if (books.length === 0) return null;

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }))[0];
}

// =====================================================

// Vamos praticar
// Ainda usando a tabela books como referência crie uma rota books do tipo POST . Faça as seguintes validações:
// Título não pode ser vazio;
// Título precisa ter pelo menos três caracteres;
// O campo author_id não pode ser vazio;
// O campo author_id só é válido se existir uma pessoa autora com esse id;
// Se algum dos requisitos anteriores não for atendido, retornar um json no seguinte formato { message: 'Dados inválidos' } com status 400 . Caso contrário, insira o livro na tabela books e retorne o json { message: 'Livro criado com sucesso! '} com o status 201.

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number' || !(await Author.getById(authorId))) return false;

  return true;
};

// =====================================

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