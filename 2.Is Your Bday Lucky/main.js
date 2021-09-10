const DateOfBirth = document.querySelector("#DateOfBirth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#message");

checkButton.addEventListener("click", function AreYouLucky() {
  message.style.display = "none";
  const date = DateOfBirth.value;
  const sum = calculateSum(date);

  if (sum % luckyNumber.value == 0) {
    showMessage("You are Lucky!");
  } else {
    showMessage(
      "You are not lucky by birth,but hard work and calculated risks makes you lucky!"
    );
  }
});

function calculateSum(dob) {
  let yearVal =
    Number(dob.charAt(0)) +
    Number(dob.charAt(1)) +
    Number(dob.charAt(2)) +
    Number(dob.charAt(3));
  let monthVal = Number(dob.charAt(5)) + Number(dob.charAt(6));
  let dateVal = Number(dob.charAt(8)) + Number(dob.charAt(9));

  return yearVal + monthVal + dateVal;
}
function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
