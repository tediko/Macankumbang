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

/* SCROLL TO TOP */
const homeLinks = document.querySelectorAll('[data-home]');
homeLinks.forEach(link => {
    link.addEventListener('click', () => {
        window.scrollTo(0, 0);
    })
})

/* MENU SCROLLSPY */

document.addEventListener('DOMContentLoaded', () => {
    // grab the spySections (targets) and spyLinks (triggers)
    const spySections = document.querySelectorAll('[data-scroll]');
    const spyLinks = document.querySelectorAll('.header__link');

    // functions to add and remove the active class from links as appropriate
    const makeActive = (link) => spyLinks[link].classList.add("header__link--active");
    const removeActive = (link) => spyLinks[link].classList.remove("header__link--active");
    const removeAllActive = () => [...Array(spySections.length).keys()].forEach((link) => removeActive(link));
    // change the active link a bit above the actual section
    const sectionMargin = 200;

    // keep track of the currently active link
    let currentActive = 0;

    // compare each section (by offsetTop) against the
    // viewport's current position (by window.scrollY) to figure out what section
    // the user is currently viewing

    window.addEventListener("scroll", () => {
        const current = spySections.length - [...spySections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 1;

    // only if the section has changed
    // remove active class from all menu links
    // and then apply it to the link for the current section
        if (current !== currentActive) {
            removeAllActive();
            currentActive = current;
            makeActive(current);
        }
    });
}, false);