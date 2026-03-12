/* ============================================================================
   CASITA MIRO — Main JavaScript
   Minimal, purposeful interactivity
   ============================================================================ */

(function () {
    'use strict';

    /* -------------------------------------------------------------------
       DOM REFERENCES
       ------------------------------------------------------------------- */
    const header    = document.getElementById('site-header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu   = document.getElementById('nav-menu');
    const reveals   = document.querySelectorAll('[data-reveal]');

    /* -------------------------------------------------------------------
       HEADER — Transparent at top, solid on scroll
       ------------------------------------------------------------------- */
    function updateHeader() {
        if (!header) return;
        const scrolled = window.scrollY > 60;
        header.classList.toggle('at-top', !scrolled);
        header.classList.toggle('scrolled', scrolled);
    }

    // Initial state
    updateHeader();

    // Throttled scroll listener
    let ticking = false;
    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                updateHeader();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    /* -------------------------------------------------------------------
       MOBILE MENU
       ------------------------------------------------------------------- */
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            const isOpen = navMenu.classList.toggle('active');
            navToggle.classList.toggle('active', isOpen);
            document.body.classList.toggle('menu-open', isOpen);
        });

        // Close menu when a link is tapped
        navMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }

    /* -------------------------------------------------------------------
       SMOOTH SCROLL — For anchor links
       ------------------------------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            if (id === '#') return;

            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                const headerHeight = header ? header.offsetHeight : 0;
                const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: top,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* -------------------------------------------------------------------
       INTERSECTION OBSERVER — Reveal on scroll
       ------------------------------------------------------------------- */
    if ('IntersectionObserver' in window && reveals.length > 0) {
        const revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    // Stagger children if multiple siblings
                    const el = entry.target;
                    const delay = el.dataset.revealDelay || 0;

                    setTimeout(function () {
                        el.classList.add('revealed');
                    }, delay);

                    revealObserver.unobserve(el);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -60px 0px'
        });

        reveals.forEach(function (el) {
            revealObserver.observe(el);
        });
    } else {
        // Fallback: just show everything
        reveals.forEach(function (el) {
            el.classList.add('revealed');
        });
    }

    /* -------------------------------------------------------------------
       PARALLAX — Subtle vertical shift for vineyard background
       ------------------------------------------------------------------- */
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    if (parallaxElements.length > 0 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        let rafParallax = false;

        window.addEventListener('scroll', function () {
            if (!rafParallax) {
                window.requestAnimationFrame(function () {
                    parallaxElements.forEach(function (el) {
                        const section = el.closest('section');
                        if (!section) return;

                        const rect = section.getBoundingClientRect();
                        const inView = rect.top < window.innerHeight && rect.bottom > 0;

                        if (inView) {
                            const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
                            const offset = (progress - 0.5) * 80; // max ±40px
                            el.style.transform = 'translateY(' + offset + 'px)';
                        }
                    });
                    rafParallax = false;
                });
                rafParallax = true;
            }
        }, { passive: true });
    }

    /* -------------------------------------------------------------------
       NEWSLETTER FORM
       ------------------------------------------------------------------- */
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const input = this.querySelector('input[type="email"]');
            const btn = this.querySelector('button[type="submit"]');

            if (!input || !input.value) return;

            // Visual feedback
            const originalText = btn.textContent;
            btn.textContent = 'Thank you!';
            btn.disabled = true;
            btn.style.background = '#2E7D32';

            input.value = '';

            // Reset after 3s
            setTimeout(function () {
                btn.textContent = originalText;
                btn.disabled = false;
                btn.style.background = '';
            }, 3000);
        });
    }

    /* -------------------------------------------------------------------
       GENERAL FORM HANDLING
       ------------------------------------------------------------------- */
    document.querySelectorAll('form').forEach(function (form) {
        if (form.id === 'newsletter-form') return;

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var msg = document.createElement('p');
            msg.textContent = 'Thank you for your inquiry. We will be in touch shortly.';
            msg.style.cssText = 'color: #2E7D32; font-weight: 500; padding: 1rem 0;';
            this.parentNode.insertBefore(msg, this.nextSibling);
            this.reset();

            setTimeout(function () {
                if (msg.parentNode) msg.parentNode.removeChild(msg);
            }, 5000);
        });
    });

    /* -------------------------------------------------------------------
       IMAGE LAZY LOADING — Native + IntersectionObserver fallback
       ------------------------------------------------------------------- */
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        const imageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    img.removeAttribute('loading');
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '200px 0px'
        });

        lazyImages.forEach(function (img) {
            imageObserver.observe(img);
        });
    }

})();
