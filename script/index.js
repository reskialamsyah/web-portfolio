feather.replace();
AOS.init({ once: true, offset: 300, easing: "ease-out" });

let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 1 } });

// Hero Section Animation
tl.to(".navbar-toggler", { duration: 1, opacity: 1 });
tl.to(".navbar-brand", { duration: 1, opacity: 1 }, "-=1");
tl.to(".nav-link", { stagger: 0.15, duration: 2.2, opacity: 1, y: 0 }, "-=0.8");
tl.to(".social-resume", { duration: 2, opacity: 1, y: 0 }, "-=1.8");
tl.to("#hero-section h4", { "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", opacity: 1, y: 0, duration: 2.4 }, "-=1.5");
tl.to("#hero-section h1", { "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", opacity: 1, y: 0, duration: 2.2 }, "-=2.2");
tl.to("#hero-section p", { "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", opacity: 1, y: 0, duration: 2.2 }, "-=2.2");
tl.to(".btn-work", { "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", opacity: 1, y: 0, duration: 0.8 }, "-=2");
