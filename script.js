function generateResume() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let education = document.getElementById("education").value;
    let skills = document.getElementById("skills").value;
    let experience = document.getElementById("experience").value;
    let projects = document.getElementById("projects").value;
    let languages = document.getElementById("languages").value;
    let github = document.getElementById("github").value;
    let linkedin = document.getElementById("linkedin").value;
    let today = new Date().toLocaleDateString();
    let photo = document.getElementById("photo").files[0];
    let template = document.getElementById("template").value;
    let skillsList = skills.split(",");
    let  summary = document.getElementById("summary").value;
    if(summary===""){
        summary = "Motivated professional with skill in " + skills +
        ".Ready to learn and contribute to projects.";
    }


    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        education === "" ||
        skills === "" ||
        experience === "" ||
        projects === ""||
        languages === "" ||
        github === "" ||
        linkedin === ""
    ) {
        alert("Please fill all fields!");
        return;
    }
     let resume =
     document.getElementById("resume");

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

    document.getElementById("resume").innerHTML = `
        <h2>My Resume</h2>
        <hr>

        ${photo ? `<img src="${URL.createObjectURL(photo)}" width="120" height="120" style="border-radius:50%;object-fit:cover;">` : ""}

        <p>👤 <strong>Name:</strong> ${name}</p>
        <p>📧 <strong>Email:</strong> ${email}</p>
        <p>📞 <strong>Phone:</strong> ${phone}</p>
        <p>🎓 <strong>Education:</strong> ${education}</p>
        <p>💻 <strong>Skills:</strong></p>
<ul>
    ${skillsList.map(skill => `<li>${skill.trim()}</li>`).join("")}
</ul>
        <p>💼 <strong>Experience:</strong> ${experience}</p>
        <p>📂 <strong>Projects:</strong></p>
<p>${projects}</p>
        <p>🗣️ <strong>Languages:</strong></p>
<p>${languages}</p>
<p>🐙 <strong>GitHub:</strong></p>
<p><a href="${github}" target="_blank">${github}</a></p>
<p>💼<strong>Linkedin:</strong></p>
<p><a href="${linkedin}" target="_blank">${linkedin}</a></p>

        <p><strong>Professional Summary:</strong></p>
        <p>${summary}</p>

        <p><strong>🎯 Career Objective:</strong></p>
        <p>To obtain a challenging position where I can apply my skills, learn continuously, and contribute to the organization's success.</p>

        <p>📅 <strong>Date:</strong> ${today}</p>
    `;}

function clearForm()
 {
    
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("education").value = "";
    document.getElementById("skills").value = "";
    document.getElementById("experience").value = "";
    document.getElementById("photo").value = "";
    document.getElementById("resume").innerHTML = "";
    document.getElementById("summary").value = "";

}
function downloadPDF(){
        window.print();
    }

// AI Summary Generator

function generateAI(){

    let skills = document.getElementById("skills").value.trim();
    let experience = document.getElementById("experience").value.trim();

    let aiSummary = "";

    if(experience.toLowerCase() === "fresher"){

        aiSummary =
        "Motivated and enthusiastic fresher with knowledge of "
        + skills +
        ". Quick learner with strong problem-solving abilities and a willingness to learn new technologies. Seeking an opportunity to apply my skills and contribute to a professional organization.";

    } 
    else {

        aiSummary =
        "Experienced professional with expertise in "
        + skills +
        ". Demonstrated ability to solve problems, work effectively in a team, and deliver quality results. Seeking opportunities to apply my experience and contribute to organizational growth.";

    }

    document.getElementById("summary").value = aiSummary;

}

    function darkMode(){
        let resume =
        document.getElementById("resume");

        resume.classList.toggle("dark");
    }