const form = document.querySelector('.form');
const inputEmail = document.querySelector('.email-input');
const errorMessage = document.querySelector('.error-message');
form.addEventListener('submit', function(event) {
  if (inputEmail.value === inputEmail.value.toLowerCase()) {
    form.submit();
  } else {
    event.preventDefault();
    errorMessage.style.display = 'block';
  }
});
