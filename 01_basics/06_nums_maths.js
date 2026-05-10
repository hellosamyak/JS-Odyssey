let score = 1000
// console.log(score);

let balance = new Number(108.49225544)
// // console.log(balance);

// console.log(balance.toString().length);

console.log(balance.toExponential())
// console.log(balance.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++ Maths in JS ++++++++++++++++

console.log(Math.round(Math.random() * 10));

const min = 85
const max = 90

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // + 1 to avoid the 0 case