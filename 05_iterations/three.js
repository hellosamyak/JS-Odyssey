// for of 

let myArr = ["Virat", "MS", "Rohit", "Kane", "Steve", "Joe", "Rahul", "Rinku"] // works for arrays
for (const index of myArr) {
  // console.log(index)
}

let hello = 'Hello World' // works for strings
for (const hell of hello) {
  // console.log(`The char is ${hell}`)
}

let myName = 'samyak'
for (const val of myName) {
  // console.log(val)
}

// Maps *an object that holds key-value pairs & remembers the original insertion order of the keys

const countryCode = new Map()
countryCode.set('IN', 'India')
countryCode.set('USA', 'United States of America')
countryCode.set('FR', 'France')
countryCode.set('UK', 'United Kingdom')
countryCode.set('EU', 'European Union')
// console.log(countryCode)

for (const [key, value] of countryCode) {
  // console.log(key, ':', value)
  // console.log(key)
  // console.log(value)
}

const myObject = {
  'username': 'hellosamyak',
  'isLoggedIn': 'true',
  'domain': 'javascript'
}

// for (const key of myObject) {
//   // console.log(key); // object is not iterable with for-of loops
// }

let cricBrains = ['Ashwin', 'Ravi Shastri', 'Fleming', 'Dhoni']
for (const brains of cricBrains) {
  // console.log(brains);
}

let DRS = 'Decision Review System'
for (const drs of DRS) {
  // console.log(drs);
}