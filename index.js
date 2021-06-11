const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.nav-menu');
const menuCloseButton = document.querySelector('.menu-close');

menuButton.addEventListener('click', () => {
  menu.classList.add('isActive');
  menuCloseButton.classList.add('isActive');
});

menuCloseButton.addEventListener('click', () => {
  menu.classList.remove('isActive');
  menuCloseButton.classList.remove('isActive');
})
