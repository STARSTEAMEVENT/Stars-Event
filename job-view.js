document.addEventListener("DOMContentLoaded", () => {
    const jobsContainer = document.getElementById("jobsContainer");
    if(!jobsContainer) return;

    // ==========================
    // Example Jobs Array (15)
    // ==========================
    const exampleJobs = [
        {title:"Frontend Developer", company:"TechSoft", location:"Colombo, Sri Lanka", type:"Full Time", experience:"Mid (2-5 years)", salary:"$700 - $1500", remote:true, description:"Work on modern React & Vue apps."},
        {title:"Backend Developer", company:"CodeCrafters", location:"Kandy, Sri Lanka", type:"Full Time", experience:"Senior (5+ years)", salary:"$1500+", remote:false, description:"Build scalable Node.js and Python APIs."},
        {title:"UI/UX Designer", company:"DesignHive", location:"Remote", type:"Part Time", experience:"Junior (0-2 years)", salary:"$300 - $700", remote:true, description:"Create sleek interfaces for mobile & web."},
        {title:"Digital Marketer", company:"Marketly", location:"Galle, Sri Lanka", type:"Full Time", experience:"Mid (2-5 years)", salary:"$700 - $1500", remote:false, description:"Run campaigns, analytics & growth strategies."},
        {title:"Data Scientist", company:"Analytica", location:"Jaffna, Sri Lanka", type:"Contract", experience:"Senior (5+ years)", salary:"$1500+", remote:true, description:"Predictive modeling & ML solutions."},
        {title:"Content Writer", company:"WordSmiths", location:"Remote", type:"Part Time", experience:"Intern", salary:"$100 - $300", remote:true, description:"Write compelling blog articles & SEO content."},
        {title:"Mobile App Developer", company:"AppWorks", location:"Colombo, Sri Lanka", type:"Full Time", experience:"Mid (2-5 years)", salary:"$700 - $1500", remote:false, description:"Develop iOS & Android apps using Flutter."},
        {title:"SEO Specialist", company:"SearchBoost", location:"Remote", type:"Full Time", experience:"Mid (2-5 years)", salary:"$700 - $1500", remote:true, description:"Optimize website rankings & run audits."},
        {title:"Graphic Designer", company:"PixelPerfect", location:"Kandy, Sri Lanka", type:"Full Time", experience:"Junior (0-2 years)", salary:"$300 - $700", remote:false, description:"Design logos, posters, and branding materials."},
        {title:"Project Manager", company:"BuildRight", location:"Colombo, Sri Lanka", type:"Full Time", experience:"Senior (5+ years)", salary:"$1500+", remote:false, description:"Manage teams and deliver projects on time."},
        {title:"QA Engineer", company:"Testify", location:"Remote", type:"Contract", experience:"Mid (2-5 years)", salary:"$700 - $1500", remote:true, description:"Automated and manual testing of web & mobile apps."},
        {title:"AI Researcher", company:"FutureTech", location:"Galle, Sri Lanka", type:"Full Time", experience:"Senior (5+ years)", salary:"$1500+", remote:false, description:"Develop AI models and research cutting-edge tech."},
        {title:"Customer Support", company:"HelpDesk Pro", location:"Colombo, Sri Lanka", type:"Full Time", experience:"Intern", salary:"$100 - $300", remote:false, description:"Assist clients via chat, email & calls."},
        {title:"Video Editor", company:"CineMagic", location:"Remote", type:"Part Time", experience:"Junior (0-2 years)", salary:"$300 - $700", remote:true, description:"Edit promotional and social media videos."},
        {title:"Business Analyst", company:"InsightCorp", location:"Jaffna, Sri Lanka", type:"Full Time", experience:"Mid (2-5 years)", salary:"$700 - $1500", remote:false, description:"Analyze business data and create reports."}
    ];

    // Clear old jobs and save fresh to localStorage
    localStorage.setItem("jobs", JSON.stringify(exampleJobs));

    const jobs = JSON.parse(localStorage.getItem("jobs"));

    jobs.forEach(job => {
        const card = document.createElement("div");
        card.className = "job-card";

        card.innerHTML = `
            <h3>${job.title}</h3>
            <p class="company">${job.company}</p>
            <div class="job-meta">
                <span>${job.type}</span>
                <span>${job.experience}</span>
                <span>${job.location}</span>
                <span>💰 ${job.salary}</span>
                ${job.remote ? `<span class="remote-badge">Remote</span>` : ''}
            </div>
            <p class="description">${job.description}</p>
            <div class="job-buttons">
                <button class="applyBtn" onclick="window.location.href='mailto:youremail@example.com?subject=Applying for ${encodeURIComponent(job.title)}'">Apply</button>
            </div>
        `;
        jobsContainer.appendChild(card);
    });
});