const inputEl = document.querySelector('#font-size-control')
inputEl.addEventListener('input', inputTargetFormInput );
const fonSize = document.querySelector('#text')
function inputTargetFormInput () {
    fonSize.style.fontSize = `${inputEl.value}px`
    
   
    }