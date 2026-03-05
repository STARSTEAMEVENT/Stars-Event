document.addEventListener("DOMContentLoaded", function () {

    // Scroll Reveal
    const reveals = document.querySelectorAll(".manga-content h2, .manga-content p, .manga-panel, .manga-quote");

    reveals.forEach(el => {
        el.classList.add("reveal");
    });

    function revealOnScroll() {
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = 120;

            if (elementTop < windowHeight - revealPoint) {
                el.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();


    // HERO PARALLAX EFFECT
    const heroBg = document.querySelector(".hero-bg");

    window.addEventListener("scroll", function () {
        let scrollValue = window.scrollY;
        heroBg.style.transform = "scale(1.1) translateY(" + scrollValue * 0.2 + "px)";
    });

});