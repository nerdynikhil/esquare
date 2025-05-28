// Scroll effect for header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backdropFilter = 'blur(10px)';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backdropFilter = 'none';
        header.style.backgroundColor = 'transparent';
        header.style.boxShadow = 'none';
    }
});

// GSAP animations
document.addEventListener('DOMContentLoaded', function() {
    // Hero section animation
    gsap.fromTo('.hero-content', 
        {opacity: 0, y: 50}, 
        {opacity: 1, y: 0, duration: 1, ease: "power3.out"}
    );

    // Initialize ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Section animations
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        gsap.fromTo(section, 
            {opacity: 0, y: 30, filter: 'blur(5px)'}, 
            {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                opacity: 1, 
                y: 0, 
                filter: 'blur(0px)',
                duration: 0.8, 
                ease: "power2.out"
            }
        );
    });

    // Service card animations
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        gsap.fromTo(card, 
            {opacity: 0, y: 30, filter: 'blur(5px)'}, 
            {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                opacity: 1, 
                y: 0, 
                filter: 'blur(0px)',
                duration: 0.5, 
                delay: index * 0.1,
                ease: "power2.out"
            }
        );
    });

    // Glass card animations
    const glassCards = document.querySelectorAll('.glass-card');
    glassCards.forEach(card => {
        gsap.fromTo(card, 
            {opacity: 0, y: 30, filter: 'blur(5px)'}, 
            {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                opacity: 1, 
                y: 0, 
                filter: 'blur(0px)',
                duration: 0.8, 
                ease: "power2.out"
            }
        );
    });
}); 