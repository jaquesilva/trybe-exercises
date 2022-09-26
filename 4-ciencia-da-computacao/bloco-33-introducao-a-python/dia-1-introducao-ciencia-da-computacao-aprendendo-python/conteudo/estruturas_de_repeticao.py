# pantheon_of_arton = [
#     {"nome": "Wynna", "domínio": "Magia"},
#     {"nome": "Nimb", "domínio": "Sorte"},
#     {"nome": "Ahadarak", "domínio": "Tormenta"},
# ]

# Fazer iteração para pegar o "domínio" de cada deus:
# domains = []

# for god in pantheon_of_arton:
#     domains.append(god["domínio"])


# print(domains)

# ----------------------------------------------

# Filtrar parte de uma lista, como se fosse o filter do js,
# para excluir o { "domínio": "Tormenta" }

# domains = [god
#            for god in pantheon_of_arton
#            if god["domínio"] != "Tormenta"]


# print(domains)

# or

# domains = [god for god in pantheon_of_arton if god["domínio"] != "Tormenta"]

# print(domains)

# -----------------------------------------------

# Pegar somente o domínio específico

# domains =
#   [god["domínio"] for god in 
#   pantheon_of_arton if god["domínio"] != "Tormenta"]

# print(domains)

# ===============================================

restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

# filtered_restaurants = []

# min_rating = 3.0

# for restaurant in restaurants:
#     if restaurant["nota"] > min_rating:
#         filtered_restaurants.append(restaurant)
# print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

# ===============================================
# COMPREENSÃO DE LISTA (list comprehension)
# ===============================================

# min_rating = 3.0
# filtered_restaurants = [restaurant
#                          for restaurant in restaurants
#                          if restaurant["nota"] > min_rating]
# print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

# Filtrar somente os restaurantes

# -----------------------------------------------

min_rating = 3.0
filtered_restaurants = [restaurant["name"]
                        for restaurant in restaurants
                        if restaurant["nota"] > min_rating]
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

# -----------------------------------------------

team = ["Ana", "Rafa", "Duda", "André", "Jean"]

a_names = []

for name in team:
    if name[0] == "A":
        a_names.append(name.upper())

print(a_names)

# or

# a_names = [name.upper() for name in team if name[0] == "A"]
# print(a_names)

# -----------------------------------------------

# A compreensão de listas também funciona com listas de strings. A seguinte
# cria uma nova lista de strings que contém ‘a’.

nomes = ['Duda', 'Rafa', 'Cris', 'Yuri']
nomes2 = [s for s in nomes if 'a' in s]
print(nomes2)

# -----------------------------------------------

# O exemplo a seguir usa uma compreensão de listas para criar uma lista
# com o quadrado dos números entre 1 e 10

quadrados = [x*x for x in range(11)]
print(quadrados)

# -----------------------------------------------

for index in range(5):
    print(index)

# ===============================================
# WHILE
# ===============================================

# A Sequência de Fibonacci, muito presente em diversas formas na natureza,
# é uma sequência numérica começando por 0 e 1 e cada termo subsequente
# corresponde à soma dos dois anteriores.

n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next

# ===============================================
# ENUMERATE
# ===============================================

languages = ['Python', 'Java', 'JavaScript']

enumerate_prime = enumerate(languages)

# converte um objeto enumerate em uma lista
print(list(enumerate_prime))

# ----------------------------------------------

# desestruturar (unpack) os itens da lista ou tupla:

languages = ['Python', 'Java', 'JavaScript']

for index, language in enumerate(['Python', 'Java', 'JavaScript']):
    print(f'{index} - {language}')

# Documentação do enumerate
# https://docs.python.org/pt-br/3/library/functions.html#enumerate
