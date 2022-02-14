const { Sequelize, DataTypes } = require('sequelize');
// DataTypes: serve para dizer qual o tipo de dado: string, integer, text, boolean...


// Conexão com o banco de dados "playground"
const sequelize = new Sequelize({
  host: "localhost",
  port: "3306",
  username: "trybe",
  password: "trybe2021",
  database: "playground"
});

// Model
const Book = sequelize.define({
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  pages: DataTypes.INTEGER,
});