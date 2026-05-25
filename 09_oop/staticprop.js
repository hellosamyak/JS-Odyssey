class User {
  constructor(username) {
    this.username = username
  }
  logMe() {
    console.log(`The username is ${this.username}`)
  }
  static createId() { // you won't want to give access to this method to every object instantiated from this class, at times. the 'static' keyword helps in doing so!
    return `123$`
  }
}

const samyak = new User('user_samyak')
// console.log(samyak.createId()) // throws an err: as the method createId is static!

class Student extends User {
  constructor(username, email) {
    super(username)
    this.email = email
  }
}

const alex = new Student('alex', 'alex@co.in')
// console.log(alex.createId()) // err: same as explained