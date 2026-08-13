// ==========================================
// ResumeAi - Complete script.js
// ==========================================


// ==========================================
// LIVE DATE
// ==========================================

function getLiveDate() {

    return new Date().toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }
    );
}


// ==========================================
// GET FORM DATA
// ==========================================

function getFormData() {

    return {

        name:
            document.getElementById("name")
            ?.value.trim() || "",

        email:
            document.getElementById("email")
            ?.value.trim() || "",

        phone:
            document.getElementById("phone")
            ?.value.trim() || "",

        jobTitle:
            document.getElementById("jobTitle")
            ?.value.trim() || "",

        education:
            document.getElementById("education")
            ?.value.trim() || "",

        skills:
            document.getElementById("skills")
            ?.value.trim() || "",

        experience:
            document.getElementById("experience")
            ?.value.trim() || "",

        summary:
            document.getElementById("summary")
            ?.value.trim() || "",

        projects:
            document.getElementById("projects")
            ?.value.trim() || "",

        languages:
            document.getElementById("languages")
            ?.value.trim() || "",

        github:
            document.getElementById("github")
            ?.value.trim() || "",

        linkedin:
            document.getElementById("linkedin")
            ?.value.trim() || "",

        template:
            document.getElementById("template")
            ?.value || "classic"
    };
}


// ==========================================
// SKILLS
// ==========================================

function makeSkillsHTML(skills) {

    if (!skills) {

        return `
            <li>
                Your skills will appear here.
            </li>
        `;
    }


    return skills
        .split(",")
        .map(skill => skill.trim())
        .filter(skill => skill !== "")
        .map(
            skill =>
                `<li>${skill}</li>`
        )
        .join("");
}


// ==========================================
// PROJECTS
// ==========================================

function makeProjectsHTML(projects) {

    if (!projects) {

        return `
            <li>
                Your projects will appear here.
            </li>
        `;
    }


    return projects
        .split(",")
        .map(project => project.trim())
        .filter(project => project !== "")
        .map(
            project =>
                `<li>${project}</li>`
        )
        .join("");
}


// ==========================================
// PROFILE LINKS
// ==========================================

function makeProfilesHTML(
    github,
    linkedin
) {

    let html = "";


    if (github) {

        html += `
            <p>
                <strong>GitHub:</strong>
                <a
                    href="${github}"
                    target="_blank"
                >
                    ${github}
                </a>
            </p>
        `;
    }


    if (linkedin) {

        html += `
            <p>
                <strong>LinkedIn:</strong>
                <a
                    href="${linkedin}"
                    target="_blank"
                >
                    ${linkedin}
                </a>
            </p>
        `;
    }


    if (!html) {

        html =
            "<p>Your profile links will appear here.</p>";
    }


    return html;
}


// ==========================================
// PHOTO
// ==========================================

function getPhotoHTML() {

    const photoInput =
        document.getElementById("photo");


    if (
        photoInput &&
        photoInput.files &&
        photoInput.files.length > 0
    ) {

        const imageURL =
            URL.createObjectURL(
                photoInput.files[0]
            );


        return `
            <img
                src="${imageURL}"
                class="resume-photo"
                alt="Profile Photo"
            >
        `;
    }


    return "";
}


// ==========================================
// TEMPLATE CLASS
// ==========================================

function getTemplateClass(template) {

    if (template === "modern") {

        return "modern-template";
    }


    if (template === "professional") {

        return "professional-template";
    }


    if (template === "creative") {

        return "creative-template";
    }


    if (template === "minimal") {

        return "minimal-template";
    }


    return "classic-template";
}


// ==========================================
// AI SUMMARY
// ==========================================

function generateAI() {

    const data =
        getFormData();


    const summaryBox =
        document.getElementById("summary");


    if (
        !data.name ||
        !data.education ||
        !data.skills ||
        !data.experience
    ) {

        alert(
            "Please fill Name, Education, Skills and Experience first!"
        );

        return;
    }


    let summary = "";


    if (
        data.experience
            .toLowerCase() === "fresher"
    ) {

        summary =
            "Motivated fresher with a strong willingness " +
            "to learn and grow professionally. Possesses " +
            "good knowledge and skills and is eager to " +
            "contribute positively to an organization.";

    } else {

        summary =
            "Experienced professional with strong practical " +
            "knowledge, problem-solving abilities and a " +
            "commitment to delivering quality work.";
    }


    summaryBox.value =
        summary;


    updateLivePreview();
}


// ==========================================
// LIVE PREVIEW
// ==========================================

