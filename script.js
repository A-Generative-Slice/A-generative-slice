// DOM elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Active link highlighting based on scroll position
function setActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Header background on scroll
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.borderBottom = '1px solid rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
    }
}

// Smooth scroll behavior
function initSmoothScroll() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Intersection Observer for animations
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.feature-card, .stat-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// Counter animation for stats
function animateCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                const number = text.match(/[\d,]+/);
                
                if (number) {
                    const finalNumber = parseInt(number[0].replace(/,/g, ''));
                    const suffix = text.replace(number[0], '');
                    animateNumber(target, 0, finalNumber, suffix, 2000);
                    observer.unobserve(target);
                }
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(el => observer.observe(el));
}

function animateNumber(element, start, end, suffix, duration) {
    const startTime = Date.now();
    const range = end - start;
    
    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        const current = Math.floor(start + (range * easedProgress));
        
        let displayNumber = current;
        if (current >= 1000) {
            displayNumber = (current / 1000).toFixed(current >= 10000 ? 0 : 1) + 'K';
        }
        
        element.textContent = displayNumber + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    update();
}

function easeOutQuart(t) {
    return 1 - (--t) * t * t * t;
}

// Button hover effects
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', () => {
            if (!button.matches(':active')) {
                button.style.transform = 'translateY(0)';
            }
        });
        
        button.addEventListener('mousedown', () => {
            button.style.transform = 'translateY(0)';
        });
        
        button.addEventListener('mouseup', () => {
            button.style.transform = 'translateY(-2px)';
        });
    });
}

// Parallax effect for hero shapes
function initParallax() {
    const shapes = document.querySelectorAll('.shape');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        shapes.forEach((shape, index) => {
            const speed = parallaxSpeed * (index + 1) * 0.3;
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Form handling (for future contact forms)
function initFormHandling() {
    const ctaButtons = document.querySelectorAll('.btn-primary');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Add click effect
            button.style.transform = 'scale(0.98)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
            
            // Here you would typically handle form submission or redirect
            console.log('CTA clicked:', button.textContent);
        });
    });
}

// Keyboard navigation
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

// Theme detection and respect for user preferences
function initThemeSupport() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        document.body.style.setProperty('--animation-duration', '0s');
        document.querySelectorAll('*').forEach(el => {
            el.style.animationDuration = '0s';
            el.style.transitionDuration = '0s';
        });
    }
}

// Performance optimization
function initPerformanceOptimizations() {
    // Debounce scroll events
    let scrollTimer = null;
    window.addEventListener('scroll', () => {
        if (scrollTimer !== null) {
            clearTimeout(scrollTimer);
        }
        scrollTimer = setTimeout(() => {
            setActiveLink();
            handleHeaderScroll();
        }, 10);
    });
    
    // Preload critical resources
    const criticalImages = ['hero-bg', 'feature-icons'];
    criticalImages.forEach(id => {
        const img = document.getElementById(id);
        if (img) {
            img.loading = 'eager';
        }
    });
}

// Error handling
function initErrorHandling() {
    window.addEventListener('error', (e) => {
        console.error('JavaScript error:', e.error);
        // In production, you might want to send this to an error tracking service
    });
}

// Initialize all functionality
function init() {
    // Core functionality
    initSmoothScroll();
    initScrollAnimations();
    animateCounters();
    initButtonEffects();
    initParallax();
    initFormHandling();
    initKeyboardNavigation();
    
    // Optimization and accessibility
    initThemeSupport();
    initPerformanceOptimizations();
    initErrorHandling();
    
    // Set initial active link
    setActiveLink();
}

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when tab is not visible
        document.body.style.animationPlayState = 'paused';
    } else {
        document.body.style.animationPlayState = 'running';
    }
});

// Resize handler for responsive adjustments
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Close mobile menu on resize
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
        
        // Recalculate positions
        setActiveLink();
    }, 250);
});

// Touch event handlers for mobile
if ('ontouchstart' in window) {
    document.addEventListener('touchstart', () => {}, { passive: true });
    
    // Improve touch responsiveness
    const touchElements = document.querySelectorAll('.btn, .feature-card, .nav-link');
    touchElements.forEach(el => {
        el.style.webkitTapHighlightColor = 'rgba(235, 97, 7, 0.2)';
    });
}

// ============================================
// EMAIL FORM HANDLING WITH EMAILJS
// ============================================

// Initialize EmailJS with your User ID
// TO SET UP: 
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Get your User ID from the dashboard
// 3. Create an email service and template
// 4. Replace 'YOUR_USER_ID', 'YOUR_SERVICE_ID', and 'YOUR_TEMPLATE_ID' below

(function() {
    // Initialize EmailJS with your Public Key
    console.log('Initializing EmailJS...');
    emailjs.init('gBM0W-G2RDT8Qw7vq');
    console.log('EmailJS initialized successfully!');
})();

// Handle Student Registration Form
const studentForm = document.querySelector('.card-student .registration-form');
console.log('Student form found:', studentForm ? 'Yes' : 'No');

if (studentForm) {
    studentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Student form submitted!');
        
        const submitBtn = this.querySelector('.btn-register-student');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Get form data
        const formData = {
            from_name: this.querySelector('#student-name').value,
            from_email: this.querySelector('#student-email').value,
            phone: this.querySelector('#student-phone').value,
            interest: this.querySelector('#student-program').value,
            career_goals: this.querySelector('#student-goals').value,
            form_type: 'Student Registration'
        };
        
        console.log('Sending email with data:', formData);
        
        // Send email
        emailjs.send('service_e3uauzm', 'template_vdm5zyo', formData)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Thank you for registering! We\'ll contact you soon about our Saturday seminars.');
                studentForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, function(error) {
                console.error('FAILED...', error);
                alert('Error: ' + (error.text || error.message || 'Unknown error') + '. Check console for details (Press F12).');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
    });
}

// Handle Business Consultation Form
const businessForm = document.querySelector('.card-business .registration-form');
console.log('Business form found:', businessForm ? 'Yes' : 'No');

if (businessForm) {
    businessForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Business form submitted!');
        
        const submitBtn = this.querySelector('.btn-register-business');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Get form data
        const formData = {
            business_name: this.querySelector('#business-name').value,
            contact_person: this.querySelector('#contact-person').value,
            from_email: this.querySelector('#business-email').value,
            service_interest: this.querySelector('#service-interest').value,
            project_description: this.querySelector('#project-description').value,
            form_type: 'Business Consultation'
        };
        
        console.log('Sending business email with data:', formData);
        
        // Send email
        emailjs.send('service_e3uauzm', 'template_vdm5zyo', formData)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Thank you for your interest! We\'ll send you a tailored proposal within 48 hours.');
                businessForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, function(error) {
                console.error('FAILED...', error);
                alert('Error: ' + (error.text || error.message || 'Unknown error') + '. Check console for details (Press F12).');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
    });
}
