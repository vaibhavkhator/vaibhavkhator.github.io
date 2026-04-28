console.log("SCRIPT LOADED");

// Navbar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// EmailJS INIT
(function () {
    emailjs.init("v9RLPDmlVK3uEuQT5");
})();

// FORM
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        console.log("FORM SUBMITTED");

        emailjs.sendForm(
            "service_8rpo2kq",
            "template_f1zufpn",
            this
        )
        .then(() => {
            alert("✅ Message Sent Successfully");
            form.reset();
        })
        .catch((error) => {
            console.log(error);
            alert("❌ Failed to send");
        });
    });

});
