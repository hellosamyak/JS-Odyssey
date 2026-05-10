let myArray = ["ironman", "batman", "superman", "antman", "hulk"]
// console.log(myArray);
// console.log(myArray.toString());


// Array methods

myArray.push(8)
// console.log(myArray);
myArray.pop()
// console.log(myArray);

const newArray = myArray.join() // converts the array to string

// console.log(newArray); // ironman, batman, superman, antman, hulk
// console.log(typeof newArray); // string

// slice & splice *very important

console.log("Original:", myArray);


console.log(myArray.slice(2, 4)); // returns a section of an array, final value not included
console.log("The array after Slice looks like:", myArray); // doesn't manipulate the original array

console.log(myArray.splice(2, 4)) // returns a section of an array, final value also included
console.log("The array after Splice looks like:", myArray); // makes changes to the new array as well
