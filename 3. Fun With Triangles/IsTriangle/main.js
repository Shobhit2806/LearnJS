const angles = document.querySelectorAll(".angle");
const isTriangleBtn = document.querySelector("#check-button");
const output = document.querySelector("#message");
const message = document.querySelector("#message");

isTriangleBtn.addEventListener("click", function isTriangle() {
  message.style.display = "none";
  const sum =
    Number(angles[0].value) + Number(angles[1].value) + Number(angles[2].value);
  console.log(sum);
  if (sum === 180) {
    showMessage("The angles forms a triangle");
  } else {
    showMessage("The angles dont form a triangle");
  }
});

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
