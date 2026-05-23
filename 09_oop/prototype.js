let myName = '         samyak'
// console.log(myName.length);

// objective: to get a trueLength() method that tells the actual length without empty spaces
// myName.trueLength()

let champs = ['CSK', 'MI', 'RCB']

let champStrength = {
  CSK: 'MS Dhoni',
  MI: 'Rohit Sharma',
  RCB: 'Virat Kohli',

  RCBPower: function () {
    console.log(`The power of RCB is ${this.RCB}`)
  }
}

Object.prototype.captain = function () { // goes on for all functions, arrays etc. but vice-versa is not true
  console.log(`Captain is present in all teams.`)
}

// champStrength.captain()
// champs.captain()

Array.prototype.testpro = function () {
  console.log(`A test prototype for array`);
}

// champStrength.testpro() // err
// champs.testpro() // works

// Prototypal inheritance

const user = {
  username: 'code4u'
}

const teacher = {
  teach: true
}

const teacherSupport = {
  isAvail: false
}

const teamMembers = {
  fulltime: true,
  __proto__: teacherSupport // outdated syntax (__proto__)
}

const studentSupport = {
  doSupport: true
}

// teacher.__proto__ = user

// Modern syntax: (same BTS, but easier syntax)
Object.setPrototypeOf(user, teacher)



// creating a trueLength() method for strings

String.prototype.trueLength = function () {
  console.log(`${this}`)
  console.log(`The true length of the string is: ${this.trim().length}`)
}

let checkStr = '1234getready'
checkStr.trueLength()