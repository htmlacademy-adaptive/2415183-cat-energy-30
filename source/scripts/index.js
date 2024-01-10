/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.menu-nav');
const navOpen = document.querySelector('.header__toggle-open');
const navClose = document.querySelector('.menu-nav__toggle-close');

navMain.classList.remove('menu-nav--no-js');

navOpen.addEventListener('click', () => {
  if (navMain.classList.contains('menu-nav--closed')) {
    navMain.classList.add('menu-nav--opened');
    navMain.classList.remove('menu-nav--closed');
  }
});

navClose.addEventListener('click', () => {
  if (navMain.classList.contains('menu-nav--opened')) {
    navMain.classList.add('menu-nav--closed');
    navMain.classList.remove('menu-nav--opened');
  }
});
