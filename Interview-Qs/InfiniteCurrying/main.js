const add = (a) => {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
};

console.log(add(4)(2)(1)());
