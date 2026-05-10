const bowlers = ["woakes", "jordan", "broad"]
const batters = ["root", "cook", "gary"]

// bowlers.push(batters) // push method adds new elems to the existing array, doesn't return a new array
// console.log(bowlers);

const engTeam = bowlers.concat(batters) // concat method returns a new array with concatenated elems

// console.log(engTeam);

// Spread operator ... *glass dropped & it spreads

const menInBlue = ['VK', 'RS', 'MSD']
const womenInBlue = ['SM', 'HK', 'JR']

const blues = [...menInBlue, ...womenInBlue]
console.log(`Blues = ${blues}`);

// flat method

const imag = [1, 2, 3, [4, 5], 6, [7, [8, 9]]]
const real = imag.flat(2)
console.log(real)

// 
console.log(Array.isArray([1, 2, 3]));
console.log(Array.from('Samyak'));
console.log(Array.from({ name: 'samyak', age: 20 })); // interesting as array can't be built from object because of its not-iterable nature.

let one = 1
let two = 2
let three = 3

console.log(Array.of(one, two, three));

