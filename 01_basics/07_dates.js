// Dates in JS *date is an object in JS

let myDate = new Date()

// console.table({
//   "Original": myDate,
//   "to String": myDate.toString(),
//   "to Date String": myDate.toDateString(),
//   "to Time String": myDate.toTimeString(),
//   "to Locale String": myDate.toLocaleString(),
//   "to Locale Date String": myDate.toLocaleDateString(),
//   "to Locale Time String": myDate.toLocaleTimeString(),
//   "to ISO String": myDate.toISOString(),
//   "to JSON": myDate.toJSON(),
//   "to UTC String": myDate.toUTCString(),
//   "get Time": myDate.getTime(),
//   "value Of": myDate.valueOf(),
//   "get Full Year": myDate.getFullYear(),
//   "get Month": myDate.getMonth(),
//   "get Date": myDate.getDate(),
//   "get Day": myDate.getDay(),
//   "get Hours": myDate.getHours(),
//   "get Minutes": myDate.getMinutes(),
//   "get Seconds": myDate.getSeconds(),
//   "get Milliseconds": myDate.getMilliseconds()
// })

let newDate = new Date(2080, 11, 25)
// console.log(newDate.toString());

let dateOne = new Date("2026-01-10") //YYMMDD
// console.log(dateOne.toString());

let timeStampOne = Date.now() // miliseconds from 1st Jan 1970 to now
// console.log(timeStampOne);
// console.log(dateOne.getTime())

// console.log(Math.round((Date.now() / 1000)))

let myNewDate = new Date()
console.log(myNewDate.toLocaleString('default', {
  weekday: 'long'
}));
