const user = {
  username: 'samyak',
  age: 20,

  welcomeMessage: function () {
    console.log(`welcome, ${this.username}!`)
    console.log(this); // talks about current context

  }
}

// user.welcomeMessage()
user.username = 'heysam'
// user.welcomeMessage()

// console.log(this); // logs an empty object as nothing is declared in the global scope of this file yet; doesn't log an empty object in the browser as there are so many things taking place there! *interview

// function newFn() { // this keyword is not working the same way as it was working inside the object
//   let me = 'samyak'
//   console.log(this.me); // undefined
// }
// newFn()

const newFn = function () {
  let me = 'samyak'
  console.log('conventional:', this); // logs some object with some values (related to node env)
}
// newFn()

// +++++++ arrow function ++++++++

const myFn = () => {
  let myName = 'samyak'
  console.log('arrow', this); // logs an empty object
}
// myFn()

// const logVal = (num1, num2) => { // basic arrow function, *explicit return
//   return num1 * num2
// }

const logVal = (val1, val2) => val1 / val2 // implicit return (without using return keyword)

const newLog = (num1, num2) => (num1 + num2) // return keyword not used *implicit return

console.log(logVal(90, 45))
console.log(newLog(88, 58));
