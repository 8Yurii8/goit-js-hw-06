const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
const element = ingredients.map (option => {
  const wel = document.createElement('li')
  wel.classList.add('item')
  wel.textContent = option
  return wel
})

console.dir(element)
list.append(...element)