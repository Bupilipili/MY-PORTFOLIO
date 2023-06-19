/*mobile-menu*/
const menu = document.querySelector('#mobileMenu');
const burgerbutton = document.querySelector('.hamburgerbutton');

burgerbutton.addEventListener('click', () => {
    /*menu.classList.toggle('showMenu');*/
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  });