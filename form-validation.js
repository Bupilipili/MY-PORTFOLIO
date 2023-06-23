const form = document.querySelector('.form');
const inputEmail = document.querySelector('.email-input');
const errorMessage = document.querySelector('.error-message');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (inputEmail.value === inputEmail.value.toLowerCase()) {
    form.submit();
  } else {
    errorMessage.style.display = 'block';
    errorMessage.style.height = '30px';
    errorMessage.style.width = 'fit-content';
    errorMessage.style.background = '#FFD600';
    errorMessage.style.borderRadius = '5px';
    errorMessage.style.alignSelf = 'center';
    errorMessage.style.padding = '6px';
  }
});
