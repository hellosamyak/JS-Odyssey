const pfp = document.getElementById('profilePic')
const username = document.getElementById('username')
const followers = document.getElementById('followers')
const following = document.getElementById('following')
const profile = document.getElementById('profile')
const showBtn = document.querySelector('button')
const requestUrl = 'https://api.github.com/users/hellosamyak'


showBtn.addEventListener('click', () => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', requestUrl)
  xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(this.responseText)
      // console.log(typeof data); 
      console.log(data);
      // console.log(data.login);
      pfp.src = data.avatar_url
      username.textContent = data.login
      followers.textContent = data.followers
      following.textContent = data.following
      profile.style.display = 'block'
    }
  }
  xhr.send()
})