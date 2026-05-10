// if statement

// operators: >, <, >=, <=, ==, !=, ===, !==

// const isLoggedIn = true

// if (isLoggedIn) {
//   console.log('Hello, World!');
// } else {
//   console.log('Not logged in.');
// }

// const score = 152
// if (score > 50) {
//   const power = 'dominate the bowlers'
//   console.log(`Batter power: ${power}`);
// } else {
//   console.log(`Batter can't score runs.`); // power out of scope
// }

// const balance = 20
// if (balance >= 1000) {
//   console.log('more than 1000');
//   console.log(balance);
// } else if (balance >= 100) {
//   console.log('more than 100');
//   console.log(balance);
// } else {
//   console.log(`Balance is: ${balance}`);
// }

const username = 'Ramu'

const loggedInFromGoogle = true
const loggedInFromGithub = false

const creditCardHolder = true
const isLoggedIn = true

if (loggedInFromGithub || loggedInFromGoogle) { // | represents 'or' operation
  const source = loggedInFromGithub ? 'github' : 'google';
  console.log(`${username} logged in! (from ${source})`);
}

if (isLoggedIn && creditCardHolder) {
  console.log(`${username} is eligible to shop!`);
}