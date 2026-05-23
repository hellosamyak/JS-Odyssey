function printMe(name) {
  // console.log(name)
  return name
}

printMe.power = 5

// console.log(printMe('samyak'))
// console.log(printMe.power);
// console.log(printMe.prototype);

function createUser(username, score, age) {
  this.username = username
  this.score = score
  this.age = age
}

createUser.prototype.increment = function () {
  this.score++
  console.log(`The incremented score is ${this.score}`);

}

createUser.prototype.showAge = function () {
  console.log(`The age of ${this.username} is ${this.age}`);
}

const userOne = new createUser('matthew', 96, 56)
const userTwo = new createUser('quinton', 103, 40)

userOne.increment() // throws an err, this is where the 'new' keyword comes in to the picture. so, adding the new keyword before createUser is essential.

userTwo.showAge()

/*

Here's what happens behind the scenes when the new keyword is used:

1. A new object is created: The new keyword initiates the creation of a new JavaScript object.

2. A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

3. The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

4. The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/