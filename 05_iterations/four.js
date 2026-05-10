// for-in loop
// *map is not iterable using for-in loop

const newObj = {
  'js': 'javascript',
  'cpp': 'C++',
  'sol': 'solidity'
}

// for (const [key, val] in newObj) { // destructures keys of the obj, not key-value pairs
//   console.log(val) // logs s p o
// }

for (const [key] in newObj) {
  // console.log(key) // for keys of an obj
  // console.log(newObj[key]) // for values of an obj
  // console.log(`${key} is for ${newObj[key]}`)
}

const arr = [1, 2, 3]

for (const key in arr) {
  // console.log(key)
  // console.log(arr[key])
  // console.log(`${key} :- ${arr[key]}`)
}

// let leagues = ['IPL', 'BBL', 'SA20', 'The Hundred']

// for (const league in leagues) {
//   // console.log(league)
//   // console.log(leagues[league])
//   console.log(`${league} :- ${leagues[league]}`);
// }