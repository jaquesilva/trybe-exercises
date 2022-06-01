Uma variável de ambiente é uma variável cujo valor é definido fora do programa, normalmente por meio de funcionalidades incorporadas ao sistema operacional ou microsserviço. Para nós podermos simular essas variáveis dentro de nosso projeto, elas são definidas em um arquivo nomeado de .env que fica na raiz da aplicação e pode ser lido pela biblioteca dotenv. A estrutura do arquivo segue o seguinte padrão:

`var=valor`

Onde:
- var: Define o nome da variável de ambiente.
- valor: É o que será atribuído à variável.

Consumindo a variável dentro do arquivo index.js:

```
const express = require('express');
require('dotenv').config();

const app = express();
// adiciona leitura da variável de ambiente
const PORT = process.env.PORT || 3000;

app.use('/', (_req, res) => res.send('<h1>Hello World</h1>'));

app.listen(PORT); 
```

Definição das variáveis:

```
SECRET_KEY=M1NH@S3NH4

MYSQL_HOST=127.0.0.1
MYSQL_PORT=3606
MYSQL_USER=root
MYSQL_PASS=secretpass
```

Nota: 
- Por se tratar de dados sensíveis, sempre adicionamos o arquivo .env ao .gitignore, pois ele não deve ser compartilhado com outras pessoas
- As variáveis de ambiente podem ser definidas no Heroku no **dashboard** ou via **CLI**
