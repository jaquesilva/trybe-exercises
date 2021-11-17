-- 10. Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 
-- 8 e que estejam em cartaz.

-- Minha tentativa:
SELECT * t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum

-- Query correta:
USE Pixar;
SELECT 
    m.id,
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    m.theater_id
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
WHERE
    b.rating > 8
        AND m.theater_id IS NOT NULL;