function updateLivePreview() {

    const resume =
        document.getElementById("resume");


    if (!resume) return;


    const data =
        getFormData();


    const date =
        getLiveDate();


    const templateClass =
        getTemplateClass(
            data.template
        );


    const skillsHTML =
        makeSkillsHTML(
            data.skills
        );


    const projectsHTML =
        makeProjectsHTML(
            data.projects
        );


    const profilesHTML =
        makeProfilesHTML(
            data.github,
            data.linkedin
        );


    const photoHTML =
        getPhotoHTML();


    resume.innerHTML = `

        <div
            class="resume-card ${templateClass}"
        >

            <div class="resume-header">


                <div class="photo-area">

                    ${photoHTML}

                </div>


                <div class="resume-name">

                    <h1>
                        ${
                            data.name ||
                            "Your Name"
                        }
                    </h1>


                    <h3>
                        ${
                            data.jobTitle ||
                            "Job Title"
                        }
                    </h3>


                    <p>
                        ${
                            data.email ||
                            "your@email.com"
                        }

                        |

                        ${
                            data.phone ||
                            "Phone Number"
                        }
                    </p>

                </div>

            </div>


            <section>

                <h2>
                    Career Objective
                </h2>

                <p>
                    To obtain a challenging position
                    where I can apply my skills,
                    learn continuously, and
                    contribute to the organization's
                    success.
                </p>

            </section>


            <section>

                <h2>
                    Professional Summary
                </h2>

                <p>
                    ${
                        data.summary ||
                        "Your professional summary will appear here."
                    }
                </p>

            </section>


            <section>

                <h2>
                    Education
                </h2>

                <p>
                    ${
                        data.education ||
                        "Your education will appear here."
                    }
                </p>

            </section>


            <section>

                <h2>
                    Skills
                </h2>

                <ul>
                    ${skillsHTML}
                </ul>

            </section>


            <section>

                <h2>
                    Experience
                </h2>

                <p>
                    ${
                        data.experience ||
                        "Your experience will appear here."
                    }
                </p>

            </section>


            <section>

                <h2>
                    Projects
                </h2>

                <ul>
                    ${projectsHTML}
                </ul>

            </section>


            <section>

                <h2>
                    Languages
                </h2>

                <p>
                    ${
                        data.languages ||
                        "Your languages will appear here."
                    }
                </p>

            </section>


            <section>

                <h2>
                    Profiles
                </h2>

                ${profilesHTML}

            </section>


            <section>

                <h2>
                    Date
                </h2>

                <p>
                    ${date}
                </p>

            </section>


        </div>
    `;
}


// ==========================================
// GENERATE RESUME
// ==========================================

function generateResume() {

    const data =
        getFormData();


    if (
        !data.name ||
        !data.email ||
        !data.phone ||
        !data.education ||
        !data.skills ||
        !data.experience ||
        !data.projects ||
        !data.languages
    ) {

        alert(
            "Please fill all fields!"
        );

        return;
    }


    updateLivePreview();


    document
        .getElementById("resume")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
}


// ==========================================
// DARK MODE
// ==========================================

function darkMode() {

    document.body.classList.toggle(
        "dark-mode"
    );


    const button =
        document.querySelector(
            'button[onclick="darkMode()"]'
        );


    if (!button) return;


    if (
        document.body.classList.contains(
            "dark-mode"
        )
    ) {

        button.innerHTML =
            "☀️ Light Mode";

    } else {

        button.innerHTML =
            "🌙 Dark Mode";
    }
}


// ==========================================
// CLEAR FORM
// ==========================================

function clearForm() {

    const ids = [

        "name",
        "email",
        "phone",
        "jobTitle",
        "education",
        "skills",
        "experience",
        "summary",
        "projects",
        "languages",
        "github",
        "linkedin"

    ];


    ids.forEach(
        function(id) {

            const element =
                document.getElementById(id);


            if (element) {

                element.value = "";
            }

        }
    );


    const template =
        document.getElementById(
            "template"
        );


    if (template) {

        template.value =
            "classic";
    }


    const photo =
        document.getElementById(
            "photo"
        );


    if (photo) {

        photo.value = "";
    }


    updateLivePreview();


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });
}


// ==========================================
// DOWNLOAD PDF
// ==========================================

function downloadPDF() {

    const resume =
        document.getElementById(
            "resume"
        );


    if (
        !resume ||
        resume.innerHTML.trim() === ""
    ) {

        alert(
            "Resume preview is empty!"
        );

        return;
    }


    window.print();
}


// ==========================================
// PREMIUM
// ==========================================

function goPremium() {

    alert(
        "💎 ResumeAi Premium is coming soon!\n\n" +
        "Payment system will be added after the Premium design is finalized."
    );
}


// ==========================================
// AUTOMATIC LIVE PREVIEW
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {


        updateLivePreview();


        const inputIds = [

            "name",
            "email",
            "phone",
            "jobTitle",
            "education",
            "skills",
            "experience",
            "summary",
            "projects",
            "languages",
            "github",
            "linkedin",
            "template"

        ];


        inputIds.forEach(
            function(id) {

                const element =
                    document.getElementById(id);


                if (!element) return;


                element.addEventListener(
                    "input",
                    updateLivePreview
                );


                element.addEventListener(
                    "change",
                    updateLivePreview
                );

            }
        );


        const photo =
            document.getElementById(
                "photo"
            );


        if (photo) {

            photo.addEventListener(
                "change",
                updateLivePreview
            );

        }

    }
);
