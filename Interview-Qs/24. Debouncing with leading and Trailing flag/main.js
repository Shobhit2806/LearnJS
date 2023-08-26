// leading -> Fn call should be made when i start typing
// trailing -> Fn call should be made when i pause typing

const debounce = function (
  fn,
  delay,
  option = { leading: true, trailing: true }
) {
  let timer;
  let isLeadingInvoked = false;
  return function (...args) {
    const context = this;

    if (timer) clearTimeout(timer);

    if (option.leading && !timer) {
      fn.apply(context, args);
      isLeadingInvoked = true;
    } else {
      isLeadingInvoked = false;
    }

    timer = setTimeout(()=>{
      if(option.trailing && !isLeadingInvoked){
        fn.apply(context,args)
      }
      timer=null;
    },delay)
   
  };
};

// Example usage
const debounceDelay = 1000; // Set the delay according to your requirements

function handleButtonClick(event) {
  console.log("Button clicked!", event.target.value);
  // Put your button click handling code here
}

const debouncedInput = debounce(handleButtonClick, debounceDelay);
