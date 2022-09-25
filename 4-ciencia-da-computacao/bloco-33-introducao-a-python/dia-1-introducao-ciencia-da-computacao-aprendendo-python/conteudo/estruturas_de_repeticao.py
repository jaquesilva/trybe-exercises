pantheon_of_arton = [
    {"nome": "Wynna", "domínio": "Magia"},
    {"nome": "Nimb", "domínio": "Sorte"},
    {"nome": "Ahadarak", "domínio": "Tormenta"},
]

# Fazer iteração para pegar o domínio de cada deus:
domains = []

for god in pantheon_of_arton:
    domains.append(god["domínio"])


print(domains)

# Filtrar parte de uma lista, como se fosse o filter do js,
# para excluir o { "domínio": "Tormenta" }

domains = [god
           for god in pantheon_of_arton
           if god["domínio"] != "Tormenta"]


print(domains)

# or

domains = [god for god in pantheon_of_arton if god["domínio"] != "Tormenta"]

print(domains)

# Pegar somente o domínio específico

domains = [god["domínio"] for god in pantheon_of_arton if god["domínio"] != "Tormenta"]

print(domains)
