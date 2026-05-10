const form = document.querySelector('form')

// declare the constants inside the eventlistener, declaring here would give empty

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const height = Number(document.querySelector('#height').value)
  const weight = Number(document.querySelector('#weight').value)
  const result = document.querySelector('.result')
  const underweight = document.querySelector('#underweight')
  const normal = document.querySelector('#normal')
  const overweight = document.querySelector('#overweight')
  const obese = document.querySelector('#obese')

    // Clear previous category highlight before showing the new one.
    ;[underweight, normal, overweight, obese].forEach((item) => {
      item.style.backgroundColor = ''
    })

  if (height <= 0 || Number.isNaN(height)) {
    result.innerHTML = 'Enter a valid height!'
  } else if (weight <= 0 || Number.isNaN(weight)) {
    result.innerHTML = 'Enter a valid weight!'
  } else {
    const bmi = weight / ((height * height) / 10000)
    result.innerHTML = `<span>${bmi.toFixed(2)}</span>`

    if (bmi < 18.5) {
      underweight.style.backgroundColor = 'red'
    } else if (bmi >= 18.5 && bmi < 25) {
      normal.style.backgroundColor = 'green'
    } else if (bmi >= 25 && bmi < 30) {
      overweight.style.backgroundColor = 'red'
    } else {
      obese.style.backgroundColor = 'red'
    }
  }
})