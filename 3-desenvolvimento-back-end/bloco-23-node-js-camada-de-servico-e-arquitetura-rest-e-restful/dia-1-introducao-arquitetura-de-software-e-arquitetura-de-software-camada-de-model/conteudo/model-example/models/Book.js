// Vamos praticar
// Vamos colocar em prática tudo o que aprendemos até aqui. Primeiro, crie a tabela Books usando o SQL abaixo


// CREATE TABLE books (
//   id INT NOT NULL AUTO_INCREMENT,
//   title VARCHAR(90) NOT NULL,
//   author_id INT(11) NOT NULL,
//   PRIMARY KEY(id),
//   FOREIGN KEY (author_id) REFERENCES authors (id)
// );

// INSERT INTO books (title, author_id)
// VALUES
//   ('A Game of Thrones', 1),
//   ('A Clash of Kings', 1),
//   ('A Storm of Swords', 1),
//   ('The Lord of The Rings - The Fellowship of the Ring', 2),
//   ('The Lord of The Rings - The Two Towers', 2),
//   ('The Lord of The Rings - The Return of The King', 2),
//   ('Foundation', 3);

// Depois de criar a tabela no banco de dados, faça as seguintes implementações.
// 1. Crie um modelo Book e defina o método getAll para retornar a lista de todos os livros.
// 2. Crie uma rota /books para trazer a lista de todos os livros.
// 3. Crie um método getByAuthorId no modelo Book , para retornar apenas livros associados com um determinado author_id . E altere o middleware da rota books criado no passo 2 para receber uma query string com a chave author_id , e retornar apenas os livros associados.

const connection = require('./connection');

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

const getByAuthorId = async () => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;'
  const [books] = await connection.execute(query, [authorId]);

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

// ===========================================

const getById = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id=?;'
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
  if (!lastName || typeof lastName !== 'string') return false;
  if (!authorId || typeof authorId !== 'numer' || !(await authorId.getByAuthorId(authorId))) return false;

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
