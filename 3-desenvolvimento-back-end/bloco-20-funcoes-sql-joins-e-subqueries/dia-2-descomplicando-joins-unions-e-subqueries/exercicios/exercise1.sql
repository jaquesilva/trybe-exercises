-- 1. Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais 
-- ( international_sales ) de cada filme.

-- Minha tentativa:
SELECT t1.domestic_sales, t1.international_sales
FROM BoxOffice AS t1
INNER JOIN Movies AS t2
ON t1.movie_id = t2.id;

-- Query correta:
SELECT 
    m.title, b.domestic_sales, b.international_sales
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id;