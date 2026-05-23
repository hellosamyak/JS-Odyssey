// ES6

// class Onboard {
//   constructor(username, email, password) {
//     this.username = username
//     this.email = email
//     this.password = password
//   }
//   encryptPassword() {
//     return `abv${this.password}123`
//   }
//   userInCaps() {
//     return `${this.username.toUpperCase()}`
//   }
// }

// const nicky = new Onboard('nickyP', 'nicks@wi.org', 'notou99t')
// console.log(nicky)
// console.log(nicky.encryptPassword())
// console.log(nicky.userInCaps())

// BEHIND THE SCENES

function Onboard(username, email, password) {
  this.username = username
  this.email = email
  this.password = password
}

Object.prototype.encryptPassword = function () {
  return `abv${this.password}123`
}

Object.prototype.userInCaps = function () {
  return `${this.username.toUpperCase()}`
}

const drerus = new Onboard('drerus', 'andre@wi.org', 'd1an2ger')
console.log(drerus.encryptPassword())
console.log(drerus.userInCaps())