
const categories = document.querySelectorAll('.item')
console.log('Number of categories:',categories.length)
const animalEl = document.querySelector('.item')
console.log('Category:',animalEl.firstElementChild.textContent)
console.log('Elements:',animalEl.firstElementChild.nextElementSibling.childElementCount)


const productsEl = document.querySelector('.item')
console.log('Category:',productsEl.nextElementSibling.firstElementChild.textContent)
console.log('Elements:',productsEl.nextElementSibling.firstElementChild.nextElementSibling.childElementCount)

const technologiesEl = document.querySelector('.item')
console.log('Category:',technologiesEl.nextElementSibling.nextElementSibling.firstElementChild.textContent)
console.log('Elements:',technologiesEl.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.childElementCount)