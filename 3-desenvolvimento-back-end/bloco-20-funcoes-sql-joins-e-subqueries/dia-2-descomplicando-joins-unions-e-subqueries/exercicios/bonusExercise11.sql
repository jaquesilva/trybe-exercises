-- 11. Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.

-- Minha tentativa:
SELECT m1.title, m1.length_minutes, m2.title, m2.length_minutes
FROM Pixar.Movies AS m1, Pixar.Movies AS m2
WHERE m1.director = m2.director;

-- Query correta:
USE Pixar;
SELECT 
    t1.title, t1.length_minutes, t2.title, t2.length_minutes
FROM
    Movies t1,
    Movies t2
WHERE
    t1.director = t2.director
        AND t1.title <> t2.title;