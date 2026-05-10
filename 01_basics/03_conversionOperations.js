let score = "33abc"

let valInNumber = Number(score)
// console.log(typeof score);
// console.log(typeof valInNumber);
// console.log(valInNumber);


// console.log(typeof NaN); *number

// "33" => 33
// "33csg" => NaN
// true => 1 & v.v.

let isLoggedIn = 1

let valInBoolean = Boolean(isLoggedIn)
// console.log(valInBoolean);

// 1 => true & v.v.
// "" => false
// "some val" => true

let num = 24
let stringNum = String(num)
// console.log(stringNum);
// console.log(typeof stringNum);

// ******************** Operations *********************

let value = 3
let negValue = -value

// console.log(negValue);

// console.log("2" + 2) // 22
// console.log(2 + "2"); // 22
// console.log(2 + 2 + "2"); // 42 *string afterwards
// console.log("2" + 2 + 2); // 222 *string first

// console.log(true);
// console.log(+""); // rubbish

let counter = 100
++counter // prefix
let c2 = (1 + counter)
console.log(counter, c2); // 101, 102

let newCounter = 100
counter++ // postfix
let newC2 = (1 + newCounter)
console.log(newCounter, newC2); // 100, 101 
