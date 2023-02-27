const inputEl = document.querySelector('#name-input')
const spanEl = document.querySelector('#name-output')
console.log(inputEl)
inputEl.addEventListener('input', incrementTargetFormInput);

function incrementTargetFormInput(event) {
  const inputValue = event.currentTarget.value;
  if (inputValue === "") {
    spanEl.textContent = "Anonymous";
  } else {
    spanEl.textContent = inputValue;
  }
}
