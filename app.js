function updateResume() {
  v_name.innerText = name.value;

  if (dob.value) {
    const d = new Date(dob.value);
    v_personal.innerText =
      `${String(d.getDate()).padStart(2,"0")}-${String(d.getMonth()+1).padStart(2,"0")}-${d.getFullYear()} | ${location.value} | ${email.value} | ${phone.value}`;
  }

  v_summary.innerText = summary.value;

  v_education.innerText =
    `${edu_inst.value} | ${edu_years.value}\n${edu_course.value}\nPercentage: ${edu_percent.value}`;

  v_skills.innerText = skills.value;

  v_projects.innerText =
    `${proj_title.value}\n${proj_desc.value}`;

  v_internship.innerText =
    `${intern_org.value}\n${intern_role.value}\n${intern_desc.value}`;

  v_certs.innerText = certs.value;
  v_hobbies.innerText = hobbies.value;
}

function downloadResume() {
  window.print();
}
