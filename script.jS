// script.js

// Sticky Navbar & Active Link Highlights
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    // Navbar background
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.add('scrolled'); // keep it dark for design consistency, or remove for transparent top
        navbar.classList.toggle('scrolled', window.scrollY > 0);
    }

    // Active link highlighting
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.style.color = 'var(--accent)';
        } else {
            link.style.color = 'var(--text-main)';
        }
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.querySelector('i').classList.toggle('fa-times');
    hamburger.querySelector('i').classList.toggle('fa-bars');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.querySelector('i').classList.remove('fa-times');
        hamburger.querySelector('i').classList.add('fa-bars');
    });
});

// Scroll Reveal Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Select elements to animate
window.addEventListener('load', () => {
    document.querySelectorAll('.glass, .section-title, .hero-content').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Form submission prevention (UI only)
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    // Simulate send
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Sent Successfully';
        btn.style.background = '#10b981';
        form.reset();
        
        // Reset button
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = 'var(--accent)';
        }, 3000);
    }, 1500);
});
