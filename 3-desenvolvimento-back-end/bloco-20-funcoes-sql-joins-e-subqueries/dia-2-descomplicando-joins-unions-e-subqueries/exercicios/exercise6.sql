-- 6. Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os 
-- títulos dos filmes que possuem avaliação maior que 7.5.

-- Minha tentativa:
SELECT 
	(SELECT 
    
    )
INNER JOIN
FROM ON b.movie_id = m.
HAVING rating > 7.5

-- Query correta:USE Pixar;

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

