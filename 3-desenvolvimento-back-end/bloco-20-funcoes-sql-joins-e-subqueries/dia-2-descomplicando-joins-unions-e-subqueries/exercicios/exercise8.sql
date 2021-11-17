-- 8. Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.

-- Minha tentativa:
SELECT name, location FROM Pixar.Theater AS t
WHERE EXISTS (
	SELECT * FROM hotel.reservations
	WHERE c.CustomerID = reservations.CustomerId
);

-- Query correta:
USE Pixar;
SELECT 
    t.name, t.location
FROM
    Theater AS t
WHERE
    EXISTS( SELECT 
            *
        FROM
            Movies
        WHERE
            Movies.theater_id = t.id);