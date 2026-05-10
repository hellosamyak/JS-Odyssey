let firstName = 'Samyak'
let lastName = 'Jain'

console.log(`My name is ${firstName} ${lastName}`);

let gameName = new String('Samyak-sj') // another type to declare string

// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('k'));

const newStr = gameName.substring(5, 8)
// console.log(newStr);

const strOne = "      hbfdhyug    "
console.log(strOne);
console.log(strOne.trim());

const url = 'https://samyakdotai.in/samyak%20jain'
console.log(url)
console.log(url.replace('%20', '-'));

console.log(url.includes('dot'))
console.log(url.includes('sus'))

console.log(gameName.split('-', 1)); // the arguments of the split method are => (separator, limit)

