const express = require('express');
const bodyParser = require('body-parser');

const User = require('./models/User.js');

const app = express();
app.use(bodyParser.json());

// =================================================

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Validação

  await User.create(firstName, lastName, email, password);

  res.status(201).json({ message: 'Usuário criado com sucesso'});
});

// ==================================================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});