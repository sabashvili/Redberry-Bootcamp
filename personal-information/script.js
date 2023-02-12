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
    localStorage.setItem("photo", url);
    document.getElementById("cv-photo").src = url;
  });
});

const allInputs = document.querySelectorAll("input, textarea");

personalInformationForm.addEventListener("submit", function (e) {
  e.preventDefault();
  //   const firstNameValue = document.getElementById("first-name").value;
  //   const lastNameValue = document.getElementById("last-name").value;
  //   const aboutMe = document.getElementById("about-me").value;
  //   const email = document.getElementById("email").value;
  //   const mobNumber = document.getElementById("number").value;

  //   localStorage.setItem("first-name", firstNameValue);
  //   localStorage.setItem("last-name", lastNameValue);
  //   localStorage.setItem("about-me", aboutMe);
  //   localStorage.setItem("email", email);
  //   localStorage.setItem("number", mobNumber);
  //   localStorage.setItem("photo", selectedImage);
  window.location.href = "/experience-information/";
});

for (const i of allInputs) {
  i.addEventListener("blur", function (e) {
    localStorage.setItem(e.target.name, i.value);

    if (e.target.name == "cv-email") {
      if (document.getElementById("email").value != "") {
        document.getElementById("mail-infromation").classList.remove("hidden");
      } else {
        document.getElementById("mail-infromation").classList.add("hidden");
      }
    }

    if (e.target.name == "cv-number") {
      if (document.getElementById("number").value != "") {
        document.getElementById("tel-information").classList.remove("hidden");
      } else {
        document.getElementById("tel-information").classList.add("hidden");
      }
    }

    if (e.target.name == "cv-about-me") {
      if (document.getElementById("about-me").value != "") {
        document.getElementById("cv-about-me-label").classList.remove("hidden");
        document.getElementById("line-third").classList.remove("hidden");
      } else {
        document.getElementById("cv-about-me-label").classList.add("hidden");
        document.getElementById("line-third").classList.add("hidden");
      }
    }

    document.getElementById(e.target.name).textContent = localStorage.getItem(
      e.target.name
    );
  });
  if (i.type !== "file") {
    i.value = localStorage.getItem(i.name);
  }
}
