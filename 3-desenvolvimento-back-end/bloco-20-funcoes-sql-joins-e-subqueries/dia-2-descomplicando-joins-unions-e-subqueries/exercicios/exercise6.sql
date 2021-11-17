-- 6. Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os 
-- títulos dos filmes que possuem avaliação maior que 7.5.

-- Minha tentativa:
SELECT 
	(SELECT 
    
    )
INNER JOIN
FROM ON b.movie_id = m.
HAVING rating > 7.5

-- Query correta:

-- Usando SUBQUERY
USE Pixar;

SELECT 
    title
FROM
    Movies
WHERE
    id IN (SELECT 
            movie_id
        FROM
            BoxOffice
        WHERE
            rating > 7.5);

-- Usando INNER JOIN
USE Pixar;

SELECT 
    m.title
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
WHERE
    b.rating > 7.5;

