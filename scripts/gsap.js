gsap.registerPlugin(ScrollTrigger); // add scroll trigger animation

// TIMELINE FUNCTION
const timeline = (
    target,
    trigger,
    x,
    y,
    opacity,
    duration,
    scale,
    rotate,
    delay
) => {
    let tl = gsap.timeline({
        // generating a timeline
        scrollTrigger: {
            trigger: trigger,
            toggleActions: "restart none none pause",
        },
    });

    tl.from(target, {
        x: x,
        y: y,
        opacity: opacity,
        duration: duration,
        scale: scale,
        rotate: rotate,
        delay: delay,
    });
};

// HEADER
timeline("#header-main", "#navigation", 0, 0, 0, 0.7, 150, 0, 0);
timeline("#header-sub", "#navigation", 0, 0, 0, 0.5, 1, 0, 0.7);

// NAV
timeline("#nav-logo", "#navigation", 0, 0, 0, 1.5, 0, 180, 1);
// timeline("#nav-toggler", "#navigation", 0, 0, 0, 3, 0, 0, 0);
timeline("#nav-about", "#navigation", 0, 0, 0, 0.3, 0, 0, 1.5);
timeline("#nav-technologies", "#navigation", 0, 0, 0, 0.3, 0, 0, 1.8);
timeline("#nav-projects", "#navigation", 0, 0, 0, 0.3, 0, 0, 2.1);
timeline("#nav-contact", "#navigation", 0, 0, 0, 0.3, 0, 0, 2.4);

// PERSONAL SOCIAL MEDIA
timeline(
    "#personal-social-media",
    "#personal-social-media",
    -50,
    0,
    0,
    1,
    0,
    0,
    2.4
);

// PERSONAL CONTACTS
timeline("#personal-contact", "#personal-contact", 50, 0, 0, 1, 0, 0, 2.4);

// ABOUT ME
timeline("#header-1", "main", -500, 0, 1, 0.7, 0, 0, 0);
timeline("#about-me-presentation", "#header-1", 0, 0, 0, 0.7, 1, 0, 1.6);
timeline("#about-me-image", "#header-1", 0, 0, 0, 0.7, 1, 0, 0.9);

// TECHNOLOGIES
timeline("#header-2", "#header-2", -500, 0, 1, 0.7, 0, 0, 0);
for (let i = 1; i < 9; i++) {
    // for every column add navigation
    timeline(`#col-${i}`, `#col-${i}`, 0, 0, 0, 1.2, 1, 0, 0.5);
}

// PROJECTS
timeline("#header-3", "#header-3", -500, 0, 1, 0.7, 0, 0, 0);
timeline("#project-header-1", "#project-header-1", 0, 0, 0.5, 0.8, 0, 20, 0);
timeline("#project-header-2", "#project-header-2", 0, 0, 0.5, 0.8, 0, -20, 0);
for (let i = 1; i < 11; i++) {
    if (i % 2 != 0) {
        // odd projects are animated from the left side
        timeline(`#project-${i}`, `#project-${i}`, -1000, 0, 0, 1.2, 1, 0, 0.3);
    } else {
        // even projects are animated from the left side
        timeline(`#project-${i}`, `#project-${i}`, 1000, 0, 0, 1.2, 1, 0, 0.3);
    }
}

// CONTACT
timeline("#header-4", "#header-4", -500, 0, 1, 0.7, 0, 0, 0);
timeline("#contact-container", "#contact-container", 0, 0, 0.5, 0.8, 0, 0, 0.3);
