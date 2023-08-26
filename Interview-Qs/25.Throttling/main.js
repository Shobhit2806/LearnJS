const throttle = function (fn, delay) {
  let flag = true;
  return function (...args) {
    let context = this;

    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};
// Example usage
const throttleDelay = 300; // Set the delay according to your requirements

function handleButtonClick(name) {
  console.log("Button clicked!", name);
  // Put your button click handling code here
}

const throttleButtonClick = throttle(handleButtonClick, throttleDelay);

// Attach the throttled function to the button click event
const button = document.getElementById("myButton"); // Replace with your button's ID

// We need to use args so that we can use throttledButtonClick fn in this way also
button.addEventListener("click", () => throttleButtonClick("Shobhit"));
