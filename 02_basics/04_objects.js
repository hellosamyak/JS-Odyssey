const newObj = {
  message: 'some message',
  notifications: {
    notificationsFromApps: {
      whatsapp: 15,
      instagram: 99,
      linkedIn: 46
    }
  }
}
// console.log(newObj.notifications.notificationsFromApps);


const obj1 = { 1: 'a', 2: 'b' }
const obj2 = { 3: 'a', 4: 'b' }

const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2) // new method
// console.log(obj4);

const users = [
  {
    id: 'Sj@samyak.in',
    password: 'xyz@W123'
  },
  {
    id: 'Vk@samyak.in',
    password: 'xy@W123'
  },
  {
    id: 'Ms@samyak.in',
    password: 'yz@W123'
  }
]

// console.log(users[2].password);

const VK = {
  runs: 28000,
  strikeRate: 100,
  nickName: 'KING',
}

// console.log(Object.keys(VK));
// console.log(Object.values(VK));
// console.log(Object.entries(VK));

// console.log(VK.hasOwnProperty('irresponsible'));

// destructuring an object

const cric = {
  governingBody: 'ICC',
  webURL: 'icc.com',
  isBest: true
}

const { governingBody: council } = cric
// console.log(governingBody);
console.log(council);
console.log(cric.council) // undefined *use governingBody here.