-- 9. Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em 
-- cartaz.
USE Pixar;
SELECT 
    t.name, t.location
FROM
    Theater AS t
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            Movies
        WHERE
            Movies.theater_id = t.id);