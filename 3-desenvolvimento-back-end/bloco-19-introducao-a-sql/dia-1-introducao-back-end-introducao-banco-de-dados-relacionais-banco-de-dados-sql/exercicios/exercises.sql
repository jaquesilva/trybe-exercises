-- 1. Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o 
-- MySql Workbench .
-- R = SCHEMAS -> escolher_banco_de_dados -> Tables -> escolher_table -> clicar com o botão direito 
-- do mouse e escolher a opção "Table Inspector"

-- or

-- Basta clicar com botão direito na tabela e clicar em "select rows - limit 200" O limite vai 
-- depender da configuração do workbench .

-- 2. Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench.
-- R = Menu superior "Create a new table"

-- 3. Feito isso, crie uma tabela com as seguintes restrições:
-- Nome da tabela: Filme
-- Colunas:
-- FilmeId - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
-- Descricao - não permite nulos, tipo texto (varchar(100));
-- AnoLancamento - não permite nulos, tipo int;
-- Nota - permite nulos, tipo int;
-- R = Table criada no MySQLWorkBench

-- 4. Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.
-- R = Faz referência a tabela country

-- 5. Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz 
-- com a tabela country ?
-- R = N:1

-- 6. Qual tipo de relacionamento a tabela country faz com a tabela city ?
-- R = 1:N

-- 7. Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 
-- 1:N ou N:1.

-- Minha resposta:
-- R = 

-- Resposta correta:
-- store -> staff
-- language -> film
-- film -> language






