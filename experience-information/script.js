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
document.getElementById("cv-photo").src = photo;

const experienceInformationForm = document.getElementById(
  "experience-information-form"
);

experienceInformationForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const position = document.getElementById("cv-position").value;
  const employer = document.getElementById("cv-empleyer").value;
  const startWork = document.getElementById("cv-start-work").value;
  const endWork = document.getElementById("cv-end-work").value;
  const description = document.getElementById("cv-description").value;

  localStorage.setItem("position", position);
  localStorage.setItem("employer", employer);
  localStorage.setItem("startWork", startWork);
  localStorage.setItem("endWork", endWork);
  localStorage.setItem("description", description);
  window.location.href = "/education-information/";
});
