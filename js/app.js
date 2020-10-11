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


/* TESTIMONIAL SLIDER */
const slides = document.querySelectorAll('.work__customer');
const sliderButtons = document.querySelectorAll('.work__slide');

function slideIn() {
    let index = this.dataset.id;
    slides.forEach(slide => {
        slide.style.display = 'none';
    })
    slides[index].style.display = 'flex';
    removeActive()
    this.classList.toggle('active');
    
}

function removeActive() {
    sliderButtons.forEach(button => {
        button.classList.remove('active')
    })
}

sliderButtons.forEach(button => {
    button.addEventListener('click', slideIn);
})
