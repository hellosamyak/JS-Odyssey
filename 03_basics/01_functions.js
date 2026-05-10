function sayMyName() {
  // console.log('S');
  // console.log('A');
  // console.log('M');
  // console.log('Y');
  // console.log('A');
  // console.log('K');
}

// sayMyName()

function addNums(num1, num2) { // parameters
  // console.log("O/P =", num1 + num2);
}

const result = addNums(89, 60) // arguments
// console.log("Result =", result); // undefined as the function declared above doesn't return anything, just logs it to the console.

// another way

function addThreeNums(number1, number2, number3) {
  let result = number1 + number2 + number3;
  return result;
  console.log("Samyak"); // code unreachable as nothing after a return statement is executed inside a function.
}

const output = addThreeNums(59, 58, 888)
// console.log("Output =", output);


//optimal way

function subTwoNums(n1, n2, n3) {
  return n2 - n1 + n3;
}

const finalVal = subTwoNums(88, 98, -1)
// console.log(finalVal);


// more ... *very interesting

function loginUserMessage(username) { // setting a default value (sam), overwritten if passed an argument.
  // if (username == undefined) {
  //   console.log("Please enter the username!");
  //   return
  // }

  // other way
  if (!username) { // ! means not
    console.log("First enter the username!");
    return
  }
  return `${username} just logged in`
}

// console.log(loginUserMessage('heysam')) // nothing is printed on the console, without actually writing console.log even after calling the function, as the function returns something, doesn't logs! (see the function above)

// shopping cart like situation

function calculateCartPrice(...num1) { // rest operator
  return num1
}

console.log(calculateCartPrice(1, 2, 5))

function calculatePrice(val1, val2, ...num1) { // rest operator
  return `val1 = ${val1}, val2 = ${val2}, num1 = ${num1}`
}

console.log(calculatePrice(1, 2, 5, 4))

// more ...

// handling objects inside a function

const userDetails = {
  username: "hellosamyak",
  isLoggedIn: true,
  purchasingPower: "$5/day"
}

function handleObject(anyobject) {
  if (!anyobject.isLoggedIn) {
    console.log(`The username is ${anyobject.username}, not logged in & their purchasing power is ${anyobject.purchasingPower}.`);
    return;
  }

  console.log(`The username is ${anyobject.username}, logged in & their purchasing power is ${anyobject.purchasingPower}.`);
}

handleObject(userDetails)

handleObject({
  username: "heysam",
  purchasingPower: "$2/day"
})

// handling arrays inside a function

const players = ["Virat Kohli", "Rohit Sharma", "Shreyas Iyer"]

function returnFirstVal(anyarray) {
  return anyarray[0]
}

console.log("The modern day master is", returnFirstVal(players))

console.log(returnFirstVal(["MS Dhoni", "Ricky Ponting"]), "is known as Captain Cool❄️  in the world of cricket.");
