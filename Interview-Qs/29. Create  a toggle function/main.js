const toggle = (...args) => {
  let index = -1;
  return function () {
    index = (index + 1) % args.length;
    return args[index];
  };
};

let onOff = toggle("on", "off");
console.log(onOff()); // "on"
console.log(onOff()); // "off"
console.log(onOff()); // "on"
