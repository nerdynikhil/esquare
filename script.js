// Scroll effect for header and scroll-to-top button
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollToTop = document.querySelector('.scroll-to-top');

    // Header effects
    if (window.scrollY > 50) {
    } else {
        header.classList.remove('scrolled');
    }

    // Update navbar background opacity based on scroll
    const scrollProgress = Math.min(window.scrollY / 500, 1);
    header.style.background = `rgba(15, 23, 42, ${0.85 + (scrollProgress * 0.15)})`;
    header.style.backdropFilter = `blur(${10 + (scrollProgress * 10)}px)`;

    // Scroll-to-top button visibility
    if (window.scrollY > 500) {
        scrollToTop.classList.add('visible');
    } else {
        scrollToTop.classList.remove('visible');
    }
});

// GSAP animations
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    // Scroll-to-top functionality
    const scrollToTop = document.querySelector('.scroll-to-top');
    scrollToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
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

    // Service card animations with hover effect
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        // Initial animation
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

        // Hover animation for icon
        const icon = card.querySelector('.service-icon');
        card.addEventListener('mouseenter', () => {
            gsap.to(icon, {
                scale: 1.2,
                color: getComputedStyle(document.documentElement).getPropertyValue('--accent-color'),
                duration: 0.3,
                ease: "back.out(1.7)"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(icon, {
                scale: 1,
                color: 'inherit',
                duration: 0.3,
                ease: "power2.out"
            });
        });
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

    // Video play/pause functionality
    const videoContainers = document.querySelectorAll('.video-container');

    videoContainers.forEach(container => {
        const video = container.querySelector('video');
        const playButton = container.querySelector('.play-button');

        // Add click listener to play button
        playButton.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                container.classList.add('playing');
            } else {
                video.pause();
                container.classList.remove('playing');
            }
        });

        // Add event listeners to video for pause/end
        video.addEventListener('pause', () => {
            container.classList.remove('playing');
        });

        video.addEventListener('ended', () => {
            container.classList.remove('playing');
        });

        // Set up ScrollTrigger for each video container
        ScrollTrigger.create({
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            onEnter: () => {
                // Auto-play when scrolled into view
                if (video.paused) {
                    video.play();
                    container.classList.add('playing');
                }
            },
            onLeave: () => {
                if (!video.paused) {
                    video.pause();
                    container.classList.remove('playing');
                }
            },
            onEnterBack: () => {
                // Auto-play when scrolling back into view
                if (video.paused) {
                    video.play();
                    container.classList.add('playing');
                }
            },
            onLeaveBack: () => {
                if (!video.paused) {
                    video.pause();
                    container.classList.remove('playing');
                }
            }
        });
    });
}); 