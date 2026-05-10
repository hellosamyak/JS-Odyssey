// for loop

// basic for loop
for (let i = 78; i < 95; i++) {
  const elem = i;
  // console.log(elem)
}

for (let i = 0; i < 7; i++) {
  const element = i;
  if (element == 5) {
    // console.log('Five');
  }
  // console.log(element)
}

for (let i = 2; i <= 3; i++) {
  // console.log(`Table of ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} * ${j} = ${i * j}`)
  }
}

let GreatTestSquad = ['Murali Vijay', 'Shikhar Dhawan', 'Cheteshwar Pujara', 'Virat Kohli (C)', 'Ajinkya Rahane (VC)', 'Ravichandran Ashwin', 'Rishabh Pant (WK)', 'Ravindra Jadeja', 'Mohd. Shami', 'Mohd. Siraj', 'Jasprit Bumrah', 'Ishant Sharma', 'Bhuvneshwar Kumar', 'Umesh Yadav', 'Rohit Sharma (third opener)', 'Wriddhiman Saha (backup WK)']
// console.log("Indian Test Squad:")

for (let i = 0; i < GreatTestSquad.length; i++) {
  const element = GreatTestSquad[i];
  // console.log(element)
}

// break and continue

for (let i = 1; i <= 31; i++) {
  if (i == 12) {
    // console.log(`Date is: ${i} => Happy b'dayyyyyy <3`)
    break;
  }
  // console.log(`Date is: ${i}`);
}

console.log('New');

for (let i = 1; i < 5; i++) {
  if (i == 2) {
    console.log(`2 detected`)
    continue;
  }
  console.log(`Value is: ${i}`);
}

// practice

// for (let i = 18; i <= 18; i++) {
//   console.log(`Table of ${i}`)
//   for (let j = 0; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`)
//   }
// }