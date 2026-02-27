document.addEventListener("DOMContentLoaded", () => {

    const filterButtons = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.getElementById("lightbox-close");

    // FILTER SYSTEM
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {

            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const category = button.getAttribute("data-category");

            items.forEach(item => {
                if (category === "All" || item.dataset.category === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // LIGHTBOX
    items.forEach(item => {
        item.addEventListener("click", () => {
            const imgSrc = item.querySelector("img").src;
            lightboxImg.src = imgSrc;
            lightbox.style.display = "flex";
        });
    });

    lightboxClose.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

});