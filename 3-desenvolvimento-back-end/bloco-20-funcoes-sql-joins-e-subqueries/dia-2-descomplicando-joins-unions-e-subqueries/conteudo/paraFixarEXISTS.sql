-- 1. Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não 
-- foram emprestados.
SELECT id, title FROM hotel.Books AS B
WHERE NOT EXISTS (
	SELECT * FROM hotel.Books_Lent
	WHERE B.id = Books_Lent.book_id
);

-- 2. Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente 
-- emprestados e que contêm a palavra "lost" no título.
SELECT id, title FROM hotel.Books AS B
WHERE EXISTS (
	SELECT * FROM hotel.Books_Lent
	WHERE B.id = Books_Lent.book_id LIKE '%lost%'
);

-- 3. Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram 
-- um carro.
SELECT name FROM hotel.Customers AS C
WHERE NOT EXISTS (
	SELECT * FROM hotel.CarSales
	WHERE C.CustomerId = CarSales.CustomerID
);

-- 4. Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba 
-- o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.

-- Minha tentativa:
SELECT name FROM hotel.Customers AS C
WHERE EXISTS (
	SELECT * FROM hotel.Cars
	WHERE C.CustomerId = CarSales.CustomerID
    INNER JOIN 
);

-- Query correta:
SELECT 
    cus.name, car.name
FROM
    hotel.Cars AS car
        INNER JOIN
    hotel.Customers AS cus
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.CarSales
        WHERE
            CustomerID = cus.CustomerId
                AND carID = car.ID);