const curry = () => {
  let sum = 0;
  const addition = (a) => {
    sum += a;
    return sum;
  };
  return addition;
};
let sum = curry()
console.log(sum(5));
console.log(sum(3));
console.log(sum(4));

// This will not work since curry function invokes again and again
//and re initialises sum variable again and again
// console.log(curry()(5));
// console.log(curry()(4));
// console.log(curry()(3));
