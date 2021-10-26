-- 1. Monte uma query que exiba seu nome na tela
SELECT 'Jaqueline';

-- 2. Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
SELECT 'Jaqueline', 'Silva', 'Cuiabá-MT', 32;

-- 3. Monte uma query que, além de exibir todas as informações já mencionadas, identifique 
cada coluna usando o AS , que é chamado de alias na linguagem SQL ( alias é como um apelido no 
português);
SELECT 'Jaqueline' AS Nome, 'Silva' AS Sobrenome, 'Cuiabá-MT' AS 'Cidade Natal', 32 AS Idade;

-- 4. Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT 
SELECT 13 * 8 AS Resultado;

-- 5. Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".
SELECT now() AS 'Data Atual';