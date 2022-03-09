gsap.registerPlugin(ScrollTrigger); // add scroll trigger animation

// HEADER
gsap.from("#header-sub", { opacity: 0, duration: 1, delay: 1 });

// NAV
gsap.from("#nav-logo", { opacity: 0, duration: 0.5, delay: 2 });
gsap.from("#nav-about", { opacity: 0, duration: 0.5, delay: 2.5 });
gsap.from("#nav-technologies", { opacity: 0, duration: 0.5, delay: 3 });
gsap.from("#nav-projects", { opacity: 0, duration: 0.5, delay: 3.5 });
gsap.from("#nav-contact", { opacity: 0, duration: 0.5, delay: 4 });


// PERSONAL SOCIAL MEDIA
gsap.from("#personal-social-media", {
    opacity: 0,
    duration: 1,
    x: -50,
    delay: 4.5,
});

// PERSONAL CONTACTS
gsap.from("#personal-contact", { opacity: 0, duration: 1, x: 50, delay: 4.5 });

// ABOUT ME

gsap.from("#header-1", {
    opacity: 0,
    duration: 1.1,
    x: -500,
});
gsap.from("#about-me-presentation", {
    opacity: 0,
    duration: 1,
    y: 100,
});
gsap.from("#about-me-image", {
    opacity: 0,
    duration: 1,
    y: -100,
});
