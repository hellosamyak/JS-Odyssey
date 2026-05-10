const userEmail = 'samyak@jainai'
if (userEmail) {
  // console.log(`The email of the user is "${userEmail}"`);
} else {
  // console.log('Enter your email first!');
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], function(){}

const emptyArray = []
if (emptyArray.length === 0) {
  // console.log('The array is empty');
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
  // console.log('Received an empty object')
}

// console.log(false == '');

// Nullish Coalescing Operator (??): null, undefined

let val1, val2, val3;

val1 = 5 ?? 99
console.log("val1 =", val1);

val2 = null ?? 89
console.log("val2 =", val2);

val3 = undefined ?? 79 ?? 25
console.log("val3 =", val3);

// Ternary operator (?)

const username = 'hellosamyak'
username == 'hellosamyak' ? console.log('username matched') : console.log('username not matched');