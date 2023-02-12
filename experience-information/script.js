const firstName = localStorage.getItem("first-name");
const lastName = localStorage.getItem("last-name");
const aboutMe = localStorage.getItem("about-me");
const email = localStorage.getItem("email");
const mobNumber = localStorage.getItem("number");
const photo = localStorage.getItem("photo");

document.getElementById(
  "cv-full-name"
).textContent = `${firstName} ${lastName}`;
document.getElementById("cv-about-me").textContent = aboutMe;
document.getElementById("cv-email").textContent = email;
document.getElementById("cv-number").textContent = mobNumber;

console.log(photo, document.getElementById("cv-photo"));
document.getElementById("cv-photo").src = photo;

const experienceInformationForm = document.getElementById(
  "experience-information-form"
);

// let countMoreExperience = 0;

const addMoreExperienceBtn = document.getElementById("add-more-experience-btn");
addMoreExperienceBtn.addEventListener("click", function (e) {
  countMoreExperience++;
  const experienceForm = document.getElementById("for-clone");
  const clone = experienceForm.cloneNode(true);
  document
    .getElementById("experience-information-form-conteiner")
    .appendChild(clone);
  // clone.id = `form-${countMoreExperience}`;
  const a = clone.querySelectorAll("input, textarea");
  for (const textarea of a) {
    textarea.value = "";
  }
});

// experienceInformationForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const position = document.getElementById("cv-position").value;
//   const employer = document.getElementById("cv-empleyer").value;
//   const startWork = document.getElementById("cv-start-work").value;
//   const endWork = document.getElementById("cv-end-work").value;
//   const description = document.getElementById("cv-description").value;

//   localStorage.setItem("position", position);
//   localStorage.setItem("employer", employer);
//   localStorage.setItem("startWork", startWork);
//   localStorage.setItem("endWork", endWork);
//   localStorage.setItem("description", description);
//   window.location.href = "/education-information/";
// });

experienceInformationForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const position = document.querySelectorAll(".position-input");
  // const employer = document.querySelectorAll("cv-empleyer").value;
  // const startWork = document.querySelectorAll("cv-start-work").value;
  // const endWork = document.querySelectorAll("cv-end-work").value;
  // const description = document.querySelectorAll("cv-description").value;

  // localStorage.setItem("position", position);
  // localStorage.setItem("employer", employer);
  // localStorage.setItem("startWork", startWork);
  // localStorage.setItem("endWork", endWork);
  // localStorage.setItem("description", description);
  // window.location.href = "/education-information/";

  console.log(document.querySelectorAll(".position-input"));
});
