const inputEl = document.querySelector('#validation-input')
const dataLength = +inputEl.getAttribute('data-length');
inputEl.addEventListener('blur', blurTargetFormInput);



function blurTargetFormInput () {
const isValid = inputEl.value.length === dataLength;
inputEl.classList.toggle('valid', isValid);
inputEl.classList.toggle('invalid', !isValid);
}
