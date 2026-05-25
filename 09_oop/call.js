function createUsername(username) {
  this.username = username
}

function createUser(username, email, password) {
  createUsername.call(this, username) // using call method & 'this' keyword here to hold the context of the prev method, even when it goes out of the execution context
  this.email = email
  this.password = password
}

const blacked = new createUser('blacked', 'blckd@racism.com', '@3#4')
console.log(blacked)