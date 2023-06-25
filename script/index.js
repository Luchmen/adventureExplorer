const menuHamburger = document.querySelector(".menu-hamburger")
const navLink = document.querySelector(".nav-links");

menuHamburger.addEventListener('click', ()=>{
    navLink.classList.toggle('mobile-menu')
})
