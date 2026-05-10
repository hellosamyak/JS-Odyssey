// const someNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const numStore = someNums.forEach((nums) => {
//   // console.log(nums)
//   return nums
// })

// console.log(numStore)

// Bottom line is: forEach loop cannot return anything**

// filter

const someNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const printNums = someNums.filter((nums) => {
//   return nums < 2 // explicit return as we opened scope {}
// })

const printNums = someNums.filter((nums) => nums > 2) // implicit return of an arrow function

// console.log(printNums)

// using forEach

const printNumsOne = []

someNums.forEach((num) => {
  if (num > 2) {
    printNumsOne.push(num)
  }
})

// console.log("using forEach", printNumsOne)


const books = [
  { title: "Midnight Ledger", author: "Ava Quinn", genre: "Thriller", publish: 2018, edition: 2020 },
  { title: "Echoes of Glass", author: "Mason Reed", genre: "Mystery", publish: 2021, edition: 2023 },
  { title: "Starlit Harbor", author: "Lila Hart", genre: "Romance", publish: 2012, edition: 2015 },
  { title: "Crimson Archive", author: "Noah Vale", genre: "Fantasy", publish: 2009, edition: 2011 },
  { title: "Paper Planets", author: "Iris Cole", genre: "Sci-Fi", publish: 2016, edition: 2019 },
  { title: "Whisper Circuit", author: "Ethan Gray", genre: "Sci-Fi", publish: 2024, edition: 2025 },
  { title: "Gilded Transit", author: "Clara Finch", genre: "Historical", publish: 1998, edition: 2002 },
  { title: "Silent Meridian", author: "Owen Price", genre: "Fantasy", publish: 2004, edition: 2007 },
  { title: "Clockwork Orchard", author: "Nora Blake", genre: "Mystery", publish: 2010, edition: 2014 },
  { title: "Neon Atlas", author: "Rhea Stone", genre: "Non-Fiction", publish: 2022, edition: 2024 }
]

let selectedBooks = books.filter((book) => { return book.genre === 'Mystery' && book.edition != 2014 })

selectedBooks = books.filter((book) => {
  return book.publish > 2000 && book.edition >= 2020
})

console.log(selectedBooks)






//  practice 

const randomArr = [
  { id: 1, name: "Alpha", color: "red" },
  { id: 2, name: "Beta", color: "blue" },
  { id: 3, name: "Gamma", color: "green" }
]


let mySelections = randomArr.filter((i) => i.id <= 2 && i.color != 'black' && i.name != 'Gamma') // used implicit return of an arrow fn as didn't open the scope ({})

console.log(mySelections)