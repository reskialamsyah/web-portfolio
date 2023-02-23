feather.replace();
AOS.init({ once: true, offset: 300, easing: "ease-out" });

// GSAP 3 animation
let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 1 } });

// navbar animation
tl.to(".navbar-toggler", { duration: 1, opacity: 1 });
tl.to(".navbar-brand", { duration: 1, opacity: 1 }, "-=1");
tl.to(".nav-link", { stagger: 0.15, duration: 2.2, opacity: 1, y: 0 }, "-=0.8");
tl.to(".social-resume", { duration: 2, opacity: 1, y: 0 }, "-=1.8");

// hero section animation
tl.to("#hero-section h4", { "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", opacity: 1, y: 0, duration: 2.4 }, "-=1.5");
tl.to("#hero-section h1", { "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", opacity: 1, y: 0, duration: 2.2 }, "-=2.2");
tl.to("#hero-section p", { "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", opacity: 1, y: 0, duration: 2.2 }, "-=2.2");
tl.to(".btn-work", { "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", opacity: 1, y: 0, duration: 0.8 }, "-=2");

// navbar hide when scroll down and show when scroll Up
document.addEventListener("DOMContentLoaded", function () {
  el_autohide = document.querySelector(".autohide");

  // add padding-top to bady (if necessary)
  navbar_height = document.querySelector(".navbar").offsetHeight;
  document.body.style.paddingTop = navbar_height + "px";

  if (el_autohide) {
    var last_scroll_top = 0;
    window.addEventListener("scroll", function () {
      let scroll_top = window.scrollY;
      if (scroll_top < last_scroll_top) {
        el_autohide.classList.remove("scrolled-down");
        el_autohide.classList.add("scrolled-up");
      } else {
        el_autohide.classList.remove("scrolled-up");
        el_autohide.classList.add("scrolled-down");
      }
      last_scroll_top = scroll_top;
    });
    // window.addEventListener
  }
  // if
});
// DOMContentLoaded  end
