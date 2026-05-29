class User {
  constructor(username, password) {
    this.username = username
    this.password = password
  }

  // Getters & setters go hand in hand! it's not possible to just define either getter or setter without defining the other one.

  // Also, using the same var password (say) in both constructor & getter-setters causes an 'stack limit exceeded' err. One has to use another var for the same ("_password" for "password" here).

  get username() {
    return `${this._username}`
  }

  set username(value) {
    this._username = value
  }

  get password() {
    return `@ussie${this._password}encrypt`
  }

  set password(value) { // setters are never returned
    this._password = value
  }
}

const qantas = new User('qantas', 'ausponsor')

console.log(qantas.username)
console.log(qantas.password)