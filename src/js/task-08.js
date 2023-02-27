const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const emailInput = formEl.elements.email;
  const passwordInput = formEl.elements.password;

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('всі поля повинні бути заповнені.');
    return;
  }

  else{

    const result = {
        email: emailInput.value,
        password: passwordInput.value
      };
    console.log('email:',result.email);
    console.log('password:',result.password);
  formEl.reset();
}
}