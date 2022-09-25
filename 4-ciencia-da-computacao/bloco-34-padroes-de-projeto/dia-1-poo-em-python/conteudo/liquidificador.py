from eletrodomestico import Eletrodomestico


class Liquidificador(Eletrodomestico):  # Exemplo de Herança
    def __init__(self, cor, potencia, preco, voltagem, ):
        # chamando o método da classe mãe
        super().__init__(cor, potencia, preco, voltagem)
