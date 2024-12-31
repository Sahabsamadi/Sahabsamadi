// GSAP Animations
gsap.from('.hero-content', {opacity: 0, duration: 1, y: -50});
gsap.from('.skill-card', {
    scrollTrigger: '.skills',
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth Scrolling
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Alert
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    e.target.reset();
});
// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// JavaScript for Project Lightbox
const projectCards = document.querySelectorAll('.project-card img');

projectCards.forEach((card) => {
    card.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${card.src}" alt="Project Image">
            </div>
        `;
        document.body.appendChild(lightbox);
        lightbox.addEventListener('click', () => lightbox.remove());
    });
});

// Simple Contact Form Validation
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    alert('Message sent successfully!');
    contactForm.reset();
});

// GSAP Scroll Animation for About Section
gsap.registerPlugin(ScrollTrigger);

// Animation for About Section
gsap.from('.about-image img', {
    opacity: 0,
    x: -100,
    duration: 1.5,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.about',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
    }
});

gsap.from('.about-title', {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.about-title',
        start: 'top 90%',
    }
});

gsap.from('.about-description', {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.about-description',
        start: 'top 85%',
    }
});

gsap.from('.highlight-item', {
    opacity: 0,
    x: 50,
    duration: 1,
    stagger: 0.3,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.highlight-item',
        start: 'top 85%',
    }
});
