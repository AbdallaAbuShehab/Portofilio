"use strict";

// import "@fortawesome/fontawesome-free/css/all.min.css";
import { downloadPdf } from "./helper.js";

const cvBtn = document.querySelector(".landing__overview--btn");
const pdfUrl =
  "https://drive.google.com/file/d/1dADJuRZaSadttE5P0Q0BMDH5PIXV2kat/view?usp=sharing";

const projectSectionContinBtns = document.querySelector(
  ".myProject__box--tabs"
);
const projectAllBtns = document.querySelectorAll(".tab");
const projectAllCards = document.querySelectorAll(".project--card");

const cv = function () {
  cvBtn.addEventListener("click", function (e) {
    const clicked = e.target.classList.contains("landing__overview--btn");
    if (!clicked) return;

    cvBtn.classList.remove("vibrate-anime");
    // downloadPdf(pdfUrl);
    window.open(pdfUrl);
  });
};
cv();

const btnProjectEvnt = function () {
  projectSectionContinBtns.addEventListener("click", function (e) {
    const click = e.target.classList.contains("tab");
    if (!click) return;

    let data = e.target.dataset.btnKey;
    projectAllBtns.forEach((btn) => btn.classList.remove("active-btn"));
    e.target.classList.add("active-btn");

    projectAllCards.forEach((card) =>
      card.classList.add("projectCard--Hidden")
    );

    document
      .querySelector(`.card--${data}`)
      .classList.remove("projectCard--Hidden");

    console.log(data);
  });
};
btnProjectEvnt();
