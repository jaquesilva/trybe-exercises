// const person = { // a variável const recebe um object (person), com duas propriedades: name e lastName
//   name: 'Carol',
//   lastName: 'Santos'
// };

// // FUNÇÃO DE PRIMEIRA ORDER
// const greetingPeople = (person) => {
//   console.log(`Olá ${person.name}, como vai você?`);
// };

// greetingPeople(person);

// ==========================

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(5, console.log);

// ==========================

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(10, (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// });

// ==========================

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;