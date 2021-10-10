// const studentList = document.querySelector("#student-container");
// const sortBtn = document.querySelector("#sortDescending");

// //Step1) Fetching data from api

// let data;
// let result;
// async function fetchStudentsData() {
//   const response = await fetch("https://reqres.in/api/users?page=2");
//   data = await response.json();
//   pageArraySplit(data.data);
//   return data;
// }

// fetchStudentsData();

// // Sort Functionality
// sortBtn.addEventListener("click", function sortDescending() {
//   result.sort(function (a, b) {
//     if (a.id > b.id) return -1;
//     if (a.id < b.id) return 1;
//   });
//   generateHTML(result);
// });

// // Update DOM to display data accordingly
// function generateHTML(results) {
//   let generatedHTML = "";

//   results.map((result) => {
//     generatedHTML += `
//       <h1>${result.first_name}</h1>
//         <h1>${result.last_name}</h1>
//         <p>${result.email}</p>
//         <p>${result.id}</p>
//     `;
//   });

//   studentList.innerHTML = generatedHTML;
// }

// Another way without async await
// fetch("https://reqres.in/api/users?page=2")
//   .then((response) => console.log(response))
//   .then((response) => response.json())
//   .then((data) => console.log(data));

/*****************************************************************/

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
//Pagination
// https://benparisotstaging.wordpress.com/2019/05/27/learn-by-doing-pagination-in-vanilla-javascript/
