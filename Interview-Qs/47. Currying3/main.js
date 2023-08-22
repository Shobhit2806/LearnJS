function add(...current) {
  // store the current arguments
  let sum = current;
  function resultFn(...rest) {
    // merge the new arguments
    sum = [...sum, ...rest];
    return resultFn;
  }
  // override the valueOf to return sum
  resultFn.valueOf = function () {
    return sum.reduce((acc, current) => acc + current, 0);
  };
  // extend the valueOf
  resultFn.value = resultFn.valueOf;
  // return the inner function
  // on any primitive action .valueOf will be invoked
  // and it will return the value
  return resultFn;
}

console.log(add(1)(2).value()); // Output: 3
console.log(add(1, 2)(3).value()); // Output: 6
console.log(add(1)(2)(3).value()); // Output: 6
console.log(add(1)(2) + 3); // Output: 6
