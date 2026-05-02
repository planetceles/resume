const resumeUrl = "",
const resumeData = document.querySelector("#resume");

async function getResumeData() {
    try {
        const response = await fetch(resumeUrl);
        const data = await response.json();

        displayResume(data);
    }
    catch (error) {
        console.error("Resume fetch error:", error);
    }
}
getResumeData();

const displayResume = (resume) => {
    resume.forEach((details) => {
        let resumePaper = document.createElement("section");
        let resumeName = document.createElement("h2");
        let resumeEmail = document.createElement("p");
        let resumePhone = document.createElement("p");
        let resumeLinkedIn = document.createElement("p");
        let resumeAddress = document.createElement("p");
        let resumeTitle = document.createElement("p");
        let resumeSummary = document.createElement("p");
        let resumeSkills = document.createElement("ul");
        let resumeExperience = document.createElement("ul");
        let resumeEducation = document.createElement("ul");

        resumePaper.classList.add("resume-card");

        details.skills.forEach(skill => {
            let skillList = document.createElement("li");
            skillList.textContent = skill;
            resumeSkills.appendChild(skillList);
        });
        details.experience.forEach(expert => {
            let experienceList = document.createElement("li");
            experienceList.textContent = expert;
            resumeExperience.appendChild(experienceList);
        });
        details.education.forEach(educated => {
            let educationList = document.createElement("li");
            educationList.textContent = educated;
            resumeEducation.appendChild(educationList);
        });

        resumeName.textContent = `${details.name}`;
        resumeEmail.textContent = `${details.email}`;
        resumePhone.textContent = `${details.phone}`;
        resumeLinkedIn.innerHTML = `<a href="${details.linkedIn}" target="_blank">My LinkedIn Profile</a>`;
        resumeAddress.textContent = `${details.address}`;
        resumeTitle.textContent = `${details.title}`;
        resumeSummary.textContent = `${details.summary}`;

        resumePaper.appendChild(resumeName);
        resumePaper.appendChild(resumeEmail);
        resumePaper.appendChild(resumePhone);
        resumePaper.appendChild(resumeLinkedIn);
        resumePaper.appendChild(resumeAddress);
        resumePaper.appendChild(resumeTitle);
        resumePaper.appendChild(resumeSummary);
        resumePaper.appendChild(resumeSkills);
        resumePaper.appendChild(resumeExperience);
        resumePaper.appendChild(resumeEducation);

        resumeData.appendChild(resumePaper);
    });
}
