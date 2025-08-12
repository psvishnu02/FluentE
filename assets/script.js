

// course page 
const courseContent = {
  spokene: {
    title: "Spoken English",
    // image: "",
    description: `
     Speak with confidence and accuracy through FluentE’s Spoken English Grammar class. This course focuses on practical grammar used in everyday conversations, helping 
     you sound natural and fluent. Learn how to form correct sentences, ask questions, and express ideas clearly—without overthinking rules. With real-life dialogues, 
     interactive speaking practice, and expert guidance, you’ll build a strong foundation for confident spoken English.
    `,
    meta: ["36 Hours", "4 Weeks", "3 Certificates"]
  },
  grammer: {
    title: "Grammer",
    // image: "",
    description: `
      Master the building blocks of English with our interactive Grammar Class at FluentE. Designed for learners of all levels, this course helps you understand and apply grammar rules with clarity and confidence.
      Through practical examples, engaging exercises, and real-life communication practice, you'll strengthen your speaking, writing, and comprehension skills. Whether you're polishing your basics or advancing to complex 
      structures, our expert instructors guide you every step of the way.
    `,
    meta: ["30 Hours", "3 Weeks", "2 Certificates"]
  },
  ielts: {
    title: "IELTS Training",
    // image: "",
    description: `
    Get the score you need with FluentE’s comprehensive IELTS Preparation course. Designed to improve your skills in Listening, Reading, Writing, and Speaking, this
     course provides targeted strategies, timed practice tests, and personalized feedback to help you succeed. Our expert instructors guide you through each section of
    the exam with tips, techniques, and real IELTS-style exercises, so you can approach test day with confidence and clarity.
    `,
    meta: ["32 Hours", "4 Weeks", "2 Certificates"]
  },
  buisness: {
    title: "Buisness English",
    // image: "",
    description: `
    Advance your career with FluentE’s Business English course, designed for professionals who want to communicate confidently in the global workplace. Whether you're
     writing emails, leading meetings, making presentations, or networking, this course helps you master the language of business. With real-world scenarios,
      industry-relevant vocabulary, and personalized coaching, you’ll build the skills you need to succeed in any professional setting.
    `,
    meta: ["25 Hours", "3 Weeks", "1 Certificate"]
  }
};

function showCourse(courses, event) {
  const detail = document.getElementById("course-details");
  const data = courseContent[courses];
  document.querySelectorAll(".menu-btn").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  detail.innerHTML = `
    <h2>${data.title}</h2>
    <p>${data.description}</p>
    <div class="course-meta">
      <div>${data.meta[0]}</div>
      <div>${data.meta[1]}</div>
      <div>${data.meta[2]}</div>
    </div>
    <a class="subscribe" href="/form.html">Register Now</a>
  `;
}

// Load default course
document.addEventListener("DOMContentLoaded", () => showCourse('spokene', { target: document.querySelector('.menu-btn') }));


// formvalidation 
document.getElementById("formr").addEventListener("submit", (event)=> {
    var username = document.getElementById("name").value.trim();
    var mail = document.getElementById("email").value.trim();
    var mob = document.getElementById("mob").value.trim();
    var age = document.getElementById("age").value.trim();
    var course = document.getElementById("course").value;
    var mode = document.getElementById("mode").value;
    var level = document.getElementById("level").value;
    var occupation = document.getElementById("occupation").value;

    var nameErr = document.getElementById("nameerror");
    var mailErr = document.getElementById("mailerror");
    var mobErr = document.getElementById("moberror");
    var ageErr = document.getElementById("ageerror");
    var courseErr = document.getElementById("courseerror");
    var modeErr = document.getElementById("modeerror");
    var levelErr = document.getElementById("levelerror");
    var ocpErr = document.getElementById("ocperror");
            
    nameErr.textContent = "";
    mailErr.textContent = "";
    mobErr.textContent = "";
    ageErr.textContent = "";
    ageErr.textContent = "";
    ageErr.textContent = "";
    ageErr.textContent = "";
    courseErr.textContent = "";
    modeErr.textContent = "";
    levelErr.textContent = "";
    ocpErr.textContent = "";

    var isValid = true;

    // namevalid 
    var namepattern = /^[A-Z][a-z]+$/;
    if (username === "") {
        nameErr.textContent = "Must have a username";
        isValid = false;
    }else if(!namepattern.test(username)){
        nameErr.textContent = "Name must start with capital letter";
        isValid = false;
    }
    // mailvalid 
    var mailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (mail === "") {
        mailErr.textContent = "mail is required";
        isValid = false;
    }else if(!mailpattern.test(mail)){
        mailErr.textContent = "invalid mail format";
        isValid = false;
    }
    // agevalid 
    if (age === "") {
        ageErr.textContent = "Age is required";
        isValid = false;
    }else if (isNaN(age) || age < 16 || age > 100) {
        ageErr.textContent = "Enter an age between 16 and 100";
        isValid = false;
    }
    // mobvalid 
    var mobpattern = /^\d{10}$/;
    if(mob === ""){
        mobErr.textContent = "Enter your mobile number";
        isValid = false;
    }else if(!mobpattern.test(mob)) {
        mobErr.textContent = "must consist 10 numbers";
        isValid = false;
    }
    // gendervalid 
    const genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected){
            document.getElementById("genrr").innerText = "please select your gender";
            isValid = false;
    }
    // termsvalid 
    const terms = document.getElementById("terms");
    if (!terms.checked) {
        document.getElementById("termserr").innerText = "You must agree to the terms and conditions.";
        isValid = false;
    }
    // timevalid 
    const TimeSelected = document.querySelector('input[name="learning_time"]:checked');
    if(!TimeSelected){
        document.getElementById("timeErr").innerText = "Select your Time";
        isValid = false;
    }
    // coursevalid 
    if (course === "") {
    courseErr.textContent = "Please select a course.";
    isValid = false;
    }
    // modevalid 
    if (mode === "") {
    modeErr.textContent = "Please select a mode.";
    isValid = false;
    }  
    // occupationvalid 
    if(occupation === ""){
        ocpErr.textContent = "Select an occupation";
        isValid = false;
    }  
    // levelvalid 
    if(level === ""){
        levelErr.textContent = "select your level";
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }else{
        alert("Registration Successfull");
        window.location.href = "index.html";
    }

}) 



