let header = document.querySelector("header");
let main = document.querySelector("main");
let footer = document.querySelector("footer");
let loader = document.querySelector(".loader-section");
let resultPage = document.querySelector(".result-sheet-section");
let studentName = document.querySelector(".student-name");

function validateForm() {
  let selectYear = document.querySelector("#select-year").value;
  let myName = document.querySelector("#my-name").value;
  let myPassword = document.querySelector(".my-password").value;
  let isValid = true;

  if (selectYear === "") {
    alert("Kindly Select Exam Year");
    isValid = false;
  }

  if (myName === "") {
    alert("Kindly Enter your Name");
    isValid = false;
  }
  if (myPassword === "") {
    alert("Kindly Enter your Password");
    isValid = false;
  }

  if (myPassword.length != "11") {
    alert("Kindly Enter Correct Password");
    isValid = false;
  } else {
    isValid = true;
    studentName.innerHTML = myName;
    header.classList.add("hidden");
    main.classList.add("hidden");
    footer.classList.add("hidden");
    loader.classList.remove("hidden");
    setTimeout(() => {
      loader.classList.add("hidden");
      resultPage.classList.remove("hidden");
    }, 6000);
  }
}

let resultForm = document.querySelector("#result-form");
resultForm.onsubmit = function (e) {
  e.preventDefault();
  validateForm();
};
let printPage = document.querySelector(".print-page");
printPage.onclick = function () {
  resultPage.classList.add("hidden");
  loader.classList.remove("hidden");
  setTimeout(() => {
    loader.classList.add("hidden");
    header.classList.remove("hidden");
    main.classList.remove("hidden");
    footer.classList.remove("hidden");
  }, 6000);
};

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide", {
    type: "loop",
    perPage: 3, // Number of items per row
    perMove: 1, // Moves in sets of 3
    gap: "10px",
    autoplay: true,
    breakpoints: {
      768: { perPage: 2 },
      480: { perPage: 1 },
    },
  }).mount();
});
