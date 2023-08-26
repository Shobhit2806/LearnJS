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

function handleButtonClick(name) {
  console.log("Button clicked!" , name);
  // Put your button click handling code here
}

const debouncedButtonClick = debounce(handleButtonClick, debounceDelay);

// Attach the debounced function to the button click event
const button = document.getElementById("myButton"); // Replace with your button's ID

// We need to use args so that we can use debouncedButtonClick fn in this way also
button.addEventListener("click", ()=>debouncedButtonClick("Shobhit"));
