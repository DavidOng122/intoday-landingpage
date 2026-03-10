// InToday Landing Page — script.js

// Scroll-triggered fade-in
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
);

document.querySelectorAll(
    '.hero-text, .hero-img-wrap, .feature-section, .use-list li, .quote-section, .cta-inner'
).forEach((el, i) => {
    el.classList.add('fade-up');
    el.style.transitionDelay = (i * 0.04) + 's';
    observer.observe(el);
});
