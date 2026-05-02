const resumeUrl = "https://planetceles.github.io/resume/data/resume.json";
const resumeData = document.querySelector("#resume");

async function getResumeData() {
    try {
        const response = await fetch(resumeUrl);
        const data = await response.json();

        displayResume(data.resume);
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
        let resumeExperience = document.createElement("div");
        // let resumeResponsibilities = document.createElement("ul");
        let resumeEducation = document.createElement("ul");

        resumePaper.classList.add("resume-card");

        details.skills.forEach(skill => {
            let skillList = document.createElement("li");
            skillList.textContent = skill;
            resumeSkills.appendChild(skillList);
        });
        details.experience.forEach(expert => {
            let experienceBlock = document.createElement("div");
            let experienceTitle = document.createElement("p");
            let responsibilitiesList = document.createElement("ul");

            expert.responsibilities.forEach(responsibility => {
                let responsibilityList = document.createElement("li");
                responsibilityList.textContent = responsibility;
                responsibilitiesList.appendChild(responsibilityList);
            });
            experienceTitle.textContent = `${expert.position} | ${expert.company} | ${expert.duration}`;
            experienceBlock.appendChild(experienceTitle);
            experienceBlock.appendChild(responsibilitiesList);
            resumeExperience.appendChild(experienceBlock);
        });
        details.education.forEach(educated => {
            let educationBlock = document.createElement("li");
            let educationTitle = document.createElement("p");
            let educationInstitution = document.createElement("p");
            let educationSkills = document.createElement("p");

            // educated.skills.forEach(skill => {
            //     let eduSkillList = document.createElement("span");
            //     eduSkillList.textContent = skill;
            //     educationSkills.appendChild(eduSkillList);
            // });
            educationSkills.textContent = `${educated.skills.join(", ")}`;

            // educated.institution.forEach(inst => {
            //     let institutionList = document.createElement("span");
            //     institutionList.textContent = inst;
            //     educationInstitution.appendChild(institutionList);
            // });
            // educationList.textContent = educated;
            educationTitle.textContent = `${educated.degree} | (${educated.duration})`;
            educationInstitution.textContent = `${educated.institution}`;

            educationBlock.appendChild(educationTitle);
            educationBlock.appendChild(educationInstitution);
            educationBlock.appendChild(educationSkills);
            resumeEducation.appendChild(educationBlock);
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
        // resumePaper.appendChild(resumeResponsibilities);
        resumePaper.appendChild(resumeEducation);

        resumeData.appendChild(resumePaper);
    });
}
