const project_links = [
    "https://github.com/Riteshbhalerao11/Supply_chain_shell_2023",
    "https://github.com/Riteshbhalerao11/Enabled",
    "https://github.com/Riteshbhalerao11/csi-mobile-app-2021-2022",
    "https://github.com/SpecularAura/PredictForestFire"
]

const project_images = [
    "https://www.shell.com/energy-and-innovation/digitalisation/digital-and-ai-competitions/shell-ai-hackathon-for-sustainable-and-affordable-energy/_jcr_content/root/main/section/simple/promo.coreimg.png/1688303106210/shell-ai-hackathon-for-sustainable-and-affordable-energy-updated-.png?imwidth=1118&impolicy=amidala-image&imformat=chrome",
    "https://raw.githubusercontent.com/SpecularAura/FreeCodeCampCourses/main/ResponsiveWebDesign/PersonalPortfolio/EnabledNew.png",
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRXPHVE94c-Wn_Hkra6Z0Z5bDBAxRYvW1HlbjEpwwA3z3sCqgm0",
    "https://raw.githubusercontent.com/SpecularAura/FreeCodeCampCourses/main/ResponsiveWebDesign/PersonalPortfolio/Screenshot%202023-03-06%20135241.png",
]

const project_titles = [
    "Biomass supply chain",
    "Enabled",
    "CSI mobile app",
    "Forest Fire Prediction using ML",
]

function addProjects() {
    let projectContainer = document.getElementById("project-container");
    let i;
    let curDiv;
    let curDivHTML;
    for (i = 0; i < project_images.length; i++) {
        if (i % 2 == 0) {
            curDiv = document.createElement("div");
            curDiv.classList.add("row")
            curDivHTML = `<a target="_blank" href="${project_links[i]}"
            class="project-tile col-md d-flex flex-column justify-content-center">
                <div class="img-div"><img
                    src="${project_images[i]}"
                    alt=""></div>
                <div class="btn btn-hover"><span class="h3 text-light">${project_titles[i]}</span></div>
            </a>`
        }
        else {
            curDivHTML += `<a target="_blank" href="${project_links[i]}"
            class="project-tile col-md d-flex flex-column justify-content-center">
                <div class="img-div"><img
                    src="${project_images[i]}"
                    alt=""></div>
                <div class="btn btn-hover"><span class="h3 text-light">${project_titles[i]}</span></div>
            </a>`
            curDiv.innerHTML = curDivHTML;
            projectContainer.appendChild(curDiv);
        }
    }
    console.log(projectContainer)
}

addProjects();


function toggleProjects(event) {
    const projectContainer = document.getElementById("project-container");
    const icon = document.getElementById("toggle-icon");
    icon.classList.toggle("fa-sort-down");
    icon.classList.toggle("fa-sort-up");
    icon.classList.toggle("adjust-pos");
    projectContainer.classList.toggle("hide");
}

document.getElementById("toggle-projects").addEventListener("click", toggleProjects)