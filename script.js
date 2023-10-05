const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('hidden');

});