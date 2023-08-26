const sampler = (fn, count) => {
  let currCnt = 0;
  return function (...args) {
    currCnt = currCnt + 1;
    if (currCnt === count) {
      fn(...args);
      currCnt = 0;
    }
  };
};

function message(msg) {
  console.log(msg);
}

const sample = sampler(message, 4);
console.log(sample("1"));
console.log(sample("2"));
console.log(sample("3"));
console.log(sample("4"));

console.log(sample("5"));
console.log(sample("6"));
console.log(sample("7"));
console.log(sample("8"));

console.log(sample("9"));
console.log(sample("10"));
console.log(sample("11"));
console.log(sample("12"));
