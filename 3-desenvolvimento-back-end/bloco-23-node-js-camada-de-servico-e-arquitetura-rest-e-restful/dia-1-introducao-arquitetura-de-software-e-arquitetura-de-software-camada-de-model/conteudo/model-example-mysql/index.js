// index.js

const express = require('express');

const author = require('./models/Author');

const app = express();

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

const PORT = 3001;

app.listen(PORT, () => {
console.log(`Ouvindo a porta ${PORT}`);
});