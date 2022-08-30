# O Fatorial de um número inteiro é representado pela multiplicação de todos os números predecessores maiores que 0. Por exemplo, o fatorial de 5 é 120 pois 5! = 1 * 2 * 3 * 4 * 5. Escreva um código que calcule o fatorial de um número inteiro.

# Referência: https://www.pythonprogressivo.net/2018/05/Calcular-Fatorial-Python-FOR-WHILE.html

# A fórmula de fatorial de um número n é:
# n! = n * (n-1) * (n-2) * ... * 3 * 2 * 1

# Ou seja, o valor de n! (leia-se: n fatorial) é o produto de 1, por 2, por 3, ..., por (n-1) e n.

# Por exemplo:
# 4! = 4 x 3 x 2 x 1 = 24
# 5! = 5 x 4 x 3 x 2 x 1 = 120 (ou: 5! = 5 x 4! = 5x24 = 120)

from itertools import count


number  = 20

resultado = 1
count = 0

while count <= number:
    resultado *= count
    count += 1

print(resultado)

