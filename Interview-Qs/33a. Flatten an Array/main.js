// reduce helps us to execute a customise callback ovet iterations of array.

const flattenArray = (arr) => {
  return arr.reduce((ans, curr) => {
    if (Array.isArray(curr)) {
      // curr could be array as well and we want to concat it.
      ans = ans.concat(flattenArray(curr));
      // vs
      // ans.push(flattenArray(currVal));
      // ye isme array push krdega aur concat append krega mjh append krna h
    } else {
      ans = ans.concat(curr);
    }
    return ans;
  }, []);
};

console.log(
  flattenArray([
    [[1, [1.1]], 2, 3],
    [4, 5],
  ])
);
