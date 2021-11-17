-- 12. Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título
-- dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.

-- Minha tentativa:
-- Usando SUBQUERY
USE Pixar;

-- Usando INNER JOIN
USE Pixar;
SELECT 
    m.title
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
WHERE
    domestic_sales AND international_sales > 500000000 AND length_minutes > 110;
    
-- Query corretas:
-- Usando SUBQUERY
USE Pixar;

SELECT 
    m.title
FROM
    Movies m
WHERE
    m.id IN (SELECT 
            b.movie_id
        FROM
            BoxOffice b
        WHERE
            b.international_sales >= 500000000)
        AND m.length_minutes > 110;

-- Usando INNER JOIN
USE Pixar;

SELECT 
    m.title
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
WHERE
    b.international_sales >= 500000000
        AND m.length_minutes > 110;