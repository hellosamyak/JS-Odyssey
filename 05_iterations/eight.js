// reduce method *very interesting for shopping carts etc.

const posNums = [1, 2, 3, 4, 5]

// const accuVal = posNums.reduce((accumulator, currentVal) => {
//   // console.log(`accumulator: ${accumulator}, current value: ${currentVal}`)
//   return accumulator + currentVal
// }, 3)

const accuVal = posNums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

// console.log(accuVal)

// a real world shopping cart like scenario

const shoppingCart = [
  {
    courseName: 'DSA',
    price: 9999
  },
  {
    courseName: 'WebDev',
    price: 5099
  },
  {
    courseName: 'MobileDev',
    price: 20099
  },
  {
    courseName: 'DevOps',
    price: 1999
  },
  {
    courseName: 'Cybersecurity',
    price: 9099
  },
  {
    courseName: 'AI',
    price: 50099
  }
]

// console.log(shoppingCart);

const courseDetail = shoppingCart.map((name) => (`course name = ${name.courseName}, course price = ${name.price}`))

console.log(courseDetail)

const shoppingCartVal = shoppingCart.reduce((acc, currVal) => (acc + currVal.price), 0)

console.log("Amount to be paid:", "₹", shoppingCartVal, "+ GST*")

// practice

let hundreds = [100, 200, 300, 400, 500, 600]

const sumofHundreds = hundreds.reduce((i, j) => i + j, 0)

// console.log(sumofHundreds);
