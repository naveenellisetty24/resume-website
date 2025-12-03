/************ 🔥 FIREBASE SETUP ************/
const firebaseConfig = {
  apiKey: "AIzaSyDiumnp3bl57YJJudjy-_6fRyMoWZ7UTf0",
  authDomain: "resume-website-66e79.firebaseapp.com",
  projectId: "resume-website-66e79",
  storageBucket: "resume-website-66e79.appspot.com",
  messagingSenderId: "971947507906",
  appId: "1:971947507906:web:f942c663d4a20d962bfb5b"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

/************ 🔄 UPDATE RESUME PREVIEW ************/
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

  // ===== EDUCATION (MULTIPLE) =====
  let eduText = "";
  document.querySelectorAll(".edu-box").forEach(box => {
    const inst = box.querySelector(".edu-inst").value;
    const start = box.querySelector(".edu-start").value;
    const end = box.querySelector(".edu-end").value;
    const course = box.querySelector(".edu-course").value;
    const perc = box.querySelector(".edu-percent").value;

    if (inst) {
      eduText += inst;
      if (start || end) eduText += ` | ${start} – ${end}`;
      eduText += "\n";
      if (course) eduText += `${course}\n`;
      if (perc) eduText += `Percentage: ${perc}\n`;
      eduText += "\n";
    }
  });
  document.getElementById("v_education").innerText = eduText.trim();

  // ===== PROJECTS (MULTIPLE) =====
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

/************ ➕ ADD FIELDS ************/
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

/************ 🌙 DARK MODE ************/
function toggleDark() {
  document.body.classList.toggle("dark-mode");
}

/************ 💾 SAVE TO FIRESTORE ************/
function saveResumeToFirestore() {
  db.collection("resumes").add({
    name: document.getElementById("name").value,
    dob: document.getElementById("dob").value,
    location: document.getElementById("location").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    summary: document.getElementById("summary").value,
    skills: document.getElementById("skills").value,
    createdAt: new Date()
  })
  .then(() => console.log("✅ Resume saved to Firestore"))
  .catch(err => console.error("❌ Firestore error:", err));
}

/************ ⬇ DOWNLOAD PDF ************/
function downloadResume() {
  saveResumeToFirestore();   // ✅ save user data
  window.print();            // ✅ download PDF
}
