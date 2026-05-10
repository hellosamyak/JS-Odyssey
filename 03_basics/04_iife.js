// Immediately Invoked Function Expressions (IIFE) *to prevent pollution from global scope variables.

// syntax:()()

(function printFileName() { // named iife
  console.log('Immediately Invoked Function Expressions');
})();

((name) => { // unnamed iife
  console.log(`${name}'s DB connected!`);
})('Samyak');