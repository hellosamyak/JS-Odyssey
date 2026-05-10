const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myNumsOne = myNums.map((num) => num - 2)
// console.log(myNumsOne);


// const myNumsfe = myNums.forEach((num) => {
//   console.log(num - 2)
// })

// // console.log(myNumsfe);


// chaining

const myNumsTwo = myNums
  .map((num) => num * 2)
  .map((num) => num + 2)
  .filter((num) => num > 10)

console.log(myNumsTwo)