document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       COMPLETE MANGA LIST (Sample)
       Add more using same structure
    =============================== */

const mangaList = [

{ title:"Attack on Titan", genre:"Action", rating:"9.5", slug:"attack-on-titan.html", img:"navigator-hub/AOT.jpg" },
{ title:"One Piece", genre:"Adventure", rating:"9.8", slug:"one-piece.html", img:"navigator-hub/onepiece.jpg" },
{ title:"Naruto", genre:"Shounen", rating:"9.2", slug:"naruto.html", img:"navigator-hub/naruto.jpg" },
{ title:"Demon Slayer", genre:"Fantasy", rating:"9.0", slug:"demon-slayer.html", img:"navigator-hub/demon-slayer.jpg" },
{ title:"Death Note", genre:"Thriller", rating:"9.7", slug:"death-note.html", img:"navigator-hub/death-note.jpg" },
{ title:"Jujutsu Kaisen", genre:"Supernatural", rating:"9.1", slug:"jujutsu-kaisen.html", img:"navigator-hub/jjk.jpg" },
{ title:"Dragon Ball", genre:"Adventure", rating:"9.3", slug:"dragon-ball.html", img:"navigator-hub/db.jpg" },
{ title:"Bleach", genre:"Action", rating:"8.8", slug:"bleach.html", img:"navigator-hub/bleach.jpg" },
{ title:"Tokyo Ghoul", genre:"Dark", rating:"8.9", slug:"tokyo-ghoul.html", img:"navigator-hub/tokyo-ghoul.jpg" },
{ title:"Fullmetal Alchemist", genre:"Adventure", rating:"9.6", slug:"fullmetal-alchemist.html", img:"navigator-hub/fma.jpg" },
{ title:"Hunter x Hunter", genre:"Adventure", rating:"9.4", slug:"hunter-x-hunter.html", img:"navigator-hub/hxh.jpg" },
{ title:"Vinland Saga", genre:"Historical", rating:"9.4", slug:"vinland-saga.html", img:"navigator-hub/vinland.jpg" },
{ title:"Chainsaw Man", genre:"Horror", rating:"8.9", slug:"chainsaw-man.html", img:"navigator-hub/chainsaw-man.jpg" },
{ title:"My Hero Academia", genre:"Superhero", rating:"8.7", slug:"my-hero-academia.html", img:"navigator-hub/mha.jpg" },
{ title:"Black Clover", genre:"Fantasy", rating:"8.6", slug:"black-clover.html", img:"navigator-hub/black-clover.jpg" },
{ title:"Fairy Tail", genre:"Fantasy", rating:"8.5", slug:"fairy-tail.html", img:"navigator-hub/fairy-tail.jpg" },
{ title:"Sword Art Online", genre:"Sci-Fi", rating:"8.3", slug:"sword-art-online.html", img:"navigator-hub/sao.jpg" },
{ title:"Code Geass", genre:"Mecha", rating:"9.3", slug:"code-geass.html", img:"navigator-hub/code-geass.jpg" },
{ title:"Steins Gate", genre:"Sci-Fi", rating:"9.2", slug:"steins-gate.html", img:"navigator-hub/steins-gate.jpg" },
{ title:"Haikyuu", genre:"Sports", rating:"9.0", slug:"haikyuu.html", img:"navigator-hub/haikyuu.jpg" },

{ title:"Blue Lock", genre:"Sports", rating:"8.8", slug:"blue-lock.html", img:"navigator-hub/blue-lock.jpg" },
{ title:"Solo Leveling", genre:"Action", rating:"9.1", slug:"solo-leveling.html", img:"navigator-hub/solo-leveling.jpg" },
{ title:"Mob Psycho 100", genre:"Supernatural", rating:"9.0", slug:"mob-psycho-100.html", img:"navigator-hub/mob.jpg" },
{ title:"Dr Stone", genre:"Adventure", rating:"8.9", slug:"dr-stone.html", img:"navigator-hub/dr-stone.jpg" },
{ title:"Spy x Family", genre:"Comedy", rating:"8.8", slug:"spy-x-family.html", img:"navigator-hub/spy-family.jpg" },
{ title:"Re Zero", genre:"Fantasy", rating:"8.7", slug:"re-zero.html", img:"navigator-hub/rezero.jpg" },
{ title:"Tokyo Revengers", genre:"Action", rating:"8.4", slug:"tokyo-revengers.html", img:"navigator-hub/tokyo-revengers.jpg" },
{ title:"Berserk", genre:"Dark Fantasy", rating:"9.6", slug:"berserk.html", img:"navigator-hub/berserk.jpg" },
{ title:"Monster", genre:"Psychological", rating:"9.5", slug:"monster.html", img:"navigator-hub/monster.jpg" },
{ title:"Gintama", genre:"Comedy", rating:"9.1", slug:"gintama.html", img:"navigator-hub/gintama.jpg" },

{ title:"Fire Force", genre:"Action", rating:"8.4", slug:"fire-force.html", img:"navigator-hub/fire-force.jpg" },
{ title:"Noragami", genre:"Supernatural", rating:"8.6", slug:"noragami.html", img:"navigator-hub/noragami.jpg" },
{ title:"Magi", genre:"Fantasy", rating:"8.5", slug:"magi.html", img:"navigator-hub/magi.jpg" },
{ title:"Erased", genre:"Thriller", rating:"8.9", slug:"erased.html", img:"navigator-hub/erased.jpg" },
{ title:"Parasyte", genre:"Horror", rating:"8.8", slug:"parasyte.html", img:"navigator-hub/parasyte.jpg" },
{ title:"Akame ga Kill", genre:"Action", rating:"8.3", slug:"akame-ga-kill.html", img:"navigator-hub/akame.jpg" },
{ title:"Claymore", genre:"Dark Fantasy", rating:"8.4", slug:"claymore.html", img:"navigator-hub/claymore.jpg" },
{ title:"Hellsing Ultimate", genre:"Horror", rating:"8.9", slug:"hellsing-ultimate.html", img:"navigator-hub/hellsing.jpg" },
{ title:"The Promised Neverland", genre:"Thriller", rating:"8.8", slug:"promised-neverland.html", img:"navigator-hub/neverland.jpg" },
{ title:"Fate Zero", genre:"Fantasy", rating:"9.0", slug:"fate-zero.html", img:"navigator-hub/fate-zero.jpg" },

{ title:"Fate Stay Night", genre:"Fantasy", rating:"8.7", slug:"fate-stay-night.html", img:"navigator-hub/fate-stay-night.jpg" },
{ title:"Black Lagoon", genre:"Action", rating:"8.8", slug:"black-lagoon.html", img:"navigator-hub/black-lagoon.jpg" },
{ title:"Great Teacher Onizuka", genre:"Comedy", rating:"9.1", slug:"gto.html", img:"navigator-hub/gto.jpg" },
{ title:"Slam Dunk", genre:"Sports", rating:"9.2", slug:"slam-dunk.html", img:"navigator-hub/slam-dunk.jpg" },
{ title:"Inuyasha", genre:"Fantasy", rating:"8.6", slug:"inuyasha.html", img:"navigator-hub/inuyasha.jpg" },
{ title:"Yu Yu Hakusho", genre:"Action", rating:"9.0", slug:"yu-yu-hakusho.html", img:"navigator-hub/yuyu.jpg" },
{ title:"Toradora!", genre:"Romance", rating:"8.9", slug:"toradora.html", img:"navigator-hub/toradora.jpg" },
{ title:"Your Lie in April", genre:"Drama", rating:"9.0", slug:"your-lie-in-april.html", img:"navigator-hub/your-lie.jpg" },
{ title:"Clannad", genre:"Drama", rating:"8.8", slug:"clannad.html", img:"navigator-hub/clannad.jpg" },
{ title:"Angel Beats", genre:"Drama", rating:"8.7", slug:"angel-beats.html", img:"navigator-hub/angel-beats.jpg" },

{ title:"Made in Abyss", genre:"Adventure", rating:"9.1", slug:"made-in-abyss.html", img:"navigator-hub/made-in-abyss.jpg" },
{ title:"Overlord", genre:"Fantasy", rating:"8.7", slug:"overlord.html", img:"navigator-hub/overlord.jpg" },
{ title:"No Game No Life", genre:"Fantasy", rating:"8.8", slug:"no-game-no-life.html", img:"navigator-hub/ngnl.jpg" },
{ title:"Dorohedoro", genre:"Dark Fantasy", rating:"8.6", slug:"dorohedoro.html", img:"navigator-hub/dorohedoro.jpg" },
{ title:"The Rising of the Shield Hero", genre:"Fantasy", rating:"8.5", slug:"shield-hero.html", img:"navigator-hub/shield-hero.jpg" },
{ title:"Horimiya", genre:"Romance", rating:"8.6", slug:"horimiya.html", img:"navigator-hub/horimiya.jpg" },
{ title:"Kaguya Sama Love is War", genre:"Romance", rating:"9.0", slug:"kaguya-sama.html", img:"navigator-hub/kaguya.jpg" },
{ title:"Beastars", genre:"Drama", rating:"8.7", slug:"beastars.html", img:"navigator-hub/beastars.jpg" },
{ title:"Baki", genre:"Action", rating:"8.2", slug:"baki.html", img:"navigator-hub/baki.jpg" },
{ title:"Kuroko no Basket", genre:"Sports", rating:"8.9", slug:"kuroko.html", img:"navigator-hub/kuroko.jpg" },

{ title:"Initial D", genre:"Sports", rating:"8.8", slug:"initial-d.html", img:"navigator-hub/initial-d.jpg" },
{ title:"Food Wars", genre:"Comedy", rating:"8.5", slug:"food-wars.html", img:"navigator-hub/food-wars.jpg" },
{ title:"Assassination Classroom", genre:"Comedy", rating:"8.9", slug:"assassination-classroom.html", img:"navigator-hub/assassination-classroom.jpg" },
{ title:"One Punch Man", genre:"Action", rating:"9.0", slug:"one-punch-man.html", img:"navigator-hub/opm.jpg" },
{ title:"Psycho Pass", genre:"Sci-Fi", rating:"8.7", slug:"psycho-pass.html", img:"navigator-hub/psycho-pass.jpg" },
{ title:"Cowboy Bebop", genre:"Sci-Fi", rating:"9.3", slug:"cowboy-bebop.html", img:"navigator-hub/cowboy.jpg" },
{ title:"Trigun", genre:"Action", rating:"8.7", slug:"trigun.html", img:"navigator-hub/trigun.jpg" },
{ title:"Neon Genesis Evangelion", genre:"Mecha", rating:"9.1", slug:"evangelion.html", img:"navigator-hub/eva.jpg" },
{ title:"Digimon", genre:"Adventure", rating:"8.2", slug:"digimon.html", img:"navigator-hub/digimon.jpg" },
{ title:"Pokemon", genre:"Adventure", rating:"8.5", slug:"pokemon.html", img:"navigator-hub/pokemon.jpg" },

{ title:"Seven Deadly Sins", genre:"Fantasy", rating:"8.4", slug:"seven-deadly-sins.html", img:"navigator-hub/sds.jpg" },
{ title:"Record of Ragnarok", genre:"Action", rating:"8.3", slug:"record-of-ragnarok.html", img:"navigator-hub/ragnarok.jpg" },
{ title:"Tower of God", genre:"Fantasy", rating:"8.6", slug:"tower-of-god.html", img:"navigator-hub/tog.jpg" },
{ title:"God of Highschool", genre:"Action", rating:"8.1", slug:"god-of-highschool.html", img:"navigator-hub/goh.jpg" },
{ title:"Elfen Lied", genre:"Horror", rating:"8.4", slug:"elfen-lied.html", img:"navigator-hub/elfen.jpg" },
{ title:"Hajime no Ippo", genre:"Sports", rating:"9.0", slug:"hajime-no-ippo.html", img:"navigator-hub/ippo.jpg" },
{ title:"Zom 100", genre:"Comedy", rating:"8.5", slug:"zom-100.html", img:"navigator-hub/zom100.jpg" },
{ title:"Oshi no Ko", genre:"Drama", rating:"9.0", slug:"oshi-no-ko.html", img:"navigator-hub/oshi.jpg" },
{ title:"Frieren", genre:"Fantasy", rating:"9.2", slug:"frieren.html", img:"navigator-hub/frieren.jpg" },
{ title:"Hell Paradise", genre:"Action", rating:"8.8", slug:"hell-paradise.html", img:"navigator-hub/hell-paradise.jpg" }

];

    /* ===============================
       ELEMENTS
    =============================== */

    const mangaContainer = document.getElementById("mangaContainer");
    const searchInput = document.getElementById("searchInput");
    const genreFilter = document.getElementById("genreFilter");

    /* ===============================
       DISPLAY MANGA
    =============================== */

    function displayManga(list) {

        mangaContainer.innerHTML = "";

        if (list.length === 0) {
            mangaContainer.innerHTML = `
                <div class="no-results">
                    <h3>No Anime Found</h3>
                    <p>Try different search keywords</p>
                </div>
            `;
            return;
        }

        list.forEach(manga => {

            const card = document.createElement("div");
            card.className = "manga-card";

            card.innerHTML = `
                <div class="manga-image">
                    <img src="${manga.img}" alt="${manga.title}">
                </div>

                <div class="manga-info">
                    <h3>${manga.title}</h3>
                    <p class="genre">${manga.genre}</p>
                    <div class="rating">⭐ ${manga.rating}</div>

                    <button class="read-btn" data-link="${manga.slug}">
                        Read Article
                    </button>
                </div>
            `;

            mangaContainer.appendChild(card);
        });

        activateButtons();
    }

    /* ===============================
       ACTIVATE READ BUTTONS
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
       SEARCH FUNCTION
    =============================== */

    if (searchInput) {
        searchInput.addEventListener("input", () => {

            const keyword = searchInput.value.toLowerCase();

            const filtered = mangaList.filter(manga =>
                manga.title.toLowerCase().includes(keyword)
            );

            displayManga(filtered);
        });
    }

    /* ===============================
       GENRE FILTER
    =============================== */

    if (genreFilter) {
        genreFilter.addEventListener("change", () => {

            const selected = genreFilter.value;

            if (selected === "All") {
                displayManga(mangaList);
                return;
            }

            const filtered = mangaList.filter(manga =>
                manga.genre === selected
            );

            displayManga(filtered);
        });
    }

    /* ===============================
       INITIAL LOAD
    =============================== */

    displayManga(mangaList);

});