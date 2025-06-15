const container = document.querySelector('.container')
const selectBox = document.querySelector('.selectBox')
const ul = document.querySelector('.opations')
const searchInput = document.querySelector('input')

let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
    "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
    "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
    "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
    "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];


function updateCountries(selectedCountry) {
    countries.forEach(countary => {

        let isSelected = countary == selectedCountry ? 'selected' : ''

        let li = `<li onclick="updateName(this)" class="${isSelected}">${countary}</li>`;
        ul.insertAdjacentHTML('beforeend', li)
    })
}

updateCountries();

function updateName(selectLi) {
    ul.innerHTML = ``
    updateCountries(selectLi.innerHTML)
    searchInput.value = ''
    container.classList.toggle('active')
    selectBox.firstElementChild.innerHTML = selectLi.innerHTML;
}

searchInput.addEventListener('keyup', () => {
    let arr = []
    let searchValue = searchInput.value.toLowerCase();

    arr = countries.filter(country => {
        return country.toLowerCase().startsWith(searchValue)
    }).map(country => `<li onclick="updateName(this)">${country}</li>`).join('')
    ul.innerHTML = arr ? arr : `<p>Oops! Country not found</p>`
})

selectBox.addEventListener('click', () => {
    container.classList.toggle('active')
})