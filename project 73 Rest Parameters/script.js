function sum(...args) {
  return args.reduce((total, current) => total + current, 0);
}
console.log(sum(1, 2));              // Output: 3
console.log(sum(1, 2, 3, 4, 5));      // Output: 15
