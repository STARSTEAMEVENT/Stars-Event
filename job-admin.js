// ===============================
// ADMIN JOB DASHBOARD SCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("jobForm");
    const clearBtn = document.getElementById("clearBtn");
    const salaryRange = document.getElementById("salaryRange");
    const salaryValue = document.getElementById("salaryValue");
    const remoteToggle = document.getElementById("remoteToggle");
    const jobContainer = document.getElementById("adminJobList");

    // ===============================
    // SALARY SLIDER
    // ===============================
    salaryValue.innerText = salaryRange.value;

    salaryRange.addEventListener("input", () => {
        salaryValue.innerText = salaryRange.value;
    });

    // ===============================
    // LOAD SAMPLE JOBS (IF EMPTY)
    // ===============================
    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

    if (jobs.length === 0) {
        jobs = [
            {
                title: "Frontend Developer",
                company: "Navigator Tech",
                category: "IT & Software",
                type: "Full Time",
                experience: "Mid Level",
                location: "New York",
                salary: 5000,
                remote: true,
                description: "We are looking for a skilled frontend developer with React experience."
            },
            {
                title: "UI/UX Designer",
                company: "Creative Studio",
                category: "Design",
                type: "Remote",
                experience: "Senior",
                location: "London",
                salary: 4500,
                remote: true,
                description: "Design modern and user-friendly interfaces for web applications."
            },
            {
                title: "Marketing Specialist",
                company: "Growth Media",
                category: "Marketing",
                type: "Full Time",
                experience: "Junior",
                location: "Dubai",
                salary: 3500,
                remote: false,
                description: "Plan and execute marketing strategies across digital platforms."
            }
        ];

        localStorage.setItem("jobs", JSON.stringify(jobs));
    }

    renderJobs();

    // ===============================
    // CLEAR BUTTON
    // ===============================
    clearBtn.addEventListener("click", () => {

        form.reset();
        salaryValue.innerText = salaryRange.value;

        showToast("Form Cleared Successfully ✨");

    });

    // ===============================
    // FORM SUBMIT
    // ===============================
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const jobData = {
            title: document.getElementById("title").value.trim(),
            company: document.getElementById("company").value.trim(),
            category: document.getElementById("category").value,
            type: document.getElementById("type").value,
            experience: document.getElementById("experience").value,
            location: document.getElementById("location").value.trim(),
            salary: salaryRange.value,
            remote: remoteToggle.checked,
            description: document.getElementById("description").value.trim()
        };

        // Validation
        if (
            !jobData.title ||
            !jobData.company ||
            !jobData.category ||
            !jobData.type ||
            !jobData.experience ||
            !jobData.location ||
            !jobData.description
        ) {
            showToast("Please fill all required fields ⚠", true);
            return;
        }

        let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
        jobs.push(jobData);
        localStorage.setItem("jobs", JSON.stringify(jobs));

        showToast("Job Published Successfully 🚀");

        form.reset();
        salaryValue.innerText = salaryRange.value;

        renderJobs();
    });


    // ===============================
    // RENDER JOBS
    // ===============================
    function renderJobs() {

        let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
        jobContainer.innerHTML = "";

        if (jobs.length === 0) {
            jobContainer.innerHTML = "<p style='opacity:.6'>No jobs posted yet.</p>";
            return;
        }

        jobs.forEach((job, index) => {

            const jobCard = document.createElement("div");
            jobCard.className = "admin-job-card";

            jobCard.innerHTML = `
                <div class="job-card-header">
                    <h3>${job.title}</h3>
                    <button class="delete-btn" data-index="${index}">✖</button>
                </div>

                <p class="company">${job.company}</p>

                <div class="job-meta">
                    <span>${job.type}</span>
                    <span>${job.experience}</span>
                    <span>${job.location}</span>
                    <span>$${job.salary}</span>
                    ${job.remote ? `<span class="remote-badge">Remote</span>` : ""}
                </div>

                <p class="description">${job.description}</p>
            `;

            jobContainer.appendChild(jobCard);
        });

        attachDeleteEvents();
    }


    // ===============================
    // DELETE JOB
    // ===============================
    function attachDeleteEvents() {

        const deleteButtons = document.querySelectorAll(".delete-btn");

        deleteButtons.forEach(btn => {
            btn.addEventListener("click", () => {

                const index = btn.getAttribute("data-index");
                let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

                jobs.splice(index, 1);
                localStorage.setItem("jobs", JSON.stringify(jobs));

                showToast("Job Deleted 🗑");

                renderJobs();
            });
        });
    }

});


// ===============================
// TOAST NOTIFICATION SYSTEM
// ===============================

function showToast(message, isError = false) {

    const toast = document.createElement("div");
    toast.className = "custom-toast";
    toast.innerText = message;

    if (isError) {
        toast.style.background = "#ef4444";
    }

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}