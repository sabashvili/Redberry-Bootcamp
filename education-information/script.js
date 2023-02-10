const firstName = localStorage.getItem("first-name");
const lastName = localStorage.getItem("last-name");
const aboutMe = localStorage.getItem("about-me");
const email = localStorage.getItem("email");
const mobNumber = localStorage.getItem("number");
const photo = localStorage.getItem("photo");

const position = localStorage.getItem("position");
const empleyer = localStorage.getItem("employer");
const startWork = localStorage.getItem("startWork");
const endWork = localStorage.getItem("endWork");
const description = localStorage.getItem("description");

document.getElementById(
  "cv-full-name"
).textContent = `${firstName} ${lastName}`;
document.getElementById("cv-about-me").textContent = aboutMe;
document.getElementById("cv-email").textContent = email;
document.getElementById("cv-number").textContent = mobNumber;
document.getElementById("cv-photo").src = photo;
document.getElementById(
  "position-and-employer"
).textContent = `${position}, ${empleyer}`;
document.getElementById(
  "start-and-end-work"
).textContent = `${startWork} - ${endWork}`;
document.getElementById("description-position").textContent = description;
