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


/* WORK GALLERY FILTER */
const sortLinks = document.querySelectorAll('.work__sortLink');
const sortBox = document.querySelectorAll('.work__box');

function sortGallery(e) {
    e.preventDefault();
    sortRemoveActive() // remove active class from all sortLinks
    const filter = this.dataset.sort;

    sortBox.forEach(box => {
        const dataset = box.dataset.sort;
        if (!dataset.includes(filter)) {
            box.classList.add('work__box--hidden');
        } else {
            box.classList.remove('work__box--hidden')
        }
    })

    this.classList.add('active'); //add active class to sortLink
}

function sortRemoveActive() {
    sortLinks.forEach(link => link.classList.remove('active'));
}

sortLinks.forEach(link => link.addEventListener('click', sortGallery));

/* SCROLL TOP BUTTON */
const scrollTop = document.querySelector('.scrollTop');
const scrollSection = document.querySelector('.contact');

const options = {
    rootMargin: '0px',
    threshold: 0.2
}

const scrollObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            scrollTop.classList.add('active');
        } else {
            scrollTop.classList.remove('active');
        }
    }) 
}, options)

scrollObserver.observe(scrollSection);
