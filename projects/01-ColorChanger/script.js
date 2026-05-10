const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
const defaultBackground = getComputedStyle(body).background

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener('mouseenter', (e) => {
    // console.log(e);
    // console.log(e.target);

    // using if-statement

    // if (e.target.id === 'green') {
    //   body.style.background = e.target.id
    // }
    // if (e.target.id === 'orange') {
    //   body.style.background = e.target.id
    // }
    // if (e.target.id === 'blue') {
    //   body.style.background = e.target.id
    // }
    // if (e.target.id === 'violet') {
    //   body.style.background = e.target.id
    // }

    // using switch-statement

    switch (e.target.id) {
      case 'green':
        body.style.background = 'green'
        break
      case 'orange':
        body.style.background = 'orange'
        break
      case 'blue':
        body.style.background = 'blue'
        break
      case 'violet':
        body.style.background = 'violet'
        break
    }
  })

  button.addEventListener('mouseleave', () => {
    body.style.background = defaultBackground
  })
})