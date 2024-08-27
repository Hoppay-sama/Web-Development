gsap.registerPlugin(ScrollTrigger);

const container = document.getElementsByClassName('about__subtext')[0]; // Corrected
const sections = gsap.utils.toArray(".about__subtext section");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
        trigger: container, // Use the container directly
        pin: true,
        scrub: 0.1,
        end: "+=" + (sections.length * window.innerWidth) // Adjust based on the number of sections
    }
});