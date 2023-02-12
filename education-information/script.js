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

const dropdown = document.getElementById("dropdown-input");
const list = document.getElementById("list");
dropdown.addEventListener("click", function (e) {
  list.classList.toggle("hidden");
});

let degree = document.getElementById("degree-input");
const listItems = document.getElementsByClassName("elements");

for (const item of listItems) {
  item.addEventListener("click", function (e) {
    degree.value = e.target.textContent;
    list.classList.toggle("hidden");
  });
}

document.addEventListener("click", (e) => {
  const degreeForm = document.getElementById("degree-form");
  if (!degreeForm.contains(e.target)) {
    list.classList.add("hidden");
  }
});
