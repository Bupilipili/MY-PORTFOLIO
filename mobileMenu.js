const openMenu = document.getElementById('menu');
const closeMenu = document.getElementById('close_menu');
const navItems = document.querySelector('.mobile-nav');

openMenu.addEventListener('click', () => {
  navItems.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
  navItems.style.display = 'none';
});

navItems.addEventListener('click', () => {
  navItems.style.display = 'none';
});
 