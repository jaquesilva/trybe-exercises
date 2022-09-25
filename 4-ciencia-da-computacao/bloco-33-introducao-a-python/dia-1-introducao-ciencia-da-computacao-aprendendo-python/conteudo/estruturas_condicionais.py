# from random import \
#     randint  # importanto uma biblioteca Python que permite fazer um sorteio

# pantheon_of_arton = [
#     {"nome": "Wynna", "domínio": "Magia"},
#     {"nome": "Nimb", "domínio": "Sorte"},
#     {"nome": "Ahadarak", "domínio": "Tormenta"},
# ]

# dice_roll = randint(1, 20)  # faz uma rolagem de números entre 1 e 20

# if dice_roll == 1:
#     print("Vish... Deu ruim!")
# elif 2 <= dice_roll <= 15:
#     print("Ahadarak, porque me atormentas!")
# elif 16 <= dice_roll <= 19:
#     print("Nimb, obrigadao pela sorte!")
# else:
#     print("Agora ninguém me segura!")

# ===============================================

position = ""
salary = 10501

if salary <= 2000:
    position = "estagiário"
elif 2000 < salary <= 5800:
    position = "júnior"
elif 5800 < salary <= 7500:
    position = "pleno"
elif 7500 < salary <= 10500:
    position = "senior"
else:
    position = "líder"

print(position)
