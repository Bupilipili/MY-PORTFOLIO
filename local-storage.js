const UserName = document.querySelector('.name-input');
const UserEmail = document.querySelector('.email-input');
const UserMessage = document.querySelector('.message-input');
// Declare an data object to store userinput
let formData = {
    FullName: '',
    Email: '',
    Message: '',
};
// Declare the userinput as a data and match it with dataobject
const formUserInput = (data) => {
    UserName.value = data.FullName;
    UserEmail.value = data.Email;
    UserMessage.value = data.Message;
};
// Store all user input one by one
if (localStorage.getItem('formData')) {
    formData = JSON.parse(localStorage.getItem('formData'));
    formUserInput(formData);
  }
  UserName.addEventListener('input', () => {
    formData.FullName = UserName.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });
  
  UserEmail.addEventListener('input', () => {
    formData.Email = UserEmail.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });
  
  UserMessage.addEventListener('input', () => {
    formData.Message = UserMessage.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });