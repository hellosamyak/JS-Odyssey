function User(email) {
  this._email = email

  Object.defineProperty(this, 'email', {
    get: function () {
      return `${this._email.toUpperCase()}`
    },
    set: function (value) {
      this._email = value
    }
  })
}

const newUser = new User('venk')
console.log(newUser.email)