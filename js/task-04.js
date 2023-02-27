const value = document.querySelector('#value')
const valueDown = document.querySelector('button[data-action="decrement"]')
const valueUp = document.querySelector('button[data-action="increment"]')
// console.log(valueUp.textContent)

let counterValue = 0

function decrementTargetButtonClick () {
    counterValue -= 1;
    value.textContent = counterValue    }

function incrementTargetButtonClick () {
    counterValue += 1;
    value.textContent = counterValue}

valueDown.addEventListener('click', decrementTargetButtonClick)
valueUp.addEventListener('click', incrementTargetButtonClick)


// Цікавіша альтернатива!!!!
   // function decrementTargetButtonClick () {
//     value.textContent = Number.parseInt(value.textContent) - 1;
// }

// function incrementTargetButtonClick () {
//     value.textContent = Number.parseInt(value.textContent) + 1;
// }
// Цікавіша альтернатива!!!!