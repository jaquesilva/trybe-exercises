from eletrodomestico import Eletrodomestico
from geladeira import Geladeira


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.eletrodomesticos = []

    # Permitindo a aquisição de qualquer eletrodoméstico
    def comprar_eletrodomestico(self, eletrodomestico: Eletrodomestico):
        if eletrodomestico.preco >= self.saldo_na_conta:
            self.saldo_na_conta -= eletrodomestico.preco
            self.eletrodomesticos.append(eletrodomestico)

    def __str__(self):
        return f"""
        - Nome da pessoa: {self.nome}
        - Saldo em conta: {self.saldo_na_conta}
        - Eletrodomésticos: {self.eletrodomesticos}
        """


pessoa_1 = Pessoa('Jaqueline', 2000)
# print(pessoa_1)
geladeira = Geladeira('Branca', 2000, 5000, 110, 2)
geladeira2 = Geladeira('Branca', 2000, 5000, 110, 2)
pessoa_1.comprar_eletrodomestico(geladeira)
pessoa_1.comprar_eletrodomestico(geladeira2)
print(pessoa_1)

for item in pessoa_1.eletrodomesticos:
    print(item)
