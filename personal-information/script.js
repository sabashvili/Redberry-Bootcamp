const personalInformationForm = document.getElementById(
  "personal-information-form"
);

let selectedImage = "";

const photo = document.getElementById("photo");
photo.addEventListener("change", () => {
  const fr = new FileReader();
  fr.readAsDataURL(photo.files[0]);
  fr.addEventListener("load", () => {
    const url = fr.result;
    selectedImage = url;
  });
});

personalInformationForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstNameValue = document.getElementById("first-name").value;
  const lastNameValue = document.getElementById("last-name").value;
  const aboutMe = document.getElementById("about-me").value;
  const email = document.getElementById("email").value;
  const mobNumber = document.getElementById("number").value;

  localStorage.setItem("first-name", firstNameValue);
  localStorage.setItem("last-name", lastNameValue);
  localStorage.setItem("about-me", aboutMe);
  localStorage.setItem("email", email);
  localStorage.setItem("number", mobNumber);
  localStorage.setItem("photo", selectedImage);
  window.location.href = "/experience-information/";
});
