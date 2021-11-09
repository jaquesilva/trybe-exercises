-- 3. Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em 
-- ordem decrescente.

-- Minha tentativa:
SELECT 
    m.title, b.rating
FROM 
	Pixar.Movies m
INNER JOIN
    Pixar.BoxOffice b ON b.movie_id = m.id 
WHERE
	m.tilte, b.rating DESC;
    
-- Query correta:
USE Pixar;

SELECT 
    m.title, b.rating
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
ORDER BY b.rating DESC;