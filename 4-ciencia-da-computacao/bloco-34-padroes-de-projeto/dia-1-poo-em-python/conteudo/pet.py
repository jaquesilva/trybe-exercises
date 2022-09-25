class Pet():
    def __init__(self, nome, especie, idade, humano):
        self.name = nome  # o que entrar pelo parâmetro nome, será salvo no
        # atributo nome e assim sucessivamente
        self.especie = especie
        self.idade = idade
        self.humano = humano

    # dunder method
    # Uma forma de substituir o print padrão pelo retorno que eu desejar
    def __str__(self):
        return f"""
        - Espécie do pet: {self.especie}
        - Nome do pet: {self.name}
        - Idade do pet: {self.idade}
        - Pessoa responsável: {self.humano}
        """


thor = Pet('Thor', 'Gato', 5, 'Felps')
print(thor)
