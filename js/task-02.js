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
  const item  = document.createElement('li')
  item .classList.add('item')
  item .textContent = option
  return item 
})

console.dir(element)
list.append(...element)