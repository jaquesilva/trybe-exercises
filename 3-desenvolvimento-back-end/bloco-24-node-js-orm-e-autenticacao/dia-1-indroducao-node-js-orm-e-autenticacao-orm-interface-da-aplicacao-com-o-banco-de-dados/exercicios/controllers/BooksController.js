const BookService = require('../services/BooksService');

// Exercise 4
const getAll = async (req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books);
};

// Exercise 7
const getById = async (req, res) => {
  const book = await BookService.getById(req.params.id);

  if (!book) return res.status(404).json({ message: "Book not found" });

  res.status(200).json(book);
};

// Exercise 10
const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const newBook = await BookService.create({ title, author, pageQuantity });
  res.status(201).json(newBook);
};

// Exercise 13
const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;

  const updateBook = await BookService.update(id, { title, author, pageQuantity });

  if (!updateBook) return res.status(404).json({ messge: 'Book not found' });

  res.status(201).json({ message: 'Book updated' });
};

// Exercise 16
const remove = async (req, res) => {
  const { id } = req.params;

  const removeBook = await BookService.remove(id);

  if (!removeBook) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json({ message: 'Book removed' });
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};