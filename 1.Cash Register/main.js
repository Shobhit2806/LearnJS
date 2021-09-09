const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const numberOfNotesArray = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

console.log(billAmount.value);
// console.log(cashGiven.value);

checkButton.addEventListener("click", function validateBillandCashAmount() {
  errorMessage.style.display = "none";
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      showMessage("The cash provided should be atleast equal to bill amount");
    }
  } else {
    showMessage("The bill amount should be greater than 0");
  }
});
function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberofNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned %= availableNotes[i];
    numberOfNotesArray[i].innerText = numberofNotes;
  }
}
function showMessage(message) {
  errorMessage.style.display = "block";
  errorMessage.innerText = message;
}
