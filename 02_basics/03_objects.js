// object declaration is of 2 types => literal & constructor

// object constructor (SINGLETON)
// Object.create

// *when object is declared as literal, then it is not singleton! 

const mySym = Symbol('key1')

const user = {
  name: 'Samyak',
  "full name": 'Samyak Jain',
  age: 20,
  location: 'Jabalpur',
  email: 'samyak@sj.com',
  isMale: true,
  GPA: 7.98,
  [mySym]: "key2" // used the declared symbol as an object key
}

// console.log(user.age);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(user[mySym]);
console.log(Object.getOwnPropertySymbols(user)); // [ Symbol(key1) ]


// user.email = 'samyak@js.com'
// console.log(user);

// Object.freeze(user) // to freeze any upcoming changes to an object
// user.email = 'samyak@jsc.com'
// console.log(user);

user.greeting = function () {
  console.log('Hello user!');
}

// user.message = () => {
//   console.log(`Hey user, ${this.email}`); // to use this keyword the desired way, declare the function in conventional manner.
// }

user.message = function () {
  console.log(`Hey user, ${this.email}`);
}
user.greeting()
user.message()
