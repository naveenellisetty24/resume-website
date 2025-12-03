function updateResume() {
  document.getElementById("v_name").innerText =
    document.getElementById("rname").value;

  document.getElementById("v_dob").innerText =
    document.getElementById("dob").value;

  document.getElementById("v_location").innerText =
    document.getElementById("location").value;

  document.getElementById("v_summary").innerText =
    document.getElementById("summary").value;

  document.getElementById("v_education").innerText =
    document.getElementById("education").value;

  document.getElementById("v_experience").innerText =
    document.getElementById("experience").value;

  document.getElementById("v_skills").innerText =
    document.getElementById("skills").value;

  document.getElementById("v_projects").innerText =
    document.getElementById("projects").value;

  document.getElementById("v_internships").innerText =
    document.getElementById("internships").value;

  document.getElementById("v_hobbies").innerText =
    document.getElementById("hobbies").value;

  document.getElementById("v_contact").innerText =
    document.getElementById("contact").value;
}

function downloadResume() {
  window.print();
}
