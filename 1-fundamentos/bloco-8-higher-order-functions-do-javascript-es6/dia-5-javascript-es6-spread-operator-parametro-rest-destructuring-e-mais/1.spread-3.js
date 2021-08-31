const assert = require('assert');

const point = [1.0, 2.2, -6.6, 8];
const otherPoint = [0.1, 3.5, -99.6];

printPointCoordinates = (x, y, z) => `Point coordinates are x = ${x}, y = ${y} and z = ${z}`;
//            parâmetro de declaração da função
console.log(printPointCoordinates(...point)); //SPREAD sendo usado como parâmetro da função, quando a função é chamada
// saída: Point coordinates are x = 1, y = 2.2 and z = -6.6


