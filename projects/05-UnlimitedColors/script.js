// random hex color generating function

let randomColor = function () {
  const hex = '0123456789ABCDEF'
  let color = '#'
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color
}

// console.log(randomColor());

let intervalId
let body = document.querySelector('body')
let startBtn = document.getElementById('start')
let stopBtn = document.getElementById('stop')
let currentColor = body.style.backgroundColor

let changeBgc = function () {
  currentColor = randomColor()
  body.style.backgroundColor = currentColor
}

startBtn.addEventListener('click', function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgc, 1000)
  }
})

stopBtn.addEventListener('click', function () {
  clearInterval(intervalId)
  intervalId = null
  console.log(currentColor)
})