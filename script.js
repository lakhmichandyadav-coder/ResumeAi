// ==============================
// ELEMENTS
// ==============================

const nameInput = document.getElementById("name");
const jobTitleInput = document.getElementById("jobTitle");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const photoInput = document.getElementById("photo");

const templateInput = document.getElementById("template");

const educationInput = document.getElementById("education");
const skillsInput = document.getElementById("skills");
const experienceInput = document.getElementById("experience");

const summaryInput = document.getElementById("summary");
const projectsInput = document.getElementById("projects");
const languagesInput = document.getElementById("languages");

const githubInput = document.getElementById("github");
const linkedinInput = document.getElementById("linkedin");


// ==============================
// LIVE PREVIEW ELEMENTS
// ==============================

const resume = document.getElementById("resume");

const previewName = document.getElementById("previewName");
const previewJobTitle = document.getElementById("previewJobTitle");

const previewEmail = document.getElementById("previewEmail");
const previewPhone = document.getElementById("previewPhone");

const previewPhoto = document.getElementById("previewPhoto");

const previewSummary = document.getElementById("previewSummary");
const previewEducation = document.getElementById("previewEducation");
const previewExperience = document.getElementById("previewLanguages");

const previewSkills = document.getElementById("previewSkills");
const previewProjects = document.getElementById("previewProjects");

const previewLanguages = document.getElementById("previewLanguages");

const previewGithub = document.getElementById("previewGithub");
const previewLinkedin = document.getElementById("previewLinkedin");


// ==============================
// UPDATE LIVE PREVIEW
// ==============================

function updatePreview() {

    previewName.textContent =
        nameInput.value || "Your Name";

    previewJobTitle.textContent =
        jobTitleInput.value || "Job Title";

    previewEmail.textContent =
        emailInput.value || "Email";

    previewPhone.textContent =
        phoneInput.value || "Phone";

    previewSummary.textContent =
        summaryInput.value ||
        "Your professional summary will appear here.";

    previewEducation.textContent =
        educationInput.value ||
        "Your education will appear here.";

    previewExperience.textContent =
        experienceInput.value ||
        "Your experience will appear here.";

    previewLanguages.textContent =
        languagesInput.value ||
        "Your languages will appear here.";


    // Skills

    previewSkills.innerHTML = "";

    const skills = skillsInput.value
        .split(",")
        .map(skill => skill.trim())
        .filter(skill => skill !== "");

    skills.forEach(skill => {

        const li = document.createElement("li");

        li.textContent = skill;

        previewSkills.appendChild(li);

    });


    // Projects

    previewProjects.innerHTML = "";

    const projects = projectsInput.value
        .split(",")
        .map(project => project.trim())
        .filter(project => project !== "");

    projects.forEach(project => {

        const li = document.createElement("li");

        li.textContent = project;

        previewProjects.appendChild(li);

    });


    // GitHub

    if (githubInput.value.trim() !== "") {

        previewGithub.href = githubInput.value;

        previewGithub.style.display = "inline";

    } else {

        previewGithub.style.display = "none";

    }


    // LinkedIn

    if (linkedinInput.value.trim() !== "") {

        previewLinkedin.href = linkedinInput.value;

        previewLinkedin.style.display = "inline";

    } else {

        previewLinkedin.style.display = "none";

    }


    // Template

    resume.classList.remove(
        "modern",
        "professional",
        "creative",
        "minimal"
    );

    if (templateInput.value !== "classic") {

        resume.classList.add(templateInput.value);

    }

}


// ==============================
// LIVE INPUT EVENTS
// ==============================

const allInputs = document.querySelectorAll(
    "input, textarea, select"
);

allInputs.forEach(input => {

    input.addEventListener(
        "input",
        updatePreview
    );

    input.addEventListener(
        "change",
        updatePreview
    );

});


// ==============================
// PHOTO PREVIEW
// ==============================

photoInput.addEventListener("change", function () {

    const file = photoInput.files[0];

    if (!file) {

        previewPhoto.style.display = "none";

        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {

        previewPhoto.src = event.target.result;

        previewPhoto.style.display = "block";

    };

    reader.readAsDataURL(file);

});


// ==============================
// AI SUMMARY
// ==============================

function generateAI() {

    const name = nameInput.value.trim();
    const job = jobTitleInput.value.trim();
    const skills = skillsInput.value.trim();
    const experience = experienceInput.value.trim();

    if (
        name === "" ||
        job === "" ||
        skills === ""
    ) {

        alert(
            "Please fill Name, Job Title and Skills first."
        );

        return;
    }


    let summary = "";


    if (
        experience.toLowerCase().includes("fresher")
    ) {

        summary =
            `Motivated fresher seeking an opportunity as a ${job}. ` +
            `Strong interest in developing professional skills and applying knowledge of ${skills}. ` +
            `Eager to learn, grow and contribute to the organization.`;

    } else {

        summary =
            `Experienced ${job} with strong knowledge of ${skills}. ` +
            `Demonstrated ability to learn quickly, solve problems and contribute effectively to professional projects.`;

    }


    summaryInput.value = summary;

    updatePreview();

}


// ==============================
// GENERATE RESUME
// ==============================

function generateResume() {

    if (
        nameInput.value.trim() === "" ||
        emailInput.value.trim() === "" ||
        phoneInput.value.trim() === "" ||
        educationInput.value.trim() === "" ||
        skillsInput.value.trim() === "" ||
        experienceInput.value.trim() === "" ||
        projectsInput.value.trim() === "" ||
        languagesInput.value.trim() === ""
    ) {

        alert("Please fill all required fields!");

        return;
    }


    updatePreview();

    alert("Resume generated successfully!");


    resume.scrollIntoView({
        behavior: "smooth"
    });

}


// ==============================
// DARK MODE
// ==============================

function darkMode() {

    document.body.classList.toggle("dark");

}


// ==============================
// CLEAR FORM
// ==============================

function clearForm() {

    nameInput.value = "";
    jobTitleInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";

    photoInput.value = "";

    templateInput.value = "classic";

    educationInput.value = "";
    skillsInput.value = "";
    experienceInput.value = "";

    summaryInput.value = "";

    projectsInput.value = "";
    languagesInput.value = "";

    githubInput.value = "";
    linkedinInput.value = "";

    previewPhoto.style.display = "none";

    updatePreview();

}


// ==============================
// DOWNLOAD PDF
// ==============================

function downloadPDF() {

    updatePreview();

    window.print();

}


// ==============================
// INITIAL PREVIEW
// ==============================

updatePreview();
