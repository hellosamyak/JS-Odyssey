let a = 10 // global scope

if (true) {
  let a = 1
  const b = 2
  // console.log("INNER:", a);

  // var c = 3 // doesn't obey block scope regulations, that's why not used extensively.
}

// console.log("a =", a)
// console.log(b)
// console.log(c)

// ++++++++++++++++

function one() {
  const username = "samyak"

  function two() {
    const lang = "js"
    console.log(username + lang);
  }

  // console.log(lang); // can't be accessed outside (its scope)

  two()

}

// one()

// more...

if (true) {
  const username = "hellosamyak"
  if (username === "hellosamyak") {
    const web = " yt"
    console.log(username + web);
  }
  // console.log(web);
}

// console.log(username);


// +++++++++++++++++ interesting +++++++++++++++

// console.log(addOne(99))
function addOne(num) {
  return num + 1
}


// addTwo(16) // throws an err: "Cannot access 'addTwo' before initialization"

const addTwo = function (num) { // declaring function this way is called as an 'expression'
  return num + 2
}
console.log(addTwo(29))