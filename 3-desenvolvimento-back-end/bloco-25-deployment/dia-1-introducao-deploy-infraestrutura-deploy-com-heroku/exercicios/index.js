const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('"Está vivo!!!')
});

const PORT = 3000;

app.listen(PORT, () => { 
  console.log(`Rodando na porta ${PORT}`)
});

// teste