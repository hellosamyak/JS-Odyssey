const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor)

const account = {
  username: 'excradious',
  password: '1@3#5%',
  isLoggedIn: false,

  getInfo: function () {
    console.log(`username is ${this.username}`)
  }
}

// console.log(Object.getOwnPropertyDescriptor(account, 'password'))

Object.defineProperty(account, 'password', {
  enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(account, 'password'))

for (let [key, value] of Object.entries(account)) {
  if (typeof value != 'function') {
    console.log(`${key}: ${value}`) // since the enumerable property of account => password is set to false (as doing so makes it non iterable) (line 17), it isn't logged on the console
  }
}