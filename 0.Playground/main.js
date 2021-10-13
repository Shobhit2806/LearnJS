const studentList = document.querySelector("#student-container");
const sortBtn = document.querySelector("#sortDescending");

//Step1) Fetching data from api

let data;
let result;
async function fetchStudentsData() {
  const response = await fetch("https://reqres.in/api/users?page=2");
  data = await response.json();
  // pageArraySplit(data.data);

  pageArraySplit(data.data);
  console.log(data.data);
  return data;
}

fetchStudentsData();

// Sort Functionality
sortBtn.addEventListener("click", function sortDescending() {
  result.sort(function (a, b) {
    if (a.id > b.id) return -1;
    if (a.id < b.id) return 1;
  });
  generateHTML(result);
});

// Update DOM to display data accordingly
var generateHTML = function (results) {
  let generatedHTML = "";

  results.map((result) => {
    generatedHTML += `
      <h1>${result.first_name}</h1>
        <h1>${result.last_name}</h1>
        <p>${result.email}</p>
        <p>${result.id}</p>
    `;
  });

  studentList.innerHTML = generatedHTML;
};

// Another way without async await
// fetch("https://reqres.in/api/users?page=2")
//   .then(function (response) {
//     console.log(response);
//     return response;
//   })
//   .then((response) => response.json())
//   .then((data) => console.log(data));
