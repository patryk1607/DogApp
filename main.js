const btn = document.querySelector('.quest')
const img = document.querySelector('img')


const URL = 'https://dog.ceo/api/breeds/image/random'


btn.addEventListener('click', () => {
fetch(URL)
.then(res => res.json())
.then(data => img.setAttribute('src', data.message))
.catch(error => console.console.error(error))
})


