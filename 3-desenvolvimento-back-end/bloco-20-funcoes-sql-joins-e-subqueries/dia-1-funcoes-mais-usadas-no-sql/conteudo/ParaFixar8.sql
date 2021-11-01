-- Filtrando Resultados do GROUP BY com HAVING

-- 1. Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além 
-- disso, dê um alias (apelido) à coluna gerada por AVG(length) , de forma que deixe a query mais 
-- legível. Finalize ordenando os resultados de forma decrescente.

-- Query inicial do exercício:
    SELECT rating, AVG(length)
    FROM sakila.film
    GROUP BY rating;

SELECT rating, AVG(length) AS Durações_Médias
FROM sakila.film
GROUP BY rating
HAVING Durações_Médias BETWEEN 115.0 AND 121.50
ORDER BY Durações_Médias DESC;

-- 2. Usando a query a seguir, exiba apenas os valores de custo de substituição que estão acima de 
-- $3950.50. Dê um alias que faça sentido para SUM(replacement_cost) , de forma que deixe a query mais
-- legível. Finalize ordenando os resultados de forma crescente.

-- Query inicial do exercício:
    SELECT rating, SUM(replacement_cost)
    FROM sakila.film
    GROUP by rating;

-- Minha tentativa:
SELECT rating, SUM(replacement_cost) AS custo_de_substituicao
FROM sakila.film
GROUP BY rating
HAVING replacement_cost > 3950.50
ORDER BY custo_de_substituicao;

-- Query correta:
SELECT rating, SUM(replacement_cost) as custo_de_substituicao
FROM sakila.film
GROUP BY rating
HAVING custo_de_substituicao  > 3950.50
ORDER BY custo_de_substituicao;