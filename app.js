function updateResume() {
    v_name.innerText = rname.value;
    v_dob.innerText = dob.value;
    v_location.innerText = location.value;
  
    v_summary.innerText = summary.value;
    v_education.innerText = education.value;
    v_experience.innerText = experience.value;
    v_skills.innerText = skills.value;
    v_projects.innerText = projects.value;
    v_internships.innerText = internships.value;
    v_hobbies.innerText = hobbies.value;
    v_contact.innerText = contact.value;
  }
  
  function downloadResume() {
    window.print();
  }
  