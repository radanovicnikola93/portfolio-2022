// HEADER
gsap.from("#header-main", { opacity: 0, duration: 1, delay: 0 });
gsap.from("#header-sub", { opacity: 0, duration: 1, delay: 1 });

// NAV
gsap.from("#nav-about", { opacity: 0, duration: 0.5, delay: 2});
gsap.from("#nav-technologies", { opacity: 0, duration: 0.5, delay: 2.5 });
gsap.from("#nav-projects", { opacity: 0, duration: 0.5, delay: 3 });
gsap.from("#nav-contact", { opacity: 0, duration: 0.5, delay: 3.5 });
gsap.from("#nav-logo", { opacity: 0, duration: 0.5, delay: 3.5 });

// gsap.from("#nav-toggler", { opacity: 0, duration: 1, delay: 1 });

// PERSONAL SOCIAL MEDIA
gsap.from("#personal-social-media", {
    opacity: 0,
    duration: 1,
    x: -50,
    delay: 3.5,
});

// PERSONAL CONTACTS
gsap.from("#personal-contact", { opacity: 0, duration: 1, x: 50, delay: 3.5 });
