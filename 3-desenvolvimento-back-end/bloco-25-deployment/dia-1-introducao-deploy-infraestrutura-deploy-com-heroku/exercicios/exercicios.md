# Exercício 1
Crie uma API simples no node utilizando express. No arquivo index.js, crie uma rota do tipo get com o endereço raiz / que entregue como resposta o texto "Está vivo!!!". Faça o deploy no Heroku utilizando o CLI.

## Passo a passo
1º - `npm init -y` - Iniciando um projeto em Node.js (cria o arquivo 'package.json')

2º - `npm install --save express` - Instalando o servidor express (cria a pasta 'node_modules')

3º - Criar o arquivo `index.js` na raiz do projeto, com as seguintes configurações:

```
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('"Está vivo!!!')
});

app.listen(3000, () => { 
  console.log(`Rodando na porta 3000`)
});
```

4º - Para sabermos se o servidor está funcionando digitamos o seguinte comando no terminal:

`node index.js`

5º - Para testarmos no navevador, digitamos na barra de endereço:
`localhost:3000`

Tem que aparecer a mesagem que está dentro do 'console.log' do 'app.listen'

6º - Criar o script de 'start' no 'package.json':
```
"scripts": {
  "start": "node index.js",
}
```

7º - Configurar a porta (variável de ambiente) que irá rodar:
```
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { 
  console.log(`Rodando na porta ${PORT}`)
});
```
8º - Iniciar o git, caso ainda não tenha iniciado no repositório que está trabalhando:

`git init`

9º Criar aplicação no Heroku:

`heroku create`

**Obs:** Para que funcione corretamente todo o percurso feito até agora, é necessário que tenha instalado na máquina:
- Node.js
- npm
- CLI do Heroku

10º Criar o arquivo '.gitignore" e adicionar o seguinte diretório:
`node_modules`

11º Subir a aplicação para o Heroku:
