document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       MOVIE LIST
    =============================== */

const movieList = [

{ title:"Gladiator", genre:"Action", country:"USA", rating:"8.5", slug:"gladiator.html", img:"navigator-hub/gladiator.jpg" },
{ title:"Titanic", genre:"Romance", country:"USA", rating:"7.9", slug:"titanic.html", img:"navigator-hub/titanic.jpg" },
{ title:"Avatar", genre:"Sci-Fi", country:"USA", rating:"7.8", slug:"avatar.html", img:"navigator-hub/avatar.jpg" },
{ title:"Avengers Endgame", genre:"Action", country:"USA", rating:"8.4", slug:"avengers-endgame.html", img:"navigator-hub/endgame.jpg" },
{ title:"The Matrix", genre:"Sci-Fi", country:"USA", rating:"8.7", slug:"matrix.html", img:"navigator-hub/matrix.jpg" },
{ title:"The Godfather", genre:"Crime", country:"USA", rating:"9.2", slug:"godfather.html", img:"navigator-hub/godfather.jpg" },
{ title:"The Shawshank Redemption", genre:"Drama", country:"USA", rating:"9.3", slug:"shawshank.html", img:"navigator-hub/shawshank.jpg" },
{ title:"Forrest Gump", genre:"Drama", country:"USA", rating:"8.8", slug:"forrest-gump.html", img:"navigator-hub/forrest-gump.jpg" },
{ title:"The Lion King", genre:"Animation", country:"USA", rating:"8.5", slug:"lion-king.html", img:"navigator-hub/lion-king.jpg" },
{ title:"Frozen", genre:"Animation", country:"USA", rating:"7.4", slug:"frozen.html", img:"navigator-hub/frozen.jpg" },

{ title:"The Conjuring", genre:"Horror", country:"USA", rating:"7.5", slug:"conjuring.html", img:"navigator-hub/conjuring.jpg" },
{ title:"IT", genre:"Horror", country:"USA", rating:"7.3", slug:"it.html", img:"navigator-hub/it.jpg" },
{ title:"A Quiet Place", genre:"Horror", country:"USA", rating:"7.5", slug:"quiet-place.html", img:"navigator-hub/quiet-place.jpg" },
{ title:"The Hangover", genre:"Comedy", country:"USA", rating:"7.7", slug:"hangover.html", img:"navigator-hub/hangover.jpg" },
{ title:"Deadpool", genre:"Action", country:"USA", rating:"8.0", slug:"deadpool.html", img:"navigator-hub/deadpool.jpg" },
{ title:"Logan", genre:"Action", country:"USA", rating:"8.1", slug:"logan.html", img:"navigator-hub/logan.jpg" },
{ title:"Black Panther", genre:"Action", country:"USA", rating:"7.3", slug:"black-panther.html", img:"navigator-hub/black-panther.jpg" },
{ title:"Doctor Strange", genre:"Fantasy", country:"USA", rating:"7.5", slug:"doctor-strange.html", img:"navigator-hub/doctor-strange.jpg" },
{ title:"The Prestige", genre:"Thriller", country:"USA", rating:"8.5", slug:"prestige.html", img:"navigator-hub/prestige.jpg" },
{ title:"Memento", genre:"Thriller", country:"USA", rating:"8.4", slug:"memento.html", img:"navigator-hub/memento.jpg" },

{ title:"The Grand Budapest Hotel", genre:"Comedy", country:"USA", rating:"8.1", slug:"grand-budapest.html", img:"navigator-hub/grand-budapest.jpg" },
{ title:"1917", genre:"Drama", country:"UK", rating:"8.2", slug:"1917.html", img:"navigator-hub/1917.jpg" },
{ title:"Skyfall", genre:"Action", country:"UK", rating:"7.8", slug:"skyfall.html", img:"navigator-hub/skyfall.jpg" },
{ title:"The Imitation Game", genre:"Drama", country:"UK", rating:"8.0", slug:"imitation-game.html", img:"navigator-hub/imitation-game.jpg" },
{ title:"Slumdog Millionaire", genre:"Drama", country:"UK", rating:"8.0", slug:"slumdog.html", img:"navigator-hub/slumdog.jpg" },
{ title:"Dangal", genre:"Drama", country:"India", rating:"8.3", slug:"dangal.html", img:"navigator-hub/dangal.jpg" },
{ title:"Baahubali", genre:"Action", country:"India", rating:"8.0", slug:"baahubali.html", img:"navigator-hub/baahubali.jpg" },
{ title:"RRR", genre:"Action", country:"India", rating:"7.9", slug:"rrr.html", img:"navigator-hub/rrr.jpg" },
{ title:"Oldboy", genre:"Thriller", country:"South Korea", rating:"8.4", slug:"oldboy.html", img:"navigator-hub/oldboy.jpg" },
{ title:"The Host", genre:"Horror", country:"South Korea", rating:"7.1", slug:"the-host.html", img:"navigator-hub/the-host.jpg" },

{ title:"Weathering With You", genre:"Romance", country:"Japan", rating:"7.5", slug:"weathering-with-you.html", img:"navigator-hub/weathering.jpg" },
{ title:"Akira", genre:"Animation", country:"Japan", rating:"8.0", slug:"akira.html", img:"navigator-hub/akira.jpg" },
{ title:"Pan's Labyrinth", genre:"Fantasy", country:"Spain", rating:"8.2", slug:"pans-labyrinth.html", img:"navigator-hub/pans.jpg" },
{ title:"The Intouchables", genre:"Comedy", country:"France", rating:"8.5", slug:"intouchables.html", img:"navigator-hub/intouchables.jpg" },
{ title:"The Pianist", genre:"Drama", country:"France", rating:"8.5", slug:"pianist.html", img:"navigator-hub/pianist.jpg" },
{ title:"The Platform", genre:"Thriller", country:"Spain", rating:"7.0", slug:"platform.html", img:"navigator-hub/platform.jpg" },
{ title:"Life Is Beautiful", genre:"Drama", country:"Italy", rating:"8.6", slug:"life-is-beautiful.html", img:"navigator-hub/life-beautiful.jpg" },
{ title:"The Revenant", genre:"Adventure", country:"USA", rating:"8.0", slug:"revenant.html", img:"navigator-hub/revenant.jpg" },
{ title:"Mad Max:Fury Road", genre:"Action", country:"Australia", rating:"8.1", slug:"mad-max.html", img:"navigator-hub/mad-max.jpg" },
{ title:"The Wolf of Wall Street", genre:"Comedy", country:"USA", rating:"8.2", slug:"wolf-wall-street.html", img:"navigator-hub/wolf.jpg" },

{ title:"La La Land", genre:"Romance", country:"USA", rating:"8.0", slug:"la-la-land.html", img:"navigator-hub/lalaland.jpg" },
{ title:"Whiplash", genre:"Drama", country:"USA", rating:"8.5", slug:"whiplash.html", img:"navigator-hub/whiplash.jpg" },
{ title:"Shutter Island", genre:"Thriller", country:"USA", rating:"8.2", slug:"shutter-island.html", img:"navigator-hub/shutter.jpg" },
{ title:"The Social Network", genre:"Drama", country:"USA", rating:"7.7", slug:"social-network.html", img:"navigator-hub/social-network.jpg" },
{ title:"The Batman", genre:"Action", country:"USA", rating:"7.9", slug:"the-batman.html", img:"navigator-hub/the-batman.jpg" },
{ title:"No Time To Die", genre:"Action", country:"UK", rating:"7.3", slug:"no-time-to-die.html", img:"navigator-hub/no-time.jpg" },
{ title:"Tenet", genre:"Sci-Fi", country:"USA", rating:"7.3", slug:"tenet.html", img:"navigator-hub/tenet.jpg" },
{ title:"The Truman Show", genre:"Drama", country:"USA", rating:"8.2", slug:"truman-show.html", img:"navigator-hub/truman.jpg" },
{ title:"Her", genre:"Romance", country:"USA", rating:"8.0", slug:"her.html", img:"navigator-hub/her.jpg" },
{ title:"Gravity", genre:"Sci-Fi", country:"USA", rating:"7.7", slug:"gravity.html", img:"navigator-hub/gravity.jpg" }

];

    /* ===============================
       ELEMENTS
    =============================== */

    const mangaContainer = document.getElementById("mangaContainer");
    const searchInput = document.getElementById("searchInput");
    const genreFilter = document.getElementById("genreFilter");
    const countryFilter = document.getElementById("countryFilter");

    /* ===============================
       DISPLAY MOVIES
    =============================== */

    function displayMovies(list) {

        mangaContainer.innerHTML = "";

        if (list.length === 0) {
            mangaContainer.innerHTML = `
                <div class="no-results">
                    <h3>No Movies Found</h3>
                    <p>Try different filters or keywords</p>
                </div>
            `;
            return;
        }

        list.forEach(movie => {

            const card = document.createElement("div");
            card.className = "manga-card";

            card.innerHTML = `
                <div class="manga-image">
                    <img src="${movie.img}" alt="${movie.title}">
                </div>

                <div class="manga-info">
                    <h3>${movie.title}</h3>
                    <p class="genre">${movie.genre}</p>
                    <p class="genre">${movie.country}</p>
                    <div class="rating">⭐ ${movie.rating}</div>

                    <button class="read-btn" data-link="${movie.slug}">
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

        const filtered = movieList.filter(movie => {

            const matchTitle = movie.title.toLowerCase().includes(keyword);

            const matchGenre =
                selectedGenre === "All Genres" ||
                movie.genre === selectedGenre;

            const matchCountry =
                selectedCountry === "All Countries" ||
                movie.country === selectedCountry;

            return matchTitle && matchGenre && matchCountry;
        });

        displayMovies(filtered);
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

    /* ===============================
       INITIAL LOAD
    =============================== */

    displayMovies(movieList);

});