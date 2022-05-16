// Exercise 2
const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });

  return Book;
};

module.exports = Book;

// or

// module.exports = (sequelize, DataTypes) => {
//   const Book = sequelize.define('Book', {
//     title: DataTypes.STRING,
//     author: DataTypes.STRING,
//     pageQuantity: DataTypes.INTEGER,
//     createdAt: DataTypes.DATE,
//     updateat: DataTypes.DATE
//   });

//   return Book;
// }