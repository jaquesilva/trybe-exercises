# Suponha que o preço de capa de um livro seja R$ 24,20, mas as livrarias recebem um desconto de 40%. O transporte custa 3,00 para o primeiro exemplar e 75 centavos para cada exemplar adicional. Qual é o custo total de atacado para 60 cópias? Escreva uma expressão que receba o custo total e a imprima.

quantidade_livros = 60
livro_sem_desconto = 24.20
livro_com_desconto = livro_sem_desconto * (40/100)
frete = 3 + ((quantidade_livros -1) * 0.75)
custo_total = (livro_com_desconto + frete) * quantidade_livros
print(custo_total)
