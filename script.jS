// Navbar
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);

    let current = '';

    sections.forEach(section => {
        const top = section.offsetTop - 100;
        if (window.scrollY >= top) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = 'white';
        if (link.getAttribute('href').includes(current)) {
            link.style.color = '#3b82f6';
        }
    });
});


// Mobile menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


// ✅ EMAILJS SETUP
(function () {
    emailjs.init("v9RLPDmlVK3uEuQT5"); // your public key
})();


// ✅ FORM SUBMIT
const form = document.getElementById('contact-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm(
        'service_8rpo2kq',     // your service id
        'template_f1zufpn',    // your template id
        this
    ).then(() => {
        alert("Message sent successfully ✅");
        form.reset();
    }, (error) => {
        alert("Failed to send ❌");
        console.log(error);
    });
});
