const array = ['Ana', 'Joana', 'Alberto', 'Joaquim', 'Luiza'];

console.log(array);
// saída: [ 'Ana', 'Joana', 'Alberto', 'Joaquim', 'Luiza' ]

// ==================================================================================

// IMPRIMIR CADA ELEMENTO DO ARRAY INDIVIDUALMENTE

// console.log(array[0], array[1], array[2], array[3], array[4]); Não é escalável

console.log(...array); // Os três pontos (...) é o SPREAD - sendo usado pra imprimir um único array
// saída: Ana Joana Alberto Joaquim Luiza