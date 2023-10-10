function Project(projLink, projImg, projTitle, date) {
    this.projLink = projLink;
    this.projImg = projImg;
    this.projTitle = projTitle;
    this.date = date
}

const projects = [
    new Project(
        "https://github.com/SpecularAura/LearningOpenGL",
        "https://raw.githubusercontent.com/SpecularAura/FreeCodeCampCourses/cb1dbb7b0cf3aa4677efec16998315275870d24f/ResponsiveWebDesign/PersonalPortfolio/CGMiniProject.png",
        "Model Rendering in OpenGL",
        new Date('2020')
    ),
    new Project(
        "https://github.com/Riteshbhalerao11/Enabled",
        "https://raw.githubusercontent.com/SpecularAura/FreeCodeCampCourses/main/ResponsiveWebDesign/PersonalPortfolio/EnabledNew.png",
        "Enabled",
        new Date('2022')
    ),
    new Project(
        "https://github.com/VESITAIDS25/ZeroTwo-Refaktor",
        "https://raw.githubusercontent.com/SpecularAura/FreeCodeCampCourses/main/ResponsiveWebDesign/PersonalPortfolio/Hackathon.jpg",
        "Refaktor - JobEasy",
        new Date('2023')
    ),
    new Project(
        "https://github.com/SpecularAura/PredictForestFire",
        "https://raw.githubusercontent.com/SpecularAura/FreeCodeCampCourses/main/ResponsiveWebDesign/PersonalPortfolio/Screenshot%202023-03-06%20135241.png",
        "Forest Fire Prediction using ML",
        new Date('2022')
    ),
    new Project(
        "https://github.com/Maverick8479/Wordle",
        "https://raw.githubusercontent.com/SpecularAura/FreeCodeCampCourses/main/ResponsiveWebDesign/PersonalPortfolio/Wordle.png",
        "Python Wordle",
        new Date('2023')
    ),
    new Project(
        "https://github.com/SpecularAura/TurboCSetup",
        "https://raw.githubusercontent.com/SpecularAura/FreeCodeCampCourses/main/ResponsiveWebDesign/PersonalPortfolio/Screenshot%202023-05-22%20185941.png",
        "Script Collection TurboC",
        new Date('2022')
    )
]

function addProjects() {
    let projectContainer = document.getElementById("project-container");
    let i;
    let curDiv;
    let curDivHTML;
    for (i = 0; i < projects.length; i++) {
        if (i % 2 == 0) {
            curDiv = document.createElement("div");
            curDiv.classList.add("row")
            curDivHTML = `<a target="_blank" href="${projects[i].projLink}"
            class="project-tile col-md d-flex flex-column justify-content-center">
                <div class="img-div"><img
                    src="${projects[i].projImg}"
                    alt=""></div>
                <div class="btn btn-hover"><span class="h3 text-light">${projects[i].projTitle} (${projects[i].date.getFullYear()})</span></div>
            </a>`
        }
        else {
            curDivHTML += `<a target="_blank" href="${projects[i].projLink}"
            class="project-tile col-md d-flex flex-column justify-content-center">
                <div class="img-div"><img
                    src="${projects[i].projImg}"
                    alt=""></div>
                <div class="btn btn-hover"><span class="h3 text-light">${projects[i].projTitle} (${projects[i].date.getFullYear()})</span></div>
            </a>`
            curDiv.innerHTML = curDivHTML;
            projectContainer.appendChild(curDiv);
        }
    }
    console.log(projectContainer)
}

addProjects();

function validateName() {
    const name = document.getElementsByName('name')[0].value;
    if (name.length < 3)
    {
        const errMsg = "Your name should be more 3 characters";
        throw new Error(errMsg);
    }
}

function handleEmailContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementsByName('name')[0].value;
    const email = document.getElementsByName('email')[0].value;
    const messsage = document.getElementsByName('message')[0].value;
    const errBox = document.getElementById('validate-message')
    try {
        validateName();
        errBox.classList.add("show");
    } catch(e) {
        errBox.innerText = e.message;
        console.log(e.message);
        errBox.classList.remove("show");
    }
}

document.getElementById('email-contact').addEventListener("submit", handleEmailContactSubmit);

function toggleProjects(event) {
    const projectContainer = document.getElementById("project-container");
    const icon = document.getElementById("toggle-icon");
    icon.classList.toggle("fa-sort-down");
    icon.classList.toggle("fa-sort-up");
    icon.classList.toggle("adjust-pos");
    projectContainer.classList.toggle("hide");
}

document.getElementById("toggle-projects").addEventListener("click", toggleProjects)