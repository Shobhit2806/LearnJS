let counter = 0;
const getData = () => {
  console.log("Fetching Data", counter++);
};

const throttle = function (fn, delay) {
  let flag = true;
  return function () {
    let context = this;
    args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const throttleMethod = throttle(getData, 3000);
