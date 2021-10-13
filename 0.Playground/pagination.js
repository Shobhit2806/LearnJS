// Pagination Code

// To display next and prev button
const previousButton = document.querySelector("#prevBtn");
const nextButton = document.querySelector("#nextBtn");
const currentPage = document.querySelector("#currPage");
const totalPages = document.querySelector("#totalPage");
const PER_PAGE = 2;

let currentPageNumber = 1;
previousButton.disabled = currentPageNumber === 1;
currentPage.textContent = currentPageNumber;

// function Pagination(totalItems) {
//   const totalPageCount = Math.ceil(totalItems / PER_PAGE);
//   totalPages.textContent = totalPageCount;

//   function updatePaging() {
//     currentPage.textContent = currentPageNumber;

//     nextButton.disabled = currentPageNumber === totalPageCount;
//     previousButton.disabled = currentPageNumber === 1;
//   }

//   updatePaging();

//   nextButton.addEventListener("click", () => {
//     currentPageNumber++;
//     updatePaging();
//     pageArraySplit(data.data);
//   });

//   previousButton.addEventListener("click", () => {
//     currentPageNumber--;
//     updatePaging();
//     pageArraySplit(data.data);
//   });
// }
// Pagination(6);

var Pagination = (function (totalItems) {
  const totalPageCount = Math.ceil(totalItems / PER_PAGE);
  totalPages.textContent = totalPageCount;

  function updatePaging() {
    currentPage.textContent = currentPageNumber;

    nextButton.disabled = currentPageNumber === totalPageCount;
    previousButton.disabled = currentPageNumber === 1;
  }

  updatePaging();

  nextButton.addEventListener("click", () => {
    currentPageNumber++;
    updatePaging();
    pageArraySplit(data.data);
  });

  previousButton.addEventListener("click", () => {
    currentPageNumber--;
    updatePaging();
    pageArraySplit(data.data);
  });
})(6); //This is called a immediately invoked function definition,or IIFE

// TO display data in html component...
var pageArraySplit = function (array) {
  const startingIndex = (currentPageNumber - 1) * PER_PAGE;
  const endingIndex = startingIndex + PER_PAGE;
  result = array.slice(startingIndex, endingIndex);
  console.log(result);
  generateHTML(result);
};

/*******************************************/

// Follow Up Questions
// Q1) async / await vs fetch
// Q2) How to made this code modular
// Q3) Understand everything with sync with Namastey Js notes and experiment stuff
// Q4) 5 levels of Why
// Q5) Modular JS ..Meidum BLog,,,maza aagya...:) :) :)
// Q6) List uses if each functionality of Js like where this could be used
//Pagination
// https://benparisotstaging.wordpress.com/2019/05/27/learn-by-doing-pagination-in-vanilla-javascript/
