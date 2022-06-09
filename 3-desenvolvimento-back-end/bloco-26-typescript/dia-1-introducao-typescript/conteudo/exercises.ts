// Função que recebe um nome e o imprime na tela com o texto "Olá Nome".
export function greeter(name: string) {
  return `Olá ${name}!`;
}

// Função que mostra na tela o nome da pessoa e sua idade.
export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
}

// Função que fará a adição de todos os números que estão dentro de um array. Para isso, faremos uma função add que será chamada dentro da função sumArray, que por sua vez utilizará o método reduce para realizar a soma dos valores.
export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

// Função para calcular a área de um triângulo. A fórmula para isso é multiplicar a medida da base pela medida da altura e dividir o resultado por dois.
export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

// Função para calcular a área de um quadrado. Para calcular isso, multiplicamos a medida da base pela medida da altura. Como as medidas são as mesmas, multiplicá-las é o mesmo que elevar uma delas ao quadrado.
export function square(side: number): number {
  return side ** 2;
}

// Função para calcular a área de um retângulo. A área do retângulo é dada pela multiplicação da base pela altura.
export function rectangle(base: number, height: number): number {
  return base * height;
}