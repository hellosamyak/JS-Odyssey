// Primitive datatypes (7) => string, number, null, undefined, symbol, big int, boolean

const id = Symbol('abc')
const anotherId = Symbol('abc')

// console.log(id === anotherId); // not equal as every Symbol('abc') call creates a new unique val.

// Reference (non primitive) => arrays, objects*, functions

const heroes = ['superman', 'batman', 'spiderman'] // typeof array = object

let newObj = {
  name: 'samyak',
  age: 20
}

const func = function () {
  console.log('hello samyak');
}

// console.log(typeof heroes, typeof newObj, typeof func);

// +++++++++++++++ Memory in JS +++++++++++++++++++++

// Stack (copy) => Primitive, Heap (ref) => Non primitive

let user = 'samyak.jain'
let newUser = user
console.log(newUser);


newUser = 'michael'
console.log(user, newUser);

let userOne = {
  email: 'xyz@yahoo',
  upi: '810@ibl',
  func: function () {
    console.log(userOne.upi)
  }
}
userOne.func();
let newUserOne = userOne

newUserOne.upi = '340@ibl'
console.log(userOne.upi, newUserOne.upi);
