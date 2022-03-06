const menu = document.querySelector(".nav__menu-toggler");
const navLinks = document.querySelector(".nav__links")

menu.addEventListener('click', () => {
    menu.classList.toggle('open')
    navLinks.classList.toggle("active-nav-links");
})