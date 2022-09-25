from eletrodomestico import Eletrodomestico


class Geladeira(Eletrodomestico):
    def __init__(self, cor, potencia, preco, voltagem, quantidade_de_portas=1):
        super().__init__(cor, potencia, preco, voltagem)
        # sobrescrita do método da classe mãe
        self.quantidade_de_portas = quantidade_de_portas

    def __repr__(self):
        return f"""
        - Geladeira
        - Cor: {self.cor}
        - Potência: {self.potencia}
        - Preço: {self.preco}
        - Voltagem: {self.voltagem}
        - Quantidade de portas: {self.quantidade_de_portas}
        """
