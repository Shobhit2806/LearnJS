const countInArray = (arr, test) => {
  let count = 0;
  const search = (inputArr, test) => {
    for (let a of inputArr) {
      if (Array.isArray(a)) {
        search(a, test);
      }

      if (test(a)) {
        count++;
      }
    }
  };
  search(arr, test);
  return count;
};

const arr = [[1, [2, [3, 4, "foo", { a: 1, b: 2 }]], "bar"]];
const count = countInArray(arr, (e) => typeof e === "number");
console.log(count);
