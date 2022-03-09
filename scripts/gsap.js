gsap.registerPlugin(ScrollTrigger); // add scroll trigger animation

// HEADER
gsap.from("#header-main", {duration: 0.5, scale: 1.2})
gsap.from("#header-sub", { opacity: 0, duration: 0.5, delay: 0.5 });

// NAV
gsap.from("#nav-logo", { opacity: 0, duration: 1.5, delay: 1 , rotate: 180});
gsap.from("#nav-about", { opacity: 0, duration: 0.3, delay: 1.5 });
gsap.from("#nav-technologies", { opacity: 0, duration: 0.3, delay: 1.8 });
gsap.from("#nav-projects", { opacity: 0, duration: 0.3, delay: 2.1 });
gsap.from("#nav-contact", { opacity: 0, duration: 0.3, delay:  2.4});


// PERSONAL SOCIAL MEDIA
gsap.from("#personal-social-media", {
    opacity: 0,
    duration: 1,
    x: -50,
    delay: 2.4,
});

// PERSONAL CONTACTS
gsap.from("#personal-contact", { opacity: 0, duration: 1, x: 50, delay: 2.4 });

// ABOUT ME

gsap.from("#header-1", {
    scrollTrigger: {
        trigger: "main"
    },
    duration: 1.1,
    x: -500,
});
gsap.from("#about-me-presentation", {
    scrollTrigger: {
        trigger: "main",
    },
    duration: 1,
    y: 100,
});
gsap.from("#about-me-image", {
    scrollTrigger: {
        trigger: "main",
    },
    duration: 1,
    y: -100,
});
