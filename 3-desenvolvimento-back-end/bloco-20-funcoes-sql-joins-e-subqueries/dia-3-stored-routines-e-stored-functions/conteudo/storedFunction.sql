-- 1. Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de 
-- pagamentos feitos até o momento por um determinado customer_id.

-- Minha tentativa:
USE sakila;
DELIMITER $$

CREATE FUNCTION quantidadeDePagamentos(customer_id INT)
RETURNS VARCHAR(50) READS SQL DATA
BEGIN
	DECLARE total_pagamentos INT;
    SELECT COUNT(payment_id)
    FROM sakila.payment
    INTO total_pagamentos
    RETURN total_pagamentos
END $$

DELIMITER ;

-- Query correta:
USE sakila;
DELIMITER $$

CREATE FUNCTION GetTotalPayments(id INT)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE total_payments INT;
    SELECT COUNT(*)
    FROM sakila.payment
    WHERE customer_id = id INTO total_payments;
    RETURN total_payments;
END $$

DELIMITER ;

-- Como usar:

SELECT GetTotalPayments(2);

-- 2. Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme 
-- vinculado ao registro de inventário com esse id.

Minha tentativa:
USE sakila;
DELIMITER $$

CREATE FUNCTION NameMovie(inventory_id INT)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE movie INT;
    SELECT title
    FROM sakila.film
    WHERE title = inventory_id INTO movie;
    RETURN movie;
END $$

DELIMITER ;

-- Como usar:

SELECT NameMovie(2);

-- Query correta:
USE sakila;
DELIMITER $$

CREATE FUNCTION GetCorrespondingFilm(id INT)
RETURNS VARCHAR(500) READS SQL DATA
BEGIN
    DECLARE movie_title VARCHAR(500);
    SELECT distinct F.title
    FROM sakila.inventory I
    INNER JOIN sakila.film F
    ON F.film_id = I.film_id
    WHERE I.inventory_id = id INTO movie_title;
    RETURN movie_title;
END $$

DELIMITER ;

-- Como usar:

SELECT GetCorrespondingFilm(2);

-- 3. Crie uma function que receba uma determinada categoria de filme em formato de texto 
-- (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.

-- Minha tentativa:
USE sakila;
DELIMITER $$

CREATE FUNCTION QuantidadeTotalDeFilmes(categoria VARCHAR(50))
RETURNS VARCHAR(50) READS SQL DATA
BEGIN
    DECLARE movie_title VARCHAR(50);
    SELECT distinct F.title
    FROM sakila.category C
    INNER JOIN sakila.film F
    ON C.category_id = F.category_id
    WHERE I.inventory_id = categoria INTO movie_title;
    RETURN movie_title;
END $$

DELIMITER ;

-- Como usar:

SELECT QuantidadeTotalDeFilmes('drama');

-- Query correta:
USE sakila;
DELIMITER $$

CREATE FUNCTION GetMovieAmountInCategory(category VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
    DECLARE movie_amount INT;
    SELECT COUNT(*)
    FROM sakila.category c
    INNER JOIN sakila.film_category fc ON fc.category_id = c.category_id
    WHERE c.name = category INTO movie_amount;
    RETURN movie_amount;
END $$

DELIMITER ;

-- Como usar:

SELECT GetMovieAmountInCategory('Horror');
