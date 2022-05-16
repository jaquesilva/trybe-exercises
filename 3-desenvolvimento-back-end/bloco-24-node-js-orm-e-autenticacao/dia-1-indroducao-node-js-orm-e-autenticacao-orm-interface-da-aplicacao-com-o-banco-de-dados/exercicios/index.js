const express = require('express');

const BooksController = require('./controllers/BooksController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Exercise 5
app.get('/books', BooksController.getAll);
// Exercise 8
app.get('/books/:id', BooksController.getById);
// Exercise 11
app.post('/books', BooksController.create);
// Exercise 14
app.put('/books/:id', BooksController.update);
// Exercise 17
app.delete('/books/:id', BooksController.remove);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));