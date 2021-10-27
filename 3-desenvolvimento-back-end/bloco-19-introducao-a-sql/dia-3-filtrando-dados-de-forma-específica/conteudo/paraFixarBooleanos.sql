-- 1. Precisamos identificar os dados do cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org . 
-- As informações podem ser encontradas na tabela customer.
SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

-- 2. Precisamos de um relatório dos nomes dos clientes, em ordem alfabética , que não estão mais 
-- ativos no nosso sistema e pertencem à loja com o id = 2 , e não inclua o cliente KENNETH no 
-- resultado. As informações podem ser encontradas na tabela customer

-- Minha tentativa:
SELECT first_name FROM sakila.customer
WHERE NOT first_name = active AND NOT first_name = KENNETH AND store_id = 2
ORDER BY first_name ASC

-- Query correta:
USE sakila;
SELECT first_name FROM customer
WHERE active = 0 AND store_id = 2 AND first_name <> 'KENNETH'
ORDER BY first_name;

