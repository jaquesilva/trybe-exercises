const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updateat: DataTypes.DATE
  });

  return User;
};

module.exports = User;

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