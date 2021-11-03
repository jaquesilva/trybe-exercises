-- 1. Escreva uma query que exiba o maior salário da tabela.
SELECT MAX(SALARY) AS 'Maior Salário' FROM hr.employees;

-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.

-- Minha tentativa:
SELECT 

-- Query correta:
SELECT  MAX(SALARY) - MIN(SALARY)
FROM hr.employees;

-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em 
-- ordem decrescente.

-- Minha tentativa:
SELECT AVG(JOB_ID) AS 'Média Salarial' FROM hr.employees
ORDER BY 'Média Salarial' DESC;   

-- Query correta:
SELECT  JOB_ID, AVG(SALARY) AS 'average_salary'
FROM hr.employees
GROUP BY JOB_ID
ORDER BY `average_salary` DESC;

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de 
-- todas as pessoas funcionárias.
SELECT SUM(SALARY) FROM hr.employees;

-- 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de
-- todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas 
-- duas casas decimais.

-- Minha tentativa:
SELECT 
	MAX(SALARY, 2) AS 'Maior Salário',
    MIN(SALARY, 2) AS 'Menor Salário',
    SUM(SALARY, 2) AS 'Soma dos Salários',
    AVG(SALARY, 2) AS 'Média dos Salários'
FROM hr.employees;

-- Query correta:
SELECT MAX(SALARY),
	   MIN(SALARY),
	   SUM(SALARY),
       ROUND(AVG(SALARY), 2)
FROM hr.employees;

-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras 
-- ( IT_PROG ).

-- Minha tentativa:
SELECT SUM(JOB_ID) FROM hr.employees
WHERE JOB_ID = IT_PROG; 

-- Query correta:
SELECT JOB_ID , COUNT(*) AS 'total'
FROM hr.employees
WHERE JOB_ID = "IT_PROG";

-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de 
-- cada profissão ( JOB_ID ).

-- Minha tentativa:
SELECT SUM(SALARY) FROM hr.employees
GROUP BY JOB_ID;

-- Query correta:
SELECT JOB_ID, SUM(SALARY)
FROM hr.employees
GROUP BY JOB_ID;

-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de 
-- dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).
SELECT JOB_ID, SUM(SALARY)
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto 
-- das pessoas programadoras ( IT_PROG ).

-- Minha tentativa
SELECT JOB_ID, AVG(SALARY)
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY SALARY DESC;

-- Query correta:
SELECT job_id, AVG(salary) 'average_salary'
FROM hr.employees
WHERE job_id <> 'IT_PROG'
GROUP BY job_id
ORDER BY `average_salary` DESC;

-- 10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos 
-- com mais de dez funcionários. Dica: agrupe pelo department_id.

-- Minha tentativa:
SELECT AVG(SALARY), COUNT(EMPLOYEE_ID)
FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING DEPARTMENT_ID > 10;

-- Query correta:
SELECT department_id,
    AVG(salary) 'average_salary' ,
    COUNT(*) 'number_of_employees'
FROM hr.employees
GROUP BY department_id
HAVING `number_of_employees` > 10;

-- 11. Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados
-- por 515 agora devem iniciar com 777.

-- Minha tentativa
UPDATE hr.employees
SET PHONE_NUMBER = '777'
WHERE PHONE_NUMBER = '515%';

-- Query correta:
UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha 
-- oito ou mais caracteres.

-- Minha tentativa:
SELECT * FROM hr.employees
WHERE FIRST_NAME = 

-- Query correta:
SELECT * FROM hr.employees
WHERE LENGTH(first_name) >= 8;

-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome 
-- e ano no qual foi contratado (exiba somente o ano).
SELECT EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) FROM hr.employees;

-- or

SELECT employee_id, first_name,
    LEFT(hire_date, 4) 'hire_year'
FROM hr.employees;

-- or

SELECT employee_id, first_name,
    MID(hire_date, 1, 4) 'hire_year'
FROM hr.employees;

-- 14. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome 
-- e dia do mês no qual foi contratado (exiba somente o dia).
SELECT EMPLOYEE_ID, FIRST_NAME, DATE(HIRE_DATE) FROM hr.employees;

-- OR

SELECT employee_id, first_name,
    RIGHT(hire_date, 2) 'hire_day'
FROM hr.employees;

-- OR

SELECT employee_id, first_name,
    MID(hire_date, 9, 2) 'hire_day'
FROM hr.employees;

-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e 
-- mês no qual foi contratado (exiba somente o mês).
SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) FROM hr.employees;

-- OR

SELECT employee_id, first_name,
    SUBSTRING(hire_date, 6, 2) 'hire_month'
FROM hr.employees;

-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.

-- Minha tentativa:
SELECT UCASE(FIRST_NAME) FROM hr. employees;

-- Query correta:
SELECT UPPER(CONCAT(FIRST_NAME, " ", LAST_NAME))
FROM hr.employees;

-- 17. Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário 
-- contratados em julho de 1987.

-- Minha tentativa:
SELECT CONCAT(FIRST_NAME, " ", LAST_NAME, HIRE_DATE)
FROM hr.employees
WHERE HIRE_DATE = '1987-06';

-- Querys corretas:
SELECT LAST_NAME _NAME, HIRE_DATE
FROM hr.employees
WHERE HIRE_DATE  BETWEEN '1987-07-01'  AND '1987-07-31';

SELECT LAST_NAME _NAME, HIRE_DATE
FROM hr.employees
WHERE MONTH(HIRE_DATE)=7 and YEAR(HIRE_DATE)=1987;

-- 18. Escreva uma query que exiba as seguintes informações de cada funcionário: nome , sobrenome , 
-- tempo que trabalha na empresa (em dias).

-- Minha tentativa:
SELECT FIRST_NAME AS Nome, LAST_NAME AS Sobrenome, SUM(DAY(HIRE_DATE)) AS 'Tempo de Serviço(Dias)'
FROM hr.employees;

-- Query correta:
SELECT first_name,
    last_name,
    DATEDIFF(CURRENT_DATE() , HIRE_DATE) 'days_worked'
FROM hr.employees;
