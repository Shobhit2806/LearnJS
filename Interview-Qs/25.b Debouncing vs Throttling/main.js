const debounce = function (fn, delay) {
  let timer;
  return function (...args) {
    let context = this;
    // console.log(this);
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};
// Example usage
const debounceDelay = 300; // Set the delay according to your requirements

function handleButtonClickDebounce() {
  console.log("Debounce clicked!");
  // Put your button click handling code here
}

const debouncedButtonClick = debounce(handleButtonClickDebounce, debounceDelay);

// Attach the debounced function to the button click event
const buttonDebounced = document.getElementById("myDebouncingField"); // Replace with your button's ID



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
const throttleDelay = 500; // Set the delay according to your requirements

function handleButtonClickThrottle() {
  console.log("Throttle clicked!");
  // Put your button click handling code here
}

const throttleButtonClick = throttle(handleButtonClickThrottle, throttleDelay);

// Attach the throttled function to the button click event
const button = document.getElementById("myThrottledField"); // Replace with your button's ID

// We need to use args so that we can use throttledButtonClick fn in this way also
// button.addEventListener("click", () => throttleButtonClick("Shobhit"));
