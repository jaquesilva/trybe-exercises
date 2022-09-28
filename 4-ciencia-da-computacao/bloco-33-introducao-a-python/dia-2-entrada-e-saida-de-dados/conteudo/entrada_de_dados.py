import random

# input -> recebe valores, vem embutida na própria linguagem

# meu_numero = int(input("Digite seu número:"))

# print(type(meu_numero))
# print(meu_numero)
# print(meu_numero + 1)

# -----------------------------------------------

meu_numero = 0

while meu_numero < 42:
    meu_numero += int(input("Digite seu número:"))

print("A soma de seus números superou 42")

# -----------------------------------------------


# escolhe um número aleatório entre 1 e 10
random_number = random.randint(1, 10)
guess = ""

# enquanto não adivinhar o número
while guess != random_number:
    # pergunte a pessoa usuária um número
    # Fazemos uma conversão do palpite para um número inteiro,
    # pois entrada de dados é sempre str
    guess = int(input("Qual o seu palpite? "))

print("O número sorteado era: ", guess)

# -----------------------------------------------
