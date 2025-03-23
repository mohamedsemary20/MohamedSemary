// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight) && (elementBottom >= 0);
        
        if (isVisible) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Show loading state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            // Reset form
            this.reset();
            
            // Show success message
            submitButton.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!';
            submitButton.classList.add('btn-success');
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.innerHTML = originalText;
                submitButton.classList.remove('btn-success');
                submitButton.disabled = false;
            }, 3000);
        }, 1500);
    });
}

// Project cards animation
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Skill items animation
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Typing animation for hero section
const heroText = document.querySelector('.hero-section h1');
if (heroText) {
    const text = heroText.textContent;
    heroText.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            heroText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    typeWriter();
}

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
    
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
}

// Create stars dynamically
function createStars() {
    const starsContainer = document.querySelector('.stars');
    if (!starsContainer) return;
    
    // Create more stars
    for (let i = 0; i < 300; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = `${Math.random() * 3}px`;
        star.style.opacity = `${Math.random() * 0.5 + 0.2}`;
        starsContainer.appendChild(star);
    }
}

// Create planets dynamically
function createPlanets() {
    const container = document.body;
    
    // Create more planets with different colors and sizes
    const planetColors = [
        'rgba(0, 255, 157, 0.1)', // Green
        'rgba(108, 99, 255, 0.1)', // Purple
        'rgba(255, 99, 71, 0.1)', // Red
        'rgba(255, 215, 0, 0.1)', // Gold
        'rgba(0, 191, 255, 0.1)' // Blue
    ];
    
    for (let i = 0; i < 5; i++) {
        const planet = document.createElement('div');
        planet.className = 'planet';
        planet.style.width = `${200 + Math.random() * 200}px`;
        planet.style.height = planet.style.width;
        planet.style.background = `radial-gradient(circle at 30% 30%, ${planetColors[i]}, transparent)`;
        planet.style.top = `${Math.random() * 100}%`;
        planet.style.left = `${Math.random() * 100}%`;
        planet.style.animationDelay = `${Math.random() * 10}s`;
        container.appendChild(planet);
    }
}

// Initialize stars and planets
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    createPlanets();
});

// Parallax effect for planets
window.addEventListener('scroll', function() {
    const planets = document.querySelectorAll('.planet');
    const scrolled = window.pageYOffset;
    
    planets.forEach((planet, index) => {
        const speed = 0.5 + (index * 0.2);
        planet.style.transform = `translateY(${scrolled * speed}px)`;
    });
});
