const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();
app.use(bodyParser.json());

// =================================================

// Rota GET /authors . E passamos uma função que acessa os parâmetros req e res , que chama a função getAll do nosso model , aguarda sua execução e então retorna um JSON com os dados enviados pelo banco.

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
})

// ===============================

//  Rota para obter os detalhes de uma pessoa autora, onde adicionamos uma função para responder a requisições para essa rota. Ela funciona de forma muito semelhante a da rota /authors . A diferença é que ela extrai o parâmetro id da URL e o usa para consultar o model pela pessoa escritora requisitada. Caso o model não encontre uma pessoa autora, setamos o código de status para 404 (Not Found) e retornamos um JSON com uma mensagem informando o que ocorreu.

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.getById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

// ===============================

// A rota POST /authors extrai as informações da pessoa autora que chegam em req.body e verifica se os dados enviados são válidos. Caso não sejam, o endpoint retorna um JSON com uma mensagem informando o que houve, juntamente com o status 400 , que indica uma requisição ruim, no caso com dados inválidos. Caso os dados sejam válidos, pede ao modelo para criar uma nova pessoa autora e retorna um JSON com uma mensagem indicando que a pessoa autora foi criada com sucesso.

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
      return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! '});
});

// =================================

app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = (author_id)
  ? await Book.getByAuthorId(author_id)
  : await Book.getAll();

  res.status(200).json(books);
});

// ================================

app.get('/book/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Book.getById(id);

  if (!book) return res.status(404).json({ message: 'Book not found' })

  res.status(200).json(book);
});

// ==================================================

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  
  if (!await Book.isValid(title, author_id)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }
  
  await Book.create(title, author_id);
  
  res.status(201).json({ message: 'Livro criado com sucesso! '});
  });

// ==================================================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});