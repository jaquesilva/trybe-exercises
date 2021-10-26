-- 1. Quantas senhas temos cadastradas nessa tabela?
SELECT COUNT(password) FROM sakila.staff;

-- 2. Quantas pessoas temos no total trabalhando para nossa empresa?
SELECT COUNT(staff_id) FROM sakila.staff;
-- ou
SELECT COUNT(*) FROM sakila.staff;

-- 3. Quantos emails temos cadastrados nessa tabela?
SELECT COUNT(email) FROM sakila.staff;