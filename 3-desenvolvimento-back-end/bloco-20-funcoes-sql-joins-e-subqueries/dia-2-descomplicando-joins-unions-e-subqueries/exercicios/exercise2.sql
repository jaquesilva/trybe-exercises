-- 2. Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que 
-- possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais 
-- ( domestic_sales ).

-- Minha tentativa:
SELECT 
    m.title, b.domestic_sales, b.international_sales
FROM Movies m
INNER JOIN
    BoxOffice b ON b.movie_id = m.id;

-- Query correta:
USE Pixar;
SELECT 
    m.title, b.domestic_sales, b.international_sales
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
WHERE
    b.international_sales > b.domestic_sales;