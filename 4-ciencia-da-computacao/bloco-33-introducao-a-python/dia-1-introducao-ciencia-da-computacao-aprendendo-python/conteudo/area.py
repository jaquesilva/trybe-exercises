# Todo arquivo com extensão .py é considerado um módulo.

# Módulos são declarados utilizando snake case, ou seja, com nomes minúsculos e
# quando possuírem mais de uma palavra, devem ser separadas por underscore (_).

PI = 3.14  # PI é uma "constante" em nosso módulo


def square(side):
    '''Calculate area of square.'''
    return side * side


def rectangle(length, width):
    '''Calculate area of rectangle.'''
    return length * width


def circle(radius):
    '''Calculate area of circle.'''
    return PI * radius * radius


# Existe uma convenção de declarar valores considerados
# constantes com letras  maiúsculas, e o respeito por outros
# programadores de não alterarem aquele valor

if __name__ == "__main__":
    print("Área do quadrado:", square(10))
    print("Área do retângulo:", rectangle(2, 2))
    print("Área do círculo:", circle(3))
