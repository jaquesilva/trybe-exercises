## 1. No Docker Hub , utilizando a caixa de busca ( "Search for great content" ) , busque pela imagem da Distribuição Linux Debian ;
### *R = Devemos acessar o site <https://hub.docker.com/>, e na caixa de busca, no canto superior esquerdo, pesquisar pela imagem do "debian".*
<br>

## 2. Uma vez que encontrar a imagem oficial , acesse-a (clicando em seu card) e verifique na página de detalhes, se existe algum comando para baixarmos a imagem localmente sem ter que criar um container para isso;
### *R = docker pull debian*
<br>

## 3. Baixe a imagem utilizando a tag : stable-slim , que é uma versão reduzida da distribuição;
### *R = docker pull debian:stable-slim*
<br>

## 4. Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência (não esqueça referenciar a tag );
### *R = docker container run -it debian:stable-slim*
<br>

## 5. No terminal, você deve conseguir rodar o comando cat /etc/*-release , que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container;
### *R = Consegui rodar o comando cat /etc/*-release*
<br>

## 6. Encerre o terminal;
### *R = Para encerrar o terminal dentro do container basta digitar "exit"*
<br>

## 7. Verifique na sua lista de containers , qual o container é referente ao exercício que acabou de praticar;
### *R = docker container ls -a (CONTAINER ID: be9eb2ac4219 | NAMES: vigorous_torvalds*)
<br>

## 8. Inicie o mesmo container novamente , sem criar outro. Valide se ele está ativo na lista de containers;
### *R = docker container start vigorous_torvalds*
<br>

## 9. Retome o container que foi criado anteriormente nesse exercício;
### *R = docker container attach vigorous_torvalds*
<br>

## 10. Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do container;
### *R = Consegui rodar o comando cat /etc/*-release*

## 11. Encerre o terminal;
### *R = Para encerrar o terminal dentro do container basta digitar "exit"*
<br>

## 12. Remova somente o container criado para esse exercício;
### *R = docker container rm vigorous_torvalds*
<br>

## 13. (Bônus) Crie e rode de modo interativo em modo 'Cleanup' , a imagem andrius/ascii-patrol;
### *R = docker container run -it --rm andrius/ascii-patrol*
<br>

## 14. (Bônus) Encerre o container utilizando os botões [ ctrl ] + [ c ].
### *R = Após fechar o jogo, utilize o comando clear para limpar a tela. Você pode constatar que, rodando um docker container ls -a , o container do jogo não estará presente.*
