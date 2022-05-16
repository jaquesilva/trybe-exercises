const { Book } = require('../models');

// Exercise 3
const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

// Exercise 6
const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

// Exercise 9
const create = async ({ title, author, pageQuantity }) => {
  const newBook = await Book.create({ title, author, pageQuantity });
  return newBook;
};

// Exercise 12
const update = async (id, { title, author, pageQuantity }) => {
  const [updateBook] = await Book.update(
    {
      title,
      author,
      pageQuantity,
    },
    { where: { id }},
  );
  return updateBook;
};

// Exercise 15
const remove = async (id) => {
  const removeBook = await Book.destroy({ where: { id } });

  return removeBook;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}