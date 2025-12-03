function updateResume() {
  // Name
  const nameVal = document.getElementById("name").value;
  document.getElementById("v_name").innerText = nameVal;

  // DOB + personal line
  const dobInput = document.getElementById("dob").value;
  let dobText = "";
  if (dobInput) {
    const d = new Date(dobInput);
    if (!isNaN(d.getTime())) {
      dobText =
        String(d.getDate()).padStart(2, "0") + "-" +
        String(d.getMonth() + 1).padStart(2, "0") + "-" +
        d.getFullYear();
    }
  }

  const locVal = document.getElementById("location").value;
  const emailVal = document.getElementById("email").value;
  const phoneVal = document.getElementById("phone").value;

  const parts = [];
  if (dobText) parts.push(dobText);
  if (locVal) parts.push(locVal);
  if (emailVal) parts.push(emailVal);
  if (phoneVal) parts.push(phoneVal);

  document.getElementById("v_personal").innerText = parts.join(" | ");

  // Summary
  document.getElementById("v_summary").innerText =
    document.getElementById("summary").value;

  // ===== EDUCATION (multiple) =====
  let eduText = "";
  document.querySelectorAll(".edu-box").forEach(box => {
    const inst = box.querySelector(".edu-inst").value;
    const start = box.querySelector(".edu-start").value;
    const end = box.querySelector(".edu-end").value;
    const course = box.querySelector(".edu-course").value;
    const perc = box.querySelector(".edu-percent").value;

    if (inst) {
      eduText += `${inst}`;
      if (start || end) eduText += ` | ${start} – ${end}`;
      eduText += "\n";
      if (course) eduText += `${course}\n`;
      if (perc) eduText += `Percentage: ${perc}\n`;
      eduText += "\n";
    }
  });
  document.getElementById("v_education").innerText = eduText.trim();

  // ===== PROJECTS (multiple) =====
  let projText = "";
  document.querySelectorAll(".project-box").forEach(box => {
    const title = box.querySelector(".proj-title").value;
    const desc = box.querySelector(".proj-desc").value;
    if (title) {
      projText += `${title}\n`;
      if (desc) projText += `${desc}\n`;
      projText += "\n";
    }
  });
  document.getElementById("v_projects").innerText = projText.trim();

  // Skills
  document.getElementById("v_skills").innerText =
    document.getElementById("skills").value;

  // Internship
  const org = document.getElementById("intern_org").value;
  const role = document.getElementById("intern_role").value;
  const desc = document.getElementById("intern_desc").value;
  let internText = "";
  if (org) internText += org + "\n";
  if (role) internText += role + "\n";
  if (desc) internText += desc;
  document.getElementById("v_internship").innerText = internText.trim();

  // Certifications
  document.getElementById("v_certs").innerText =
    document.getElementById("certs").value;

  // Hobbies
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
