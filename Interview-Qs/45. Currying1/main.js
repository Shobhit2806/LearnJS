const sum = (...args) => {
  let storage = [...args];
  if (storage.length === 0) {
    return 0;
  } else {
    const innerSum = (...args) => {
      storage.push(...args);
      if (args.length === 0) {
        return storage.reduce((a, b) => a + b, 0);
      } else {
        return innerSum;
      }
    };
    return innerSum;
  }
};

const res = sum(1, 2, 3, 4)();
const res2 = sum(1)(2)(3)(4)();
const res3 = sum(1, 2)(3, 4)();
const res4 = sum(1, 2, 3)(4)();
const res5 = sum(1)(2, 3, 4)();
const res6 = sum();
console.log(res, res2, res3, res4, res5, res6);
