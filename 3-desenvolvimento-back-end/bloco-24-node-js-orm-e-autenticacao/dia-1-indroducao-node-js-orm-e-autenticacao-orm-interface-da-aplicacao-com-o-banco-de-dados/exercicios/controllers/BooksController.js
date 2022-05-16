const BookService = require('../services/BooksService');

const getAll = async (_req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books);
};

const create = async (req, res) => {
  const newBook = await BookService.create();
  res.status(200).json(newBook);
}

module.exports = {
  getAll,
  create,
};