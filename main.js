const input = document.querySelector('.search')
const list = document.querySelectorAll('li')


const searchEngine = e => {

const text = e.target.value.toLowerCase()
console.log(`text ${text}`);

list.forEach(el =>{
    const task = el.textContent;

    if(task.toLowerCase().indexOf(text) !== -1){
        el.style.display = 'block'
    }else {
        el.style.display = 'none'
    }
})
}
input.addEventListener('keyup', searchEngine)

