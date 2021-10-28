-- Tabela sakila.address
-- 1. Quais constraints a coluna address_id poderia ter? Por quê?
-- Minha resposta:
-- R = Primary Key (PK), NOT NULL, UNIQUE

-- Resposta correta:
-- A coluna city_id é do tipo Foreign Key , e nela foi aplicada a constraint Foreign Key .

-- 2. A coluna city_id é um número. Consegue identificar que tipo de constraint foi aplicado a ela?
-- R = NOT NULL

-- 3. A coluna address (endereço) possui uma constraint . Qual tipo de constraint seria interessante 
-- ser aplicado a ela para que sempre exista um valor na coluna quando uma nova linha for criada?
-- Minha resposta:
-- R = DEFAULT

-- Resposta correta:
-- A restrição aplicada na coluna address é a restrição NOT NULL . Dessa maneira, é interessante que 
-- a coluna address sempre esteja preenchida em função de ser uma informação crucial para essa tabela,
-- além de a tabela não fazer sentido sem essa informação preenchida.

-- Tabela sakila.city
-- 1. Que tipo de constraint a coluna city_id possui?
-- R = Primary Key (PK), NOT NULL, UNIQUE

-- 2. Qual é o motivo de a coluna country_id não possuir nomes de country (país)? Ela é algum tipo 
-- de chave primária ou estrangeira?
-- R = FOREIGN KEY (Chave Estrangeira)

-- Tabela sakila.film
-- 1 . Qual coluna possui uma primary key ?
-- R = film_id

-- 2. Qual coluna possui uma foreign key ?
-- R = category_id



