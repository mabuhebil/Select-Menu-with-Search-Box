const container = document.querySelector('.container')
const selectBox = document.querySelector('.selectBox')


selectBox.addEventListener('click', () => {
    container.classList.toggle('active')
})