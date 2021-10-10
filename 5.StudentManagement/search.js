const searchBox = document.querySelector("#searchBox");
let search_term = "";
searchBox.addEventListener("input", (e) => {
  search_term = e.target.value;
  if (search_term.length > 0) {
    const NewData = data.data.filter((searchedData) =>
      searchedData.first_name.toLowerCase().includes(search_term.toLowerCase())
    );
    console.log(NewData);
    generateHTML(NewData);
  }
});
