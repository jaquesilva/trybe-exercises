-- 4. Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que 
-- não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes 
-- cinemas. Retorne os nomes dos cinemas em ordem alfabética.

-- Minha tentativa:
SELECT * FROM Pixar.Theater
ORDER BY name

-- Query correta:
USE Pixar;
SELECT 
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    Theater t
        LEFT JOIN
    Movies m ON t.id = m.theater_id
ORDER BY t.name;