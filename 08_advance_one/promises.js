const promiseOne = new Promise(function (resolve, reject) {
  // Any async task like cryptography, network & DB calls etc
  setTimeout(function () {
    console.log('Async task completed.');
    resolve(); // directly connected with .then, if resolve method isn't called, the promise won't be consumed.
  }, 3000)
})

promiseOne.then(function () {
  console.log('Promise comsumed');
})

new Promise(function (resolve, reject) {
  // 2nd Async task
  setTimeout(function () {
    console.log('Async task 2 completed.');
    resolve()
  }, 5000)
}).then(function () {
  console.log('Resolved async task 2.');
})

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: 'hellosamyak', email: 'hellosamyak@example.com' })
  }, 2000)
})

promiseThree.then(function (user) {
  console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true
    if (!error) {
      resolve({ username: 'anonymous', password: '1234667' })
    } else {
      reject('ERROR: data not found')
    }
  }, 1500)
})

promiseFour.then((user) => {
  console.log(user);
  return user.username
}).then((username) => {
  console.log(username);
}).catch((err) => {
  console.log(err);
}).finally(() => {
  console.log('The promise if either resolved or rejected');
})

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let str = ''
    if (str) {
      resolve(`The string is ${str}`)
    } else {
      reject('FATAL: Bad response')
    }
  })
})

// async await

async function consumePromiseFive() {
  try {
    const response = await promiseFive
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive()

async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
  } catch (error) {
    console.log("ERROR:", error);
  }
}

getUsers()

fetch('https://api.github.com/users/hellosamyak')
  .then((response) => { return response.json() })
  .then((data) => console.log(data))
  .catch((err) => console.log(error))