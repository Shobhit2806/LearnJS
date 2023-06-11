const curry = () => {
  let sum = 0;
  return function (num=0) {
    sum += num;
    return sum;
  };
};

let sumWithPrevVal = curry();
console.log(sumWithPrevVal(5)); //5
console.log(sumWithPrevVal(3)); //8
console.log(sumWithPrevVal(4)); //12
console.log(sumWithPrevVal(0)); //12
console.log(sumWithPrevVal()); //12
