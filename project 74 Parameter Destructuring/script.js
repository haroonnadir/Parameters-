//Object Destructuring:
const person = { firstName: 'John', lastName: 'Doe' };
// Destructuring the object properties into variables
const { firstName, lastName } = person;
console.log(firstName);  // Output: John
console.log(lastName);   // Output: Doe


//Array Destructuring:
const numbers = [1, 2, 3, 4, 5];
// Destructuring the array elements into variables
const [first, second, ...rest] = numbers;
console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]
