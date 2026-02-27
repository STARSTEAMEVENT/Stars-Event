document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       ARTICLES LIST
    =============================== */

    const articlesList = [

        {
            title: "Top 10 Games of 2026",
            category: "Games",
            date: "January 2026",
            description: "The biggest upcoming and trending games this year.",
            slug: "top-10-games-2026.html",
            img: "navigator-hub/games1.jpg"
        },
        {
            title: "Indie Music Comeback",
            category: "Music",
            date: "February 2026",
            description: "Independent artists reshaping the music scene.",
            slug: "indie-music.html",
            img: "navigator-hub/music1.jpg"
        },
        {
            title: "Hollywood Rising Star",
            category: "People",
            date: "March 2026",
            description: "Meet the next generation of actors.",
            slug: "rising-star.html",
            img: "navigator-hub/star1.jpg"
        },
        {
            title: "Oscar 2026 Highlights",
            category: "Awards & Events",
            date: "March 2026",
            description: "Everything that happened at the award night.",
            slug: "oscar-2026.html",
            img: "navigator-hub/oscar1.jpg"
        },
        {
            title: "Inside Movie Production",
            category: "Behind The Scenes",
            date: "April 2026",
            description: "Behind the camera of blockbuster films.",
            slug: "production.html",
            img: "navigator-hub/production1.jpg"
        },
        {
            title: "Global Streaming Trends",
            category: "Global Trends",
            date: "April 2026",
            description: "How streaming platforms dominate entertainment.",
            slug: "streaming.html",
            img: "navigator-hub/streaming1.jpg"
        }

    ];

    const container = document.getElementById("mangaContainer");
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const categoryCards = document.querySelectorAll(".knowledge-categories .article-card");

    /* ===============================
       DISPLAY ARTICLES
    =============================== */

    function displayArticles(list) {

        container.innerHTML = "";

        if (list.length === 0) {
            container.innerHTML = `
                <div class="no-results">
                    <h3>No Articles Found</h3>
                    <p>Try different search or category</p>
                </div>
            `;
            return;
        }

        list.forEach(article => {

            const card = document.createElement("div");
            card.className = "manga-card";

            card.innerHTML = `
                <img src="${article.img}" alt="${article.title}">
                <div class="manga-info">
                    <div class="category">${article.category}</div>
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <div class="date">${article.date}</div>
                </div>
            `;

            card.addEventListener("click", () => {
                window.location.href = article.slug;
            });

            container.appendChild(card);
        });
    }

    /* ===============================
       FILTER SYSTEM
    =============================== */

    function applyFilters() {

        const keyword = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;

        const filtered = articlesList.filter(article => {

            const matchTitle = article.title.toLowerCase().includes(keyword);

            const matchCategory =
                selectedCategory === "All Categories" ||
                article.category === selectedCategory;

            return matchTitle && matchCategory;
        });

        displayArticles(filtered);
    }

    /* ===============================
       CATEGORY CARD CLICK
    =============================== */

    categoryCards.forEach(card => {
        card.addEventListener("click", () => {
            const category = card.getAttribute("data-category");
            categoryFilter.value = category;
            applyFilters();
            window.scrollTo({ top: container.offsetTop - 100, behavior: "smooth" });
        });
    });

    searchInput.addEventListener("input", applyFilters);
    categoryFilter.addEventListener("change", applyFilters);

    displayArticles(articlesList);

});