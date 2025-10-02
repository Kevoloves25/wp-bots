// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Set active page based on current URL
    function setActivePage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
                link.classList.add('active');
            }
        });
    }
    
    setActivePage();
});

// Add scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.bot-card, .tutorial-card, .social-card, .featured-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Initialize when page loads
window.addEventListener('load', animateOnScroll);

// Add sparkle effects for fun
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    sparkle.style.fontSize = (Math.random() * 20 + 10) + 'px';
    sparkle.style.opacity = '0';
    sparkle.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    sparkle.style.zIndex = '9999';
    sparkle.style.pointerEvents = 'none';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.style.opacity = '1';
        sparkle.style.transform = 'scale(1.5)';
    }, 10);
    
    setTimeout(() => {
        sparkle.style.opacity = '0';
        sparkle.style.transform = 'scale(0.5)';
    }, 500);
    
    setTimeout(() => {
        document.body.removeChild(sparkle);
    }, 1000);
}

// Create occasional sparkles
setInterval(createSparkle, 3000);
