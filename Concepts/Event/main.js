const formEl = document.querySelector(".form");
const pEl = document.querySelector(".innerChild");
const divEl = document.querySelector(".div");

pEl.addEventListener(
  "click",
  () => {
    alert("p");
  },
  true
);
formEl.addEventListener("click", () => {
  alert("form");
},true);
divEl.addEventListener("click", () => {
  alert("div");
},true);
