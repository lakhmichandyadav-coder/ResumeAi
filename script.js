// ===============================
// ResumeAi - Complete JavaScript
// ===============================

function generateAI() {
    const name = document.getElementById("name").value.trim();
    const education = document.getElementById("education").value.trim();
    const skills = document.getElementById("skills").value.trim();
    const experience = document.getElementById("experience").value.trim();

    const summaryBox = document.getElementById("summary");

    if (!name || !education || !skills || !experience) {
        alert("Please fill Name, Education, Skills and Experience first!");
        return;
    }

    let summary = "";

    if (experience.toLowerCase() === "fresher") {
        summary =
            "Motivated fresher with a strong willingness to learn and grow professionally. " +
            "Possesses good knowledge and skills relevant to the chosen career field and is eager " +
            "to contribute positively to an organization.";
    } else {
        summary =
            "Experienced professional with strong practical knowledge, problem-solving abilities " +
            "and a commitment to delivering quality work. Ready to contribute skills and experience " +
            "to organizational growth.";
    }

    summaryBox.value = summary;
}


// ===============================
// Generate Resume
// ===============================

function generateResume() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const education = document.getElementById("education").value.trim();
    const skills = document.getElementById("skills").value.trim();
    const experience = document.getElementById("experience").value.trim();
    const summary = document.getElementById("summary").value.trim();
    const projects = document.getElementById("projects").value.trim();
    const languages = document.getElementById("languages").value.trim();
    const github = document.getElementById("github").value.trim();
    const linkedin = document.getElementById("linkedin").value.trim();

    const template = document.getElementById("template").value;

    const photoInput = document.getElementById("photo");
    const resume = document.getElementById("resume");

    // ===============================
    // Check required fields
    // ===============================

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        education === "" ||
        skills === "" ||
        experience === "" ||
        projects === "" ||
        languages === ""
    ) {
        alert("Please fill all fields!");
        return;
    }


    // ===============================
    // LIVE DATE
    // ===============================

    const today = new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });


    // ===============================
    // Skills
    // ===============================

    const skillsList = skills
        .split(",")
        .map(skill => skill.trim())
        .filter(skill => skill !== "");

    let skillsHTML = "";

    skillsList.forEach(skill => {
        skillsHTML += `<li>${skill}</li>`;
    });


    // ===============================
    // Projects
    // ===============================

    const projectList = projects
        .split(",")
        .map(project => project.trim())
        .filter(project => project !== "");

    let projectsHTML = "";

    projectList.forEach(project => {
        projectsHTML += `<li>${project}</li>`;
    });


    // ===============================
    // Photo
    // ===============================

    let photoHTML = "";

    if (photoInput && photoInput.files.length > 0) {

        const photoURL = URL.createObjectURL(photoInput.files[0]);

        photoHTML = `
            <img 
                src="${photoURL}" 
                class="resume-photo"
                alt="Profile Photo"
            >
        `;
    }


    // ===============================
    // Profile Links
    // ===============================

    let profilesHTML = "";

    if (github) {
        profilesHTML += `
            <p>
                <b>GitHub:</b>
                <a href="${github}" target="_blank">${github}</a>
            </p>
        `;
    }

    if (linkedin) {
        profilesHTML += `
            <p>
                <b>LinkedIn:</b>
                <a href="${linkedin}" target="_blank">${linkedin}</a>
            </p>
        `;
    }


    // ===============================
    // Template Design
    // ===============================

    let templateClass = "classic-template";

    if (template === "modern") {
        templateClass = "modern-template";
    }

    if (template === "professional") {
        templateClass = "professional-template";
    }


    // ===============================
    // Resume HTML
    // ===============================

    resume.innerHTML = `

        <div class="resume-card ${templateClass}">

            <div class="resume-header">

                ${photoHTML}

                <div class="resume-name">

                    <h1>${name}</h1>

                    <p>
                        ${email} |
                        ${phone}
                    </p>

                </div>

            </div>


            <section>

                <h2>Career Objective</h2>

                <p>
                    To obtain a challenging position where I can apply my skills,
                    learn continuously, and contribute to the organization's success.
                </p>

            </section>


            <section>

                <h2>Professional Summary</h2>

                <p>
                    ${
                        summary ||
                        "Your professional summary will appear here."
                    }
                </p>

            </section>


            <section>

                <h2>Education</h2>

                <p>
                    ${education}
                </p>

            </section>


            <section>

                <h2>Skills</h2>

                <ul>
                    ${skillsHTML}
                </ul>

            </section>


            <section>

                <h2>Experience</h2>

                <p>
                    ${experience}
                </p>

            </section>


            <section>

                <h2>Projects</h2>

                <ul>
                    ${projectsHTML}
                </ul>

            </section>


            <section>

                <h2>Languages</h2>

                <p>
                    ${languages}
                </p>

            </section>


            <section>

                <h2>Profiles</h2>

                ${profilesHTML || "<p>No profile links added.</p>"}

            </section>


            <section>

                <h2>Date</h2>

                <p>
                    ${today}
                </p>

            </section>


        </div>
    `;

    // Scroll to generated resume
    resume.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// ===============================
// Dark Mode
// ===============================

function darkMode() {

    document.body.classList.toggle("dark-mode");

    const button = document.querySelector(
        'button[onclick="darkMode()"]'
    );

    if (document.body.classList.contains("dark-mode")) {
        button.innerHTML = "☀️ Light Mode";
    } else {
        button.innerHTML = "🌙 Dark Mode";
    }
}


// ===============================
// Clear Form
// ===============================

function clearForm() {

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("education").value = "";
    document.getElementById("skills").value = "";
    document.getElementById("experience").value = "";
    document.getElementById("summary").value = "";
    document.getElementById("projects").value = "";
    document.getElementById("languages").value = "";
    document.getElementById("github").value = "";
    document.getElementById("linkedin").value = "";

    document.getElementById("template").value = "classic";

    const photo = document.getElementById("photo");

    if (photo) {
        photo.value = "";
    }

    document.getElementById("resume").innerHTML = "";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ===============================
// Download Resume PDF
// ===============================

function downloadPDF() {

    const resume = document.getElementById("resume");

    if (resume.innerHTML.trim() === "") {
        alert("First generate your resume!");
        return;
    }

    window.print();
}


// ===============================
// Page Load
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    console.log("ResumeAi loaded successfully.");

});
