/* index.js */
const express = require('express');

const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.use(express.json());

app.get('/recipes', function (req, res) {
  const { name } = req.query;
  const newArray = recipes.filter((recipe) => recipe.name === name)
  res.json(newArray);
});

app.post('/recipes', function (req, res) {
  const { id, name, price, waiTme } = req.body
  if (!price || typeof price !== 'number') {
    return res.status(400).json({message: 'Faltou informações'})
  }
  recipes.push({ id, name, price, waiTme });
  res.status(201).json({message: 'Deu bom!'})
})

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
