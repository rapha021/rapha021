const body = document.querySelector("body");
const container = document.querySelector(".container");
const projectsList = document.querySelector(".projects-list");

function listarProjetos(projetos) {
  for (let i = 0; i < projetos.length; i++) {
    const projectItem = document.createElement("li");
    const projectImg = document.createElement("img");
    const projectLink = document.createElement("a");
    const projectTitle = document.createElement("h3");

    projectItem.appendChild(projectImg);
    projectLink.appendChild(projectItem);
    projectItem.appendChild(projectTitle);
    projectsList.appendChild(projectLink);

    // Set id projeto
    projectItem.id = projetos[i].id;

    // Imagem do projeto
    projectImg.src = projetos[i].img;

    // Titulo do projeto
    projectTitle.innerText = projetos[i].name;

    // Link do projeto
    projectLink.href = projetos[i].link;
    projectLink.target = "_blank";
  }
}

listarProjetos(projetos);
