let toggleMobileNav = document.querySelector(".mobile-nav-link-button");
let mobileNavContainer = document.querySelector(".mobile-nav-container");
let mobileNavs = document.querySelectorAll(".mobile-nav-link");

toggleMobileNav.onclick = function () {
  mobileNavContainer.classList.toggle("media-h-0");
};

for(let mobileNav of mobileNavs) {
  mobileNav.onclick = function () {
    mobileNavContainer.classList.toggle("media-h-0");
  };

}
let backToTop = document.querySelector(".backToTop");

backToTop.onclick = function () {
  scrollTo({
    top: 0,
    behavior: "smooth"
  })
  
}





let main = document.querySelector("main");
let footer = document.querySelector("footer");
let loader = document.querySelector(".loader-section");
let resultPage = document.querySelector(".result-sheet-section");
let studentName = document.querySelector(".student-name");
let header = document.querySelector("header");

function gradeStudent() {
  let scores = ["A1", "B2", "B3", "C4", "C5", "C6", "D7"];

  let roundomNum1 = Math.floor(Math.random() * 7);
  let roundomNum2 = Math.floor(Math.random() * 7);
  let roundomNum3 = Math.floor(Math.random() * 7);
  let roundomNum4 = Math.floor(Math.random() * 7);
  let roundomNum5 = Math.floor(Math.random() * 7);
  let roundomNum6 = Math.floor(Math.random() * 7);
  let roundomNum7 = Math.floor(Math.random() * 7);
  let roundomNum8 = Math.floor(Math.random() * 7);
  let roundomNum9 = Math.floor(Math.random() * 7);
  let roundomNum10 = Math.floor(Math.random() * 7);
  let roundomNum11 = Math.floor(Math.random() * 7);
  let roundomNum12 = Math.floor(Math.random() * 7);

  let score1 = scores[roundomNum1];
  let score2 = scores[roundomNum2];
  let score3 = scores[roundomNum3];
  let score4 = scores[roundomNum4];
  let score5 = scores[roundomNum5];
  let score6 = scores[roundomNum6];
  let score7 = scores[roundomNum7];
  let score8 = scores[roundomNum8];
  let score9 = scores[roundomNum9];
  let score10 = scores[roundomNum10];
  let score11 = scores[roundomNum11];
  let score12 = scores[roundomNum12];

  let grade1 = document.querySelector(".grade1");
  let grade2 = document.querySelector(".grade2");
  let grade3 = document.querySelector(".grade3");
  let grade4 = document.querySelector(".grade4");
  let grade5 = document.querySelector(".grade5");
  let grade6 = document.querySelector(".grade6");
  let grade7 = document.querySelector(".grade7");
  let grade8 = document.querySelector(".grade8");
  let grade9 = document.querySelector(".grade9");
  let grade10 = document.querySelector(".grade10");
  let grade11 = document.querySelector(".grade11");
  let grade12 = document.querySelector(".grade12");

  grade1.innerHTML = score1;
  grade2.innerHTML = score2;
  grade3.innerHTML = score3;
  grade4.innerHTML = score4;
  grade5.innerHTML = score5;
  grade6.innerHTML = score6;
  grade7.innerHTML = score7;
  grade8.innerHTML = score8;
  grade9.innerHTML = score9;
  grade10.innerHTML = score10;
  grade11.innerHTML = score11;
  grade12.innerHTML = score12;
}

function validateForm() {
  let selectYear = document.querySelector("#select-year").value;
  let myName = document.querySelector("#my-name").value;
  let myPassword = document.querySelector(".my-password").value;

  if (selectYear === "") {
    alert("Kindly Select Exam Year");
  }
  if (myName === "") {
    alert("Kindly Enter your Name");
  }
  if (myPassword === "") {
    alert("Kindly Enter your Password");
  }
  if (myPassword.length != "11") {
    alert("Kindly Enter Correct Password");
  } else {
    selectYear.innerHTML = "";
    myName.innerHTML = "";
    myPassword.innerHTML = "";
    studentName.innerHTML = myName;
    header.classList.add("hidden");
    main.classList.add("hidden");
    footer.classList.add("hidden");
    loader.classList.remove("hidden");
    setTimeout(() => {
      loader.classList.add("hidden");
      gradeStudent();
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
      992: { perPage: 1 },
    },
  }).mount();
});
