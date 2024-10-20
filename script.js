const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link'); // Updated
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const header = document.querySelector('header');


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// Function to add/remove 'scrolled' class based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {  // If the user has scrolled more than 50px
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
