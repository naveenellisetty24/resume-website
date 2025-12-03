function updateResume() {
  document.getElementById("v_name").innerText =
    document.getElementById("name").value;

  const dobVal = document.getElementById("dob").value;
  let dobText = "";

  if (dobVal) {
    const d = new Date(dobVal);
    dobText =
      String(d.getDate()).padStart(2,"0") + "-" +
      String(d.getMonth()+1).padStart(2,"0") + "-" +
      d.getFullYear();
  }

  document.getElementById("v_personal").innerText =
    `${dobText} | ${location.value} | ${email.value} | ${phone.value}`;

  document.getElementById("v_summary").innerText =
    document.getElementById("summary").value;

  // Education
  let eduText = "";
  document.querySelectorAll(".edu-box").forEach(box => {
    const inst = box.querySelector(".edu-inst").value;
    const start = box.querySelector(".edu-start").value;
    const end = box.querySelector(".edu-end").value;
    const course = box.querySelector(".edu-course").value;
    const perc = box.querySelector(".edu-percent").value;

    if (inst) {
      eduText += `${inst} | ${start} – ${end}\n`;
      eduText += `${course}\nPercentage: ${perc}\n\n`;
    }
  });
  document.getElementById("v_education").innerText = eduText.trim();

  // Projects
  let projText = "";
  document.querySelectorAll(".project-box").forEach(box => {
    const title = box.querySelector(".proj-title").value;
    const desc = box.querySelector(".proj-desc").value;
    if (title) projText += `${title}\n${desc}\n\n`;
  });
  document.getElementById("v_projects").innerText = projText.trim();

  document.getElementById("v_skills").innerText =
    document.getElementById("skills").value;

  document.getElementById("v_internship").innerText =
    intern_org.value + "\n" + intern_role.value + "\n" + intern_desc.value;

  document.getElementById("v_certs").innerText =
    document.getElementById("certs").value;

  document.getElementById("v_hobbies").innerText =
    document.getElementById("hobbies").value;
}

function addEducation() {
  const div = document.createElement("div");
  div.className = "edu-box";
  div.innerHTML = `
    <input class="edu-inst" placeholder="Institute Name">
    <input class="edu-start" placeholder="Start Year">
    <input class="edu-end" placeholder="End Year">
    <input class="edu-course" placeholder="Course / Degree">
    <input class="edu-percent" placeholder="Percentage / CGPA">
  `;
  document.getElementById("education-list").appendChild(div);
}

function addProject() {
  const div = document.createElement("div");
  div.className = "project-box";
  div.innerHTML = `
    <input class="proj-title" placeholder="Project Title">
    <textarea class="proj-desc" placeholder="Project Description"></textarea>
  `;
  document.getElementById("project-list").appendChild(div);
}

function toggleDark() {
  document.body.classList.toggle("dark-mode");
}

function downloadResume() {
  window.print();
}
