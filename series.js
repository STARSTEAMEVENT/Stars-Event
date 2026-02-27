document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       SERIES LIST
    =============================== */

const seriesList = [

{ title:"Breaking Bad", genre:"Crime", country:"USA", status:"Completed", rating:"9.5", slug:"breaking-bad.html", img:"navigator-hub/breaking-bad.jpg" },
{ title:"Stranger Things", genre:"Sci-Fi", country:"USA", status:"Releasing", rating:"8.7", slug:"stranger-things.html", img:"navigator-hub/stranger-things.jpg" },
{ title:"Game of Thrones", genre:"Fantasy", country:"USA", status:"Completed", rating:"9.2", slug:"got.html", img:"navigator-hub/got.jpg" },
{ title:"The Witcher", genre:"Fantasy", country:"USA", status:"Releasing", rating:"8.1", slug:"witcher.html", img:"navigator-hub/witcher.jpg" },
{ title:"Sherlock", genre:"Crime", country:"UK", status:"Completed", rating:"9.1", slug:"sherlock.html", img:"navigator-hub/sherlock.jpg" },

{ title:"Money Heist", genre:"Crime", country:"Spain", status:"Completed", rating:"8.2", slug:"money-heist.html", img:"navigator-hub/money-heist.jpg" },
{ title:"Dark", genre:"Thriller", country:"Germany", status:"Completed", rating:"8.8", slug:"dark.html", img:"navigator-hub/dark.jpg" },
{ title:"Squid Game", genre:"Thriller", country:"South Korea", status:"Releasing", rating:"8.0", slug:"squid-game.html", img:"navigator-hub/squid-game.jpg" },
{ title:"Attack on Titan", genre:"Action", country:"Japan", status:"Completed", rating:"9.0", slug:"aot.html", img:"navigator-hub/aot.jpg" },
{ title:"Narcos", genre:"Crime", country:"USA", status:"Completed", rating:"8.8", slug:"narcos.html", img:"navigator-hub/narcos.jpg" },

{ title:"Friends", genre:"Comedy", country:"USA", status:"Completed", rating:"8.9", slug:"friends.html", img:"navigator-hub/friends.jpg" },
{ title:"The Office", genre:"Comedy", country:"USA", status:"Completed", rating:"8.9", slug:"office.html", img:"navigator-hub/office.jpg" },
{ title:"Peaky Blinders", genre:"Drama", country:"UK", status:"Completed", rating:"8.8", slug:"peaky.html", img:"navigator-hub/peaky.jpg" },
{ title:"Vikings", genre:"Historical", country:"Canada", status:"Completed", rating:"8.5", slug:"vikings.html", img:"navigator-hub/vikings.jpg" },
{ title:"The Boys", genre:"Action", country:"USA", status:"Releasing", rating:"8.7", slug:"the-boys.html", img:"navigator-hub/the-boys.jpg" },

{ title:"Wednesday", genre:"Mystery", country:"USA", status:"Releasing", rating:"8.1", slug:"wednesday.html", img:"navigator-hub/wednesday.jpg" },
{ title:"Loki", genre:"Fantasy", country:"USA", status:"Releasing", rating:"8.2", slug:"loki.html", img:"navigator-hub/loki.jpg" },
{ title:"The Crown", genre:"Drama", country:"UK", status:"Completed", rating:"8.6", slug:"crown.html", img:"navigator-hub/crown.jpg" },
{ title:"True Detective", genre:"Crime", country:"USA", status:"Releasing", rating:"8.9", slug:"true-detective.html", img:"navigator-hub/true-detective.jpg" },
{ title:"The Mandalorian", genre:"Sci-Fi", country:"USA", status:"Releasing", rating:"8.7", slug:"mandalorian.html", img:"navigator-hub/mandalorian.jpg" }

];

    /* ===============================
       ELEMENTS
    =============================== */

    const mangaContainer = document.getElementById("mangaContainer");
    const searchInput = document.getElementById("searchInput");
    const genreFilter = document.getElementById("genreFilter");
    const countryFilter = document.getElementById("countryFilter");
    const statusFilter = document.getElementById("statusFilter");

    /* ===============================
       DISPLAY SERIES
    =============================== */

    function displaySeries(list) {

        mangaContainer.innerHTML = "";

        if (list.length === 0) {
            mangaContainer.innerHTML = `
                <div class="no-results">
                    <h3>No Series Found</h3>
                    <p>Try different filters or keywords</p>
                </div>
            `;
            return;
        }

        list.forEach(series => {

            const card = document.createElement("div");
            card.className = "manga-card";

            card.innerHTML = `
                <div class="manga-image">
                    <img src="${series.img}" alt="${series.title}">
                </div>

                <div class="manga-info">
                    <h3>${series.title}</h3>
                    <p class="genre">${series.genre}</p>
                    <p class="genre">${series.country}</p>
                    <p class="genre">${series.status}</p>
                    <div class="rating">⭐ ${series.rating}</div>

                    <button class="read-btn" data-link="${series.slug}">
                        View Details
                    </button>
                </div>
            `;

            mangaContainer.appendChild(card);
        });

        activateButtons();
    }

    /* ===============================
       BUTTON NAVIGATION
    =============================== */

    function activateButtons() {
        const buttons = document.querySelectorAll(".read-btn");

        buttons.forEach(btn => {
            btn.addEventListener("click", () => {
                const page = btn.getAttribute("data-link");
                window.location.href = page;
            });
        });
    }

    /* ===============================
       FILTER FUNCTION (COMBINED)
    =============================== */

    function applyFilters() {

        const keyword = searchInput.value.toLowerCase();
        const selectedGenre = genreFilter.value;
        const selectedCountry = countryFilter.value;
        const selectedStatus = statusFilter.value;

        const filtered = seriesList.filter(series => {

            const matchTitle = series.title.toLowerCase().includes(keyword);

            const matchGenre =
                selectedGenre === "All Genres" ||
                series.genre === selectedGenre;

            const matchCountry =
                selectedCountry === "All Countries" ||
                series.country === selectedCountry;

            const matchStatus =
                selectedStatus === "All Status" ||
                series.status === selectedStatus;

            return matchTitle && matchGenre && matchCountry && matchStatus;
        });

        displaySeries(filtered);
    }

    /* ===============================
       EVENT LISTENERS
    =============================== */

    if (searchInput) {
        searchInput.addEventListener("input", applyFilters);
    }

    if (genreFilter) {
        genreFilter.addEventListener("change", applyFilters);
    }

    if (countryFilter) {
        countryFilter.addEventListener("change", applyFilters);
    }

    if (statusFilter) {
        statusFilter.addEventListener("change", applyFilters);
    }

    /* ===============================
       INITIAL LOAD
    =============================== */

    displaySeries(seriesList);

});