class User {
  constructor(username) {
    this.username = username
  }
  logUser() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username) // super keyword saves from that call method**, as this is class syntax
    this.email = email
    this.password = password
  }
  addCourse() {
    console.log(`A new course added by ${this.username}`)
  }
}

const HiteshCac = new Teacher('hiteshcac', 'cacwhit@ch.in', 'code3x')
HiteshCac.addCourse()
HiteshCac.logUser()

const ris = new User('rizz')
ris.logUser()

console.log(ris instanceof Teacher); // false
