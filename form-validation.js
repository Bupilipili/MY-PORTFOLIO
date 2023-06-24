const form = document.querySelector('.form');
const inputEmail = document.querySelector('.email-input');
const errorMessage = document.querySelector('.error-message');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (inputEmail.value === inputEmail.value.toLowerCase()) {
    form.submit();
  } else {
    errorMessage.style.display = 'block';
  }
});
