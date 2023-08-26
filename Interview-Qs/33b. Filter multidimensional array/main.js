// reduce helps us to execute a customise callback ovet iterations of array.
// Iska recursive tree bna!! maza aaega
const filter = (arr, test) => {
  return arr.reduce((ans, curr) => {
    if (Array.isArray(curr)) {
      const output = filter(curr, test);
      ans.push(output);
    } else {
      if (test(curr)) {
        ans.push(curr);
      }
    }
    return ans;
  }, []);
};

const arr = [[1, [2, [3, "foo", { a: 1, b: 2 }]], "bar"]];
const filtered = filter(arr, (e) => typeof e === "number");
console.log(JSON.stringify(filtered));
