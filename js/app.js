/* HEADER DROPDOWN MENU */
const menuBtn = document.querySelector('.header__mobile');
const menu = document.querySelector('.header__menu');

function isOpen () {
    if (menuBtn.classList.contains('header__mobile--active')) {
        menuBtn.classList.remove('header__mobile--active');
        menu.classList.remove('header__mobile--active');
    } else {
        menuBtn.classList.add('header__mobile--active');
        menu.classList.add('header__mobile--active');

    }
}

menuBtn.addEventListener('click', isOpen);