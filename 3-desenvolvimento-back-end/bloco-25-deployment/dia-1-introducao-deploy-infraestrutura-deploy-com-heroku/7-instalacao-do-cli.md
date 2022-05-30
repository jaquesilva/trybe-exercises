## Heroku CLI (Command Line Interface)
Com ele, conseguimos:
- Gerenciar e escalar aplicações;
- Prover add-ons;
- Observar logs;
- Rodar projetos localmente, simulando um servidor.

---

## Instalando o Heroku

Abra o terminal e execute o seguinte comando:

```
curl https://cli-assets.heroku.com/install.sh | sh
```

E teste a instalação checando a versão do heroku:

```
heroku -v
```

Você deve ver algo como:

```
heroku/7.60.2 linux-x64 node-v14.19.0
```

---

## Logando no Heroku

**Atenção: é necessário autenticar o CLI para que os comandos funcionem corretamente.**

Após a instalação ser concluída, você poderá acessar o Heroku por meio do seu terminal. Use o seguinte comando para logar com a sua conta:

```
heroku login
```

A seguir, o console solicitará que você pressione qualquer tecla para abrir o navegador e prosseguir com o login nele. Feito isso, será exibida no terminal a mensagem de sucesso conforme abaixo:

```
heroku login
heroku: Press any key to open up the browser to login or q to exit: 
Opening browser to https://cli-auth.heroku.com/auth/cli/browser/8dbab52f-de01-45e3-8a49-62745ec53360?requestor=SFMyNTY.g2gDbQAAAA8xMzguMTE3LjE3OS4xNDRuBgBAxZkVgQFiAAFRgA.K1idvwKAD3uVM85_fFkVXpt938VancJdz6QA8lt4fYc
Logging in... done
Logged in as jaqueline.natario@gmail.com
```

