document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // NAVIGATION MENU
    // ==========================
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navClose = document.getElementById("nav-close");
    const overlay = document.getElementById("nav-overlay");
    const navLinks = document.querySelectorAll("#nav-menu a");

    function closeMenu(){
        if(navMenu) navMenu.classList.remove("open");
        if(overlay) overlay.classList.remove("show");
        document.body.style.overflow = "";
    }

    if(menuToggle) menuToggle.addEventListener("click", () => {
        if(navMenu) navMenu.classList.add("open");
        if(overlay) overlay.classList.add("show");
        document.body.style.overflow = "hidden";
    });

    if(navClose) navClose.addEventListener("click", closeMenu);
    if(overlay) overlay.addEventListener("click", closeMenu);
    navLinks.forEach(link => link.addEventListener("click", closeMenu));

    // ==========================
    // MODALS (apply/article)
    // ==========================
    const applyModal = document.getElementById("applyModal");
    const articleModal = document.getElementById("articleModal");

    const openApply = document.querySelector(".open-apply");
    const openArticle = document.querySelector(".open-article");
    const closes = document.querySelectorAll(".close");

    if(openApply) openApply.addEventListener("click", () => applyModal?.classList.add("active"));
    if(openArticle) openArticle.addEventListener("click", () => articleModal?.classList.add("active"));
    closes.forEach(btn => btn.addEventListener("click", () => btn.closest(".modal")?.classList.remove("active")));
    window.addEventListener("click", e => {
        if(e.target.classList.contains("modal")){
            e.target.classList.remove("active");
        }
    });

    // ==========================
    // JOB ADMIN FORM
    // ==========================
    const jobForm = document.getElementById("jobForm");
    const jobsContainer = document.getElementById("jobsContainer");

    if(jobForm){
        jobForm.addEventListener("submit", function(e){
            e.preventDefault();

            const job = {
                id: Date.now(),
                title: document.getElementById("title")?.value || "",
                company: document.getElementById("company")?.value || "",
                location: document.getElementById("location")?.value || "",
                type: document.getElementById("type")?.value || "",
                salary: document.getElementById("salary")?.value || "",
                description: document.getElementById("description")?.value || "",
                date: new Date().toLocaleDateString()
            };

            let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
            jobs.push(job);
            localStorage.setItem("jobs", JSON.stringify(jobs));

            alert("✅ Job posted successfully!");
            jobForm.reset();
            if(location.href.includes("job-admin.html")) renderJobs(); // only if admin page
            else window.location.href = "jobs.html";
        });
    }

    // ==========================
    // SEARCH JOBS
    // ==========================
    const searchInputs = document.querySelectorAll(".search-box input");
    const searchBtn = document.querySelector(".search-box button");

    if(searchBtn && searchInputs.length === 2){
        searchBtn.addEventListener("click", ()=>{
            const keyword = searchInputs[0].value.toLowerCase();
            const location = searchInputs[1].value.toLowerCase();
            let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

            const filtered = jobs.filter(job =>
                job.title.toLowerCase().includes(keyword) &&
                job.location.toLowerCase().includes(location)
            );

            showFilteredJobs(filtered);
        });
    }

    function showFilteredJobs(filteredJobs){
        if(!jobsContainer) return;

        if(filteredJobs.length === 0){
            jobsContainer.innerHTML = `
                <div class="no-jobs">
                    <h3>No matching jobs found</h3>
                    <p>Try different keywords</p>
                </div>
            `;
            return;
        }

        jobsContainer.innerHTML = "";
        filteredJobs.forEach(job => {
            const card = document.createElement("div");
            card.className = "job-card";
            card.innerHTML = `
                <h3>${job.title}</h3>
                <p class="company">${job.company}</p>
                <p class="meta">📍 ${job.location} | ${job.type}</p>
                <p class="salary">💰 ${job.salary}</p>
                <p class="desc">${job.description}</p>
                <p class="date">Posted: ${job.date}</p>
                <div class="job-buttons">
                    <button class="applyBtn">Apply</button>
                </div>
            `;
            jobsContainer.appendChild(card);
        });
    }

    // ==========================
    // CONTACT FORM
    // ==========================
    const contactForm = document.getElementById("contactForm");

    if(contactForm){
        contactForm.addEventListener("submit", function(e){
            e.preventDefault();

            const name = document.getElementById("name")?.value || "";
            const email = document.getElementById("email")?.value || "";
            const subject = document.getElementById("subject")?.value || "Website Inquiry";
            const message = document.getElementById("message")?.value || "";

            const mail = `mailto:starteamsevent@gmail.com@gmail.com
?subject=${encodeURIComponent(subject)}
&body=${encodeURIComponent(
`Name: ${name}
Email: ${email}

${message}`
            )}`;

            window.location.href = mail;
            document.getElementById("successPopup")?.classList.add("show");
        });
    }

});