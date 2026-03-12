/**
 * CASITA MIRO - Main JavaScript
 * Minimal interactivity: mobile menu, smooth scroll, form handling
 */

// ============================================================================
// Mobile Menu Toggle
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar')) {
            navMenu.classList.remove('active');
        }
    });
});

// ============================================================================
// Newsletter Form Handling
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletterForm');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();

            // Basic email validation
            if (validateEmail(email)) {
                // Show success message
                const originalHTML = this.innerHTML;
                this.innerHTML = '<div class="form-success"><p>✓ Thank you! Check your email for updates.</p></div>';

                // Reset form after 3 seconds
                setTimeout(() => {
                    emailInput.value = '';
                    this.innerHTML = originalHTML;
                    // Re-attach event listener
                    this.addEventListener('submit', handleFormSubmit);
                }, 3000);
            } else {
                // Show error
                alert('Please enter a valid email address.');
                emailInput.focus();
            }
        });
    }
});

function handleFormSubmit(e) {
    e.preventDefault();
    // Form handling logic
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ============================================================================
// Smooth Scrolling for Anchor Links
// ============================================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ============================================================================
// Image Lazy Loading Fallback
// ============================================================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================================================
// Add Active State to Current Navigation Link
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || 
            currentPath.includes(link.getAttribute('href').replace('pages/', ''))) {
            link.style.color = 'var(--primary-red)';
            link.style.fontWeight = '700';
        }
    });
});

// ============================================================================
// Utility: Debounce Function
// ============================================================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================================================
// Utility: Add loading state to buttons
// ============================================================================

document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        if (this.form && this.form.checkValidity()) {
            this.disabled = true;
            this.textContent = 'Loading...';
        }
    });
});

// ============================================================================
// Print-friendly styles
// ============================================================================

window.addEventListener('beforeprint', function() {
    // Hide navigation and footer for print
    const navbar = document.querySelector('.navbar');
    const footer = document.querySelector('.footer');
    
    if (navbar) navbar.style.display = 'none';
    if (footer) footer.style.display = 'none';
});

window.addEventListener('afterprint', function() {
    // Restore navigation and footer after print
    const navbar = document.querySelector('.navbar');
    const footer = document.querySelector('.footer');
    
    if (navbar) navbar.style.display = 'block';
    if (footer) footer.style.display = 'block';
});

console.log('Casita Miro website loaded successfully.');
