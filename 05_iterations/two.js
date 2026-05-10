// while loops

let index = 10
while (index <= 15) {
  // console.log(`The new value is ${index}`)
  index = index + 5; // stopping condition
}

let newArray = ["one", "two", "three"]
let arr = 0
while (arr < newArray.length) {
  // console.log(`The value is ${newArray[arr]}`)
  arr = arr + 2 // stopping condition
}

// do-while loops

let score = 100
do {
  console.log(`The score is increased by 1 & is: ${score}`)
  score += 20 // (score = score + 20)
} while (score < 200);

// for (let sc = 100; sc < 200; sc += 20) {
//   const element = sc;
//   console.log(element)
// }

// exception
let value = 220
do {
  console.log(`The value is: ${value}`)
  value = value + 20
} while (value < 200);



// to print tables using different loops

// for (let i = 1; i <= 10; i++) {
//   console.log(`Table of ${i}`)
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`)
//   }
// }

// let i = 1
// while (i <= 10) {
//   console.log(`Table of ${i}`)
//   let j = 1
//   while (j <= 10) {
//     console.log(`${i} * ${j} = ${i * j}`)
//     j++
//   }
//   i++
// }

// let i = 2
// do {
//   console.log(`Table of ${i}`)

//   let j = 1
//   do {
//     console.log(`${i} * ${j} = ${i * j}`)
//     j++
//   } while (j <= 10)

//   i++
// } while (i <= 3)

// practice of printing tables using various loops

let i = 2
do {
  // console.log(`Table of ${i}`)

  let j = 1
  do {
    // console.log(`${i} * ${j} = ${i * j}`)
    j++
  } while (j <= 10);

  i++
} while (i <= 2);

for (let s = 3; s <= 3; s++) {
  // console.log(`Table of ${s}`)
  for (let t = 1; t <= 10; t++) {
    // console.log(`${s} * ${t} = ${s * t}`)
  }
}

let m = 5
while (m <= 5) {
  // console.log(`Table of ${m}`)
  let n = 1
  while (n <= 10) {
    // console.log(`${m} * ${n} = ${m * n}`)
    n++
  }
  m++
}