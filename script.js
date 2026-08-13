// ===============================
// GENERATE RESUME
// ===============================

function generateResume() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let education = document.getElementById("education").value.trim();
    let skills = document.getElementById("skills").value.trim();
    let experience = document.getElementById("experience").value.trim();
    let projects = document.getElementById("projects").value.trim();
    let languages = document.getElementById("languages").value.trim();
    let github = document.getElementById("github").value.trim();
    let linkedin = document.getElementById("linkedin").value.trim();

    let summary = document.getElementById("summary").value.trim();

    let today = new Date().toLocaleDateString();

    let photo = document.getElementById("photo").files[0];

    let template = document.getElementById("template").value;


    // ===============================
    // CHECK REQUIRED FIELDS
    // ===============================

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        education === "" ||
        skills === "" ||
        experience === "" ||
        projects === "" ||
        languages === "" ||
        github === "" ||
        linkedin === ""
    ) {

        alert("Please fill all fields! ❌");
        return;
    }


    // ===============================
    // DEFAULT SUMMARY
    // ===============================

    if (summary === "") {

        summary =
            "Motivated professional with skills in " +
            skills +
            ". Ready to learn, grow and contribute to projects.";
    }


    // ===============================
    // SELECT TEMPLATE
    // ===============================

    let resume = document.getElementById("resume");

    resume.className = "";

    if (template === "classic") {

        resume.classList.add("classic");

    }

    else if (template === "modern") {

        resume.classList.add("modern");

    }

    else if (template === "professional") {

        resume.classList.add("professional");

    }


    // ===============================
    // SKILLS LIST
    // ===============================

    let skillsList = skills.split(",");


    let skillsHTML = "";

    skillsList.forEach(function(skill) {

        if (skill.trim() !== "") {

            skillsHTML +=
                `<li>${skill.trim()}</li>`;
        }

    });


    // ===============================
    // PROJECT LIST
    // ===============================

    let projectsList = projects.split(",");

    let projectsHTML = "";

    projectsList.forEach(function(project) {

        if (project.trim() !== "") {

            projectsHTML +=
                `<li>${project.trim()}</li>`;
        }

    });


    // ===============================
    // LANGUAGE LIST
    // ===============================

    let languageList = languages.split(",");

    let languageHTML = "";

    languageList.forEach(function(language) {

        if (language.trim() !== "") {

            languageHTML +=
                `<li>${language.trim()}</li>`;
        }

    });


    // ===============================
    // PHOTO
    // ===============================

    let photoHTML = "";

    if (photo) {

        let photoURL =
            URL.createObjectURL(photo);

        photoHTML = `
            <img
                src="${photoURL}"
                width="120"
                height="120"
                style="
                    border-radius:50%;
                    object-fit:cover;
                    display:block;
                    margin-bottom:15px;
                "
            >
        `;
    }


    // ===============================
    // RESUME HTML
    // ===============================

    resume.innerHTML = `

        <h2>My Resume</h2>

        <hr>

        ${photoHTML}


        <h3>👤 Personal Information</h3>

        <p>
            <strong>Name:</strong>
            ${name}
        </p>

        <p>
            <strong>Email:</strong>
            ${email}
        </p>

        <p>
            <strong>Phone:</strong>
            ${phone}
        </p>


        <h3>🎓 Education</h3>

        <p>
            ${education}
        </p>


        <h3>💻 Skills</h3>

        <ul>
            ${skillsHTML}
        </ul>


        <h3>💼 Experience</h3>

        <p>
            ${experience}
        </p>


        <h3>📂 Projects</h3>

        <ul>
            ${projectsHTML}
        </ul>


        <h3>🗣️ Languages</h3>

        <ul>
            ${languageHTML}
        </ul>


        <h3>🐙 GitHub</h3>

        <p>
            <a
                href="${github}"
                target="_blank"
            >
                ${github}
            </a>
        </p>


        <h3>💼 LinkedIn</h3>

        <p>
            <a
                href="${linkedin}"
                target="_blank"
            >
                ${linkedin}
            </a>
        </p>


        <h3>📝 Professional Summary</h3>

        <p>
            ${summary}
        </p>


        <h3>🎯 Career Objective</h3>

        <p>
            To obtain a challenging position where I can
            apply my skills, learn continuously, and
            contribute to the organization's success.
        </p>


        <p>
            📅 <strong>Date:</strong>
            ${today}
        </p>

    `;
}


// ===============================
// AI SUMMARY GENERATOR
// ===============================

function generateAI() {

    let skills =
        document.getElementById("skills").value.trim();

    let experience =
        document.getElementById("experience").value.trim();


    if (skills === "") {

        alert("Please enter your skills first! ❌");
        return;
    }


    let aiSummary = "";


    // FRESHER

    if (
        experience.toLowerCase() === "fresher"
    ) {

        aiSummary =
            "Motivated and enthusiastic fresher " +
            "with knowledge of " +
            skills +
            ". Quick learner with strong " +
            "problem-solving abilities and a willingness " +
            "to learn new technologies. Seeking an " +
            "opportunity to apply my skills and contribute " +
            "to a professional organization.";

    }


    // EXPERIENCED

    else {

        aiSummary =
            "Experienced professional with expertise in " +
            skills +
            ". Demonstrated ability to solve problems, " +
            "work effectively in a team, and deliver " +
            "quality results. Seeking opportunities to " +
            "apply my experience and contribute to " +
            "organizational growth.";

    }


    document.getElementById("summary").value =
        aiSummary;

}


// ===============================
// SAVE RESUME
// ===============================

function saveResume() {

    let resumeData = {

        name:
            document.getElementById("name").value,

        email:
            document.getElementById("email").value,

        phone:
            document.getElementById("phone").value,

        education:
            document.getElementById("education").value,

        skills:
            document.getElementById("skills").value,

        experience:
            document.getElementById("experience").value,

        summary:
            document.getElementById("summary").value,

        projects:
            document.getElementById("projects").value,

        languages:
            document.getElementById("languages").value,

        github:
            document.getElementById("github").value,

        linkedin:
            document.getElementById("linkedin").value,

        template:
            document.getElementById("template").value
    };


    localStorage.setItem(
        "savedResume",
        JSON.stringify(resumeData)
    );


    alert("Resume saved successfully! ✅");
}


// ===============================
// LOAD SAVED RESUME
// ===============================

function loadSavedResume() {

    let savedData =
        localStorage.getItem("savedResume");


    if (!savedData) {

        alert("No saved resume found! ❌");
        return;
    }


    let resumeData =
        JSON.parse(savedData);


    document.getElementById("name").value =
        resumeData.name || "";

    document.getElementById("email").value =
        resumeData.email || "";

    document.getElementById("phone").value =
        resumeData.phone || "";

    document.getElementById("education").value =
        resumeData.education || "";

    document.getElementById("skills").value =
        resumeData.skills || "";

    document.getElementById("experience").value =
        resumeData.experience || "";

    document.getElementById("summary").value =
        resumeData.summary || "";

    document.getElementById("projects").value =
        resumeData.projects || "";

    document.getElementById("languages").value =
        resumeData.languages || "";

    document.getElementById("github").value =
        resumeData.github || "";

    document.getElementById("linkedin").value =
        resumeData.linkedin || "";

    document.getElementById("template").value =
        resumeData.template || "classic";


    alert("Saved resume loaded! ✅");


    // Automatically display the resume

    generateResume();
}


// ===============================
// DELETE SAVED RESUME
// ===============================

function deleteSavedResume() {

    let savedData =
        localStorage.getItem("savedResume");


    if (!savedData) {

        alert("No saved resume found! ❌");
        return;
    }


    let confirmDelete =
        confirm(
            "Are you sure you want to delete your saved resume?"
        );


    if (confirmDelete) {

        localStorage.removeItem("savedResume");

        alert("Saved resume deleted! 🗑️");
    }
}


// ===============================
// CLEAR FORM
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

    document.getElementById("photo").value = "";

    document.getElementById("template").value =
        "classic";

    document.getElementById("resume").innerHTML = "";

    document.getElementById("resume").className = "";


    alert("Form cleared! 🧹");
}


// ===============================
// DOWNLOAD / PRINT PDF
// ===============================

function downloadPDF() {

    window.print();

}


// ===============================
// DARK MODE
// ===============================

function darkMode() {

    let resume =
        document.getElementById("resume");


    resume.classList.toggle("dark");

}
