const form = document.getElementById("projectForm");
const projectList = document.getElementById("projectList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("projectName").value;
  const start = document.getElementById("startDate").value;
  const end = document.getElementById("endDate").value;
  const desc = document.getElementById("description").value;
  const imageInput = document.getElementById("uploadImage");
  const checkboxes = document.querySelectorAll(".tech-checkboxes input[type='checkbox']");

  const selectedTechs = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  const reader = new FileReader();
  reader.onload = function () {
    const imageUrl = reader.result;

    const duration = getDuration(start, end);

    const techIcons = selectedTechs.map(tech => {
      if (tech === "Node Js") return `<i>🟩</i>`;
      if (tech === "React Js") return `<i>⚛️</i>`;
      if (tech === "Next Js") return `<i>⬛</i>`;
      if (tech === "TypeScript") return `<i>🔵</i>`;
    }).join(" ");

    const projectCard = `
      <div class="project-card">
        <img src="${imageUrl}" />
        <h3>${name} - ${new Date(start).getFullYear()}</h3>
        <small>durasi: ${duration}</small>
        <p>${desc}</p>
        <div class="tech-icons">${techIcons}</div>
        <button onclick="editProject(this)">edit</button>
        <button onclick="deleteProject(this)">delete</button>
      </div>
    `;

    projectList.innerHTML += projectCard;
    form.reset();
  };

  reader.readAsDataURL(imageUpload.files[0]);
});

function getDuration(start, end) {
  const s = new Date(start);
  const e = new Date(end);
  const months = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
  return `${months || 1} bulan`;
}

function deleteProject(button) {
  button.parentElement.remove();
}

function editProject(button) {
  alert("Edit function is not implemented yet.");
}
