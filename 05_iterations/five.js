// forEach function (array method)

const langs = ['js', 'cpp', 'py', 'rb', 'sol', 'java']

// langs.forEach(function (arg) { // callbackfn
//   console.log(arg)
// })

// langs.forEach((arg) => {
//   console.log(arg)
// })

function printMe(arg) {
  console.log(arg)
}

// langs.forEach(printMe()) // *don't call the function, pass its reference instead

// langs.forEach(printMe)

langs.forEach((arg, i, arr) => {
  console.log(arg, i, arr)
})

const myLearn = [
  {
    langName: 'Javascript',
    langCode: 'js'
  },
  {
    langName: 'Python',
    langCode: 'py'
  },
  {
    langName: 'Java',
    langCode: 'java'
  }
]

myLearn.forEach((lang) => {
  // console.log(`${lang.langCode} is the acronym for ${lang.langName}`)
})