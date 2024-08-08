/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');
//  Menu show
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show__menu');
        navMenu.classList.remove('nav__menu');
        // console.log('object');
    })
};
// Menu Hidden
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show__menu');
        navMenu.classList.add('nav__menu');
        // console.log('object');
    })
};

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.querySelector('#nav-menu');
    // When we click on each nav__link, we remove the show menu
    navMenu.classList.remove('show__menu');
    navMenu.classList.add('nav__menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));














/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.querySelector('#header')
    // Add a class if the bottom offset is greater than 50 of the variable
    this.scrollY >= 50 ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')     
}
window.addEventListener('scroll', blurHeader)



/* ==================== Scroll Section Active Link ========== */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

/* ==================== Sticky Navbar ========== */

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

};