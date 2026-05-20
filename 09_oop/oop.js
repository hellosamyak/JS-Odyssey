// Object literal

const user = {
  username: 'jainai',
  password: '123@ai',
  greet: function () {
    // console.log(`Hey ${username}`) // ERR: username not defined
    console.log(`Hey, ${this.username}!`);
    console.log(this) // current context, i.e., the current object itself here!
  }
}

// console.log(user.username)
// console.log(user.greet())

// Constructor function (*new* keyword)
// creates a new instance...

function User(username, loginCount, isLoggedIn) {
  this.username = username
  this.loginCount = loginCount
  this.isLoggedIn = isLoggedIn

  return this
}

// const userOne = User('irasmus', 5, false)
// console.log(userOne);

// const userTwo = User('harry', 10, true) // overwrites the prev values, not advised to code like this. This is where the new keyword has to be used!
// console.log(userTwo);

const userOne = new User('irasmus', 5, false)
console.log(userOne);

const userTwo = new User('harry', 10, true)
console.log(userTwo.constructor); // constructor is the function User (itself)


// read about instanceof operator in JS